import Project from '@/components/Project'
import React from 'react'

import { HiPencil } from 'react-icons/hi2'

interface Projects {
  projectName: string
  hackathonName: string
  projectDate: string
  description: string
}

interface ProjectCardProps {
  projects: Projects[]
}

const ProfileProjectCard: React.FC<ProjectCardProps> = ({ projects }) => {
  return (
    <div className='w-[850px] py-5 px-5 pt-4 flex flex-col gap-7 rounded-[8px] drop-shad bg-[#E8E8E8] shadow-md border-l border-b border-[#b2b2b2]'>
      <div className='flex justify-between items-center'>
        <span className='font-extrabold text-2xl text-black'>Projects</span>
        <HiPencil color='#7B7B7B' fontSize='18px' />
      </div>
      <div className='flex flex-col gap-7'>
        {projects.map((proj, index) => (
          <Project
            key={index}
            projectName={proj.projectName}
            hackathonName={proj.hackathonName}
            projectDate={proj.projectDate}
            description={proj.description}
          />
        ))}
      </div>
    </div>
  )
}
export default ProfileProjectCard
