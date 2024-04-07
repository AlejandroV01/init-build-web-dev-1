import React from "react";
import { BsTools } from "react-icons/bs";

interface ProjectProps {
  projectName: string;
  hackathonName?: string;
  projectDate: string;
  description: string;
}

const Project = ({
  projectName,
  hackathonName,
  projectDate,
  description,
}: ProjectProps) => {
  if (!hackathonName) {
    hackathonName = "N/A";
  }
  return (
    <div className=" w-full flex flex-col ">
      <div className="flex gap-4 h-[80px] mb-4 text-black">
        <div className="h-full rounded-[8px] w-[80px] drop-shad bg-primary flex justify-center items-center">
          <BsTools color="white" fontSize={"45px"} />
        </div>
        <div className="flex flex-col h-full">
          <span className="font-extrabold text-lg text-2">{projectName}</span>
          <span className="mb-[5px]">
            <span className="">{hackathonName}</span>
          </span>
          <span>
            <span className="text-gray-500 text-sm">{projectDate}</span>
          </span>
        </div>
      </div>
      <div>
        <p className="text-black">{description}</p>
      </div>
    </div>
  );
};

export default Project;
