import Project from '@/components/Project'
import React from 'react'

import { HiPencil } from 'react-icons/hi2'

interface Projects {
  projectName: string
  positionTitle: string
  projectStartDate: string
  projectEndDate: string
  description: string
  project_id: string
}

interface ProjectCardProps {
  projects: Projects[]
  isYourProfile: boolean
}

const ProfileProjectCard: React.FC<ProjectCardProps> = ({ projects, isYourProfile }) => {
  return (
    <div className='p-5 flex flex-col gap-3 rounded-lg bg-foreground/5 shadow-lg dark:border dark:border-foreground/20'>
      <div className='flex justify-between items-center'>
        <span className='font-extrabold text-2xl'>Projects</span>
      </div>
      <div className='flex flex-col gap-7'>
        {projects.map((proj, index) => (
          <Project
            key={index}
            projectName={proj.projectName}
            positionTitle={proj.positionTitle}
            projectStartDate={proj.projectStartDate}
            projectEndDate={proj.projectEndDate}
            description={proj.description}
            project_id={proj.project_id}
            isYourProfile={isYourProfile}
          />
        ))}
      </div>
    </div>
  )
}
export default ProfileProjectCard
