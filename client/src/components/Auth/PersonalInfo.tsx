import { useAppSelector } from '@/store/hooks'
import React, { useState } from 'react'
import Button from '../Button'
import FileDrop from '../FileDrop'
import Input from '../Input'
import Label from '../Label'
const PersonalInfo = ({ handleNext }: { handleNext: () => void }) => {
  const [file, newFile] = useState<File | null>(null)
  const user = useAppSelector(state => state.auth)
  console.log('user firstName:', user.first_name)
  console.log('user lastName:', user.last_name)
  const handleFileUpload = (newFile: File) => {
    console.log(newFile)
  }
  return (
    <div>
      <h1>Lets get started!</h1>
      <FileDrop />
    </div>
  )
}

export default PersonalInfo
