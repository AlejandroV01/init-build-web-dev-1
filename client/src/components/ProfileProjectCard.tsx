import Project, { ProjectProfileForm } from '@/components/Project'
import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
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
  removeProject: (project_id: string) => void
}

const ProfileProjectCard: React.FC<ProjectCardProps> = ({ projects, isYourProfile, removeProject }) => {
  const [showProjectForm, setShowProjectForm] = useState<boolean>(false)
  return (
    <div className='p-5 flex flex-col gap-3 rounded-lg bg-foreground/5 shadow-lg dark:border dark:border-foreground/20'>
      <ProjectProfileForm heading='Add Project' isActive={showProjectForm} setIsActive={setShowProjectForm} isEdit={false} />
      <div className='flex justify-between items-center'>
        <span className='font-extrabold text-2xl'>Projects</span>
        <FaPlus size={14} color='#7B7B7B' onClick={() => setShowProjectForm(true)} className='hover:cursor-pointer' />
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
            removeProject={removeProject}
          />
        ))}
      </div>
    </div>
  )
}
export default ProfileProjectCard
