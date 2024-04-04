import React from "react";

interface EducationProps {
  schoolLogo: string;
  schoolName: string;
  schoolMajor: string;
  startDate: string;
  endDate: string;
}

const Education = ({
  schoolLogo,
  schoolName,
  schoolMajor,
  startDate,
  endDate,
}: EducationProps) => {
  return (
    <div className="w-full flex flex-col ">
      <div className=" flex gap-4 h-[80px] mb-4 text-black">
        <img
          src={schoolLogo}
          alt=""
          className="h-full rounded-[8px] drop-shad"
        />
        <div className="flex flex-col h-full">
          <span className="font-extrabold text-lg text-2">{schoolName}</span>
          <span className="mb-[5px]">
            <span className="">{schoolMajor}</span>
          </span>
          <span>
            <span className="text-gray-500 text-sm">{startDate}</span>
            <span> - </span>
            <span className="text-gray-500 text-sm">{endDate}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Education;
