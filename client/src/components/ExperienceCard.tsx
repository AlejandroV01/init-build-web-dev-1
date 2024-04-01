import React from "react";
import Experience from "@/components/Experience";

import { HiPencil } from "react-icons/hi2";

interface Experiences {
  companyLogo: string;
  companyTitle: string;
  companyName: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface ExperienceCardProps {
  experiences: Experiences[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experiences }) => {
  return (
    <div className="w-[850px] py-5 px-5 pt-4 flex flex-col gap-7 rounded-[8px] drop-shad bg-[#E8E8E8]">
      <div className="flex justify-between items-center">
        <span className="font-extrabold text-2xl text-black">
          Work Experience
        </span>
        <HiPencil color="#7B7B7B" fontSize="18px" />
      </div>
      <div className="flex flex-col gap-7">
        {experiences.map((exp, index) => (
          <Experience
            key={index}
            companyLogo={exp.companyLogo}
            companyTitle={exp.companyTitle}
            companyName={exp.companyName}
            startDate={exp.startDate}
            endDate={exp.endDate}
            description={exp.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
