import React from 'react'

const steps = ['Personal Info', 'Education', 'Experience', 'Projects', 'Skills', 'Links']
const StepTracker = ({ currentStep }: { currentStep: string }) => {
  console.log(currentStep)
  return (
    <div className='flex'>
      {steps.map(step => {
        return <CircleTracker currentStep={currentStep} step={step} key={step} />
      })}
    </div>
  )
}

export default StepTracker

const CircleTracker = ({ currentStep, step }: { currentStep: string; step: string }) => {
  const isActive = steps.indexOf(currentStep) >= steps.indexOf(step)
  console.log(currentStep, steps.indexOf(currentStep), step, steps.indexOf(step), isActive)
  return (
    <div className='flex items-center'>
      {step !== steps[0] && <div className={`w-[100px] h-[2px] bg-primary mx-3 ${isActive ? 'bg-primary' : 'bg-foreground/50'}`} />}
      <div className='flex flex-col justify-center'>
        <div className={`${isActive ? 'bg-primary' : 'bg-foreground/50'} w-[25px] h-[25px] rounded-full flex items-center justify-center`}>
          <div className='w-[10px] h-[10px] rounded-full bg-white' />
        </div>
        <span className='absolute hidden'>{step}</span>
      </div>
    </div>
  )
}
