import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Button from '../Button'
const LinkStep = ({ handleGoNext }: { handleGoNext: () => void }) => {
  const navigate = useNavigate()
  const handleSubmit = () => {
    console.log('ALL THE STATE')
    navigate('/dashboard')
  }
  return (
    <div className='w-[800px] bg-red-500 flex flex-col items-center'>
      <h1>LinksStep</h1>
      <Button variant='primary' className='w-1/2' onClick={handleSubmit}>
        Submit!
      </Button>
      <p onClick={handleGoNext}>Skip this step</p>
    </div>
  )
}

export default LinkStep
