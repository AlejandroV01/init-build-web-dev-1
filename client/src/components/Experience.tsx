import React from "react";

interface ExperienceProps {
  companyLogo: string;
  companyTitle: string;
  companyName: string;
  startDate: string;
  endDate: string;
  description: string;
}
const Experience = ({
  companyLogo,
  companyTitle,
  companyName,
  companyLocation,
  startDate,
  endDate,
  description,
}: ExperienceProps) => {
  return (
    <div className=" w-full flex flex-col ">
      <div className="flex gap-4 h-[80px] mb-4 text-black">
        <img
          src={companyLogo}
          alt=""
          className="h-full rounded-[8px] drop-shad"
        />
        <div className="flex flex-col h-full">
          <span className="font-extrabold text-lg text-2">{companyTitle}</span>
          <span className="mb-[5px]">
            <span className="">{companyName}</span>
          </span>
          <span>
            <span className="text-gray-500 text-sm">{startDate}</span>
            <span> - </span>
            <span className="text-gray-500 text-sm">{endDate}</span>
          </span>
        </div>
      </div>
      <div>
        <p className="text-black">{description}</p>
      </div>
    </div>
  );
};

export default Experience;
