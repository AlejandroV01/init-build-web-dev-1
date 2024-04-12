import { useAppSelector } from '@/store/hooks'
import { useState } from 'react'
import EducationStep from './EducationStep'
import ExperienceStep from './ExperienceStep'
import LinksStep from './LinksStep'
import PersonalStep from './PersonalStep'
import ProjectStep from './ProjectStep'
import SkillsStep from './SkillsStep'
import StepTracker from './StepTracker'
const steps = ['Personal Info', 'Education', 'Experience', 'Projects', 'Skills', 'Links']
const ParentSteps = () => {
  const [currentStep, setCurrentStep] = useState<string>('Personal Info')
  const increaseStep = () => {
    if (steps.indexOf(currentStep) === steps.length - 1) return
    setCurrentStep(steps[steps.indexOf(currentStep) + 1])
  }
  const user = useAppSelector(state => state.auth)
  console.log(user)
  const RenderStep = () => {
    switch (currentStep) {
      case 'Personal Info':
        return <PersonalStep handleStepSubmit={increaseStep} />
      case 'Education':
        return <EducationStep handleStepSubmit={increaseStep} />
      case 'Experience':
        return <ExperienceStep handleStepSubmit={increaseStep} />
      case 'Projects':
        return <ProjectStep handleStepSubmit={increaseStep} />
      case 'Skills':
        return <SkillsStep handleStepSubmit={increaseStep} />
      case 'Links':
        return <LinksStep />
      default:
        return <ExperienceStep handleStepSubmit={increaseStep} />
    }
  }
  return (
    <div className='flex flex-col items-center gap-5'>
      <StepTracker currentStep={currentStep} />
      <RenderStep />
    </div>
  )
}

export default ParentSteps
