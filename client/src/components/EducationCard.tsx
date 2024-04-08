import React from "react";
import Education from "@/components/Education";

import { HiPencil } from "react-icons/hi2";

interface Educations {
  schoolLogo: string;
  schoolName: string;
  schoolMajor: string;
  startDate: string;
  endDate: string;
}

interface EducationCardProps {
  educations: Educations[];
}

const ExperienceCard: React.FC<EducationCardProps> = ({ educations }) => {
  return (
    <div className="w-[850px] py-5 px-5 pt-4 flex flex-col gap-7 rounded-[8px] drop-shad bg-[#E8E8E8]">
      <div className="flex justify-between items-center">
        <span className="font-extrabold text-2xl text-black">Education</span>
        <HiPencil color="#7B7B7B" fontSize="18px" />
      </div>
      <div className="flex flex-col gap-7">
        {educations.map((edu, index) => (
          <Education
            key={index}
            schoolLogo={edu.schoolLogo}
            schoolName={edu.schoolName}
            schoolMajor={edu.schoolMajor}
            startDate={edu.startDate}
            endDate={edu.endDate}
          />
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
