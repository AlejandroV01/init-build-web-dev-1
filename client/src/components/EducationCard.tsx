import Education from '@/components/Education'
import React from 'react'

interface Educations {
  schoolLogo: string
  schoolName: string
  schoolMajor: string
  startDate: string
  endDate: string
  education_id: string
}

interface EducationCardProps {
  educations: Educations[]
  isYourProfile: boolean
}

const ExperienceCard: React.FC<EducationCardProps> = ({ educations, isYourProfile }) => {
  return (
    <div className='p-5 flex flex-col gap-3 rounded-lg bg-foreground/5 shadow-lg dark:border dark:border-foreground/20'>
      <div className='flex justify-between items-center'>
        <span className='font-extrabold text-2xl '>Education</span>
      </div>
      <div className='flex flex-col gap-7'>
        {educations.map((edu, index) => (
          <Education
            key={index}
            schoolLogo={edu.schoolLogo}
            schoolName={edu.schoolName}
            schoolMajor={edu.schoolMajor}
            startDate={edu.startDate}
            endDate={edu.endDate}
            education_id={edu.education_id}
            isYourProfile={isYourProfile}
          />
        ))}
      </div>
    </div>
  )
}
export default ExperienceCard
