import { useAppSelector } from '@/store/hooks'
import React from 'react'
const EducationStep = () => {
  const user = useAppSelector(state => state.auth)
  console.log('This is the user_id:', user.id)
  return (
    <div>
      <h1>EducationStep</h1>
    </div>
  )
}

export default EducationStep
