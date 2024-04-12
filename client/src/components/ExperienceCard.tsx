import Experience, { ExperienceProfileForm } from '@/components/Experience'
import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { HiPencil } from 'react-icons/hi2'
interface Experiences {
  companyLogo: string
  companyTitle: string
  companyName: string
  startDate: string
  endDate: string
  description: string
  experience_id: string
}

interface ExperienceCardProps {
  experiences: Experiences[]
  isYourProfile: boolean
  removeExperience: (experience_id: string) => void
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experiences, isYourProfile, removeExperience }) => {
  const [showExperienceForm, setShowExperienceForm] = useState(false)
  return (
    <div className='p-5 flex flex-col gap-3 rounded-lg bg-foreground/5 shadow-lg dark:border dark:border-foreground/20'>
      <ExperienceProfileForm heading='Add a Work Experience' isActive={showExperienceForm} isEdit={false} setIsActive={setShowExperienceForm} />
      <div className='flex justify-between items-center'>
        <span className='font-extrabold text-2xl'>Work Experience</span>
        <FaPlus size={14} color='#7B7B7B' onClick={() => setShowExperienceForm(true)} className='hover:cursor-pointer' />
      </div>
      <div className='flex flex-col gap-7'>
        {experiences.map((exp, index) => (
          <Experience
            key={index}
            companyLogo={exp.companyLogo}
            companyTitle={exp.companyTitle}
            companyName={exp.companyName}
            startDate={exp.startDate}
            endDate={exp.endDate}
            description={exp.description}
            experience_id={exp.experience_id}
            isYourProfile={isYourProfile}
            removeExperience={removeExperience}
          />
        ))}
      </div>
    </div>
  )
}

export default ExperienceCard
