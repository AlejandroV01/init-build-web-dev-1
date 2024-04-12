import Education, { EducationProfileForm } from '@/components/Education'
import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'

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
  removeEducation: (education_id: string) => void
}

const ExperienceCard: React.FC<EducationCardProps> = ({ educations, isYourProfile, removeEducation }) => {
  const [showEducationForm, setShowEducationForm] = useState(false)
  return (
    <div className='p-5 flex flex-col gap-3 rounded-lg bg-foreground/5 shadow-lg dark:border dark:border-foreground/20'>
      <EducationProfileForm heading='Add a Education' isActive={showEducationForm} isEdit={false} setIsActive={setShowEducationForm} />
      <div className='flex justify-between items-center'>
        <span className='font-extrabold text-2xl '>Education</span>
        <FaPlus size={14} color='#7B7B7B' onClick={() => setShowEducationForm(true)} className='hover:cursor-pointer' />
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
            removeEducation={removeEducation}
          />
        ))}
      </div>
    </div>
  )
}
export default ExperienceCard
