import Experience from '@/components/Experience'
import React from 'react'
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
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experiences, isYourProfile }) => {
  return (
    <div className='p-5 flex flex-col gap-3 rounded-lg bg-foreground/5 shadow-lg dark:border dark:border-foreground/20'>
      <div className='flex justify-between items-center'>
        <span className='font-extrabold text-2xl'>Work Experience</span>
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
          />
        ))}
      </div>
    </div>
  )
}

export default ExperienceCard
