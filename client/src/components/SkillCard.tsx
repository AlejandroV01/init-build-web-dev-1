import { spawn } from 'child_process'
import React, { useState } from 'react'
import { CiEdit } from 'react-icons/ci'
import { FaXmark } from 'react-icons/fa6'
import { RiPencilFill } from 'react-icons/ri'
import Button from './Button'
import Input from './Input'
import Badge from './badge'

const SkillCard = ({
  onFinishEditing,
  skills,
  onSkillEnter,
  handleRemoveSkill,
}: {
  onFinishEditing: () => void
  skills: string[]
  onSkillEnter: (val: string) => void
  handleRemoveSkill: (skill: string) => void
}) => {
  const [inputSkill, setInputSkill] = useState<string>('')

  const [isEdit, setIsEdit] = useState<boolean>(false)

  const handleEdit = () => {
    setIsEdit(true)
  }
  const exitEdit = () => {
    setIsEdit(false)
    onFinishEditing()
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSkillEnter(inputSkill)
    setInputSkill('')
  }
  return (
    <div className='flex flex-col gap-2 bg-[#ededed] p-6 w-full'>
      <div className='flex items-center justify-between'>
        <h1 className='font-bold text-3xl'>Skills</h1>
        {!isEdit && <RiPencilFill onClick={handleEdit} className='cursor-pointer' size={20} />}
        {isEdit && <FaXmark onClick={exitEdit} className='cursor-pointer' size={20} />}
      </div>
      {isEdit && <p className='text-primary'>Click a skill again to remove it.</p>}
      {isEdit && (
        <div className='flex gap-5'>
          <form onSubmit={e => handleFormSubmit(e)} className='flex gap-3'>
            <Input type='text' value={inputSkill} onChange={event => setInputSkill(event.target.value)} className='bg-white' />
            <Button variant='primary'>Enter Skill</Button>
          </form>
          <Button variant='secondary' onClick={exitEdit}>
            Finish
          </Button>
        </div>
      )}
      <div className='flex justify-start gap-2 flex-wrap'>
        {skills.map((skill, index) => (
          <div className='cursor-pointer' onClick={() => handleRemoveSkill(skill)}>
            <Badge label={skill} key={index} />
          </div>
        ))}
      </div>
    </div>
  )
}
export default SkillCard
