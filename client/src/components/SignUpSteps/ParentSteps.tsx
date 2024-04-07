import React, { useState } from 'react'
import EducationStep from './EducationStep'
import ExperienceStep from './ExperienceStep'
import PersonalInfoStep from './PersonalInfoStep'
import StepTracker from './StepTracker'
const steps = ['Personal Info', 'Education', 'Experience', 'Projects', 'Skills', 'Links']
const ParentSteps = () => {
  const [currentStep, setCurrentStep] = useState<string>('Personal Info')
  const increaseStep = () => {
    if (steps.indexOf(currentStep) === steps.length - 1) return
    setCurrentStep(steps[steps.indexOf(currentStep) + 1])
  }
  console.log(currentStep)
  const RenderStep = () => {
    switch (currentStep) {
      case 'Personal Info':
        return <PersonalInfoStep />
      case 'Education':
        return <EducationStep />
      case 'Experience':
        return <ExperienceStep />
      default:
        return <PersonalInfoStep />
    }
  }
  console.log(currentStep)
  return (
    <div>
      <StepTracker currentStep={currentStep} />
      <RenderStep />
      <button onClick={increaseStep} className='bg-red-500 p-2'>
        Next
      </button>
    </div>
  )
}

export default ParentSteps
