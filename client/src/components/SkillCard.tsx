import React, { useState } from 'react'
import { FaXmark } from 'react-icons/fa6'
import { HiPencil } from 'react-icons/hi2'
import Button from './Button'
import Input from './Input'
import Badge from './badge'

const SkillCard = ({
  onFinishEditing,
  skills,
  onSkillEnter,
  handleRemoveSkill,
  handleCancelEditing,
  isYourProfile,
}: {
  onFinishEditing: () => void
  skills: string[]
  onSkillEnter: (val: string) => void
  handleRemoveSkill: (skill: string) => void
  handleCancelEditing: () => void
  isYourProfile: boolean
}) => {
  const [inputSkill, setInputSkill] = useState<string>('')

  const [isEdit, setIsEdit] = useState<boolean>(false)

  const handleEdit = () => {
    setIsEdit(true)
  }
  const exitEdit = () => {
    setIsEdit(false)
    handleCancelEditing()
  }
  const finishEdit = () => {
    setIsEdit(false)
    onFinishEditing()
  }
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSkillEnter(inputSkill)
    setInputSkill('')
  }
  const handleRemove = (skill: string) => {
    if (!isEdit) return
    handleRemoveSkill(skill)
  }
  return (
    <div className='p-5 flex flex-col gap-2 rounded-lg bg-foreground/5 shadow-lg dark:border dark:border-foreground/20'>
      <div className='flex items-center justify-between'>
        <span className='font-extrabold text-2xl'>Skills</span>
        {!isEdit && isYourProfile && <HiPencil onClick={handleEdit} className='cursor-pointer' size={18} color='#7B7B7B' />}
        {isEdit && isYourProfile && <FaXmark onClick={exitEdit} className='cursor-pointer' size={18} />}
      </div>
      {isEdit && <p className='text-primary'>Click a skill again to remove it.</p>}
      {isEdit && (
        <div className='flex gap-5'>
          <form onSubmit={e => handleFormSubmit(e)} className='flex gap-3'>
            <Input type='text' value={inputSkill} onChange={event => setInputSkill(event.target.value)} className='bg-white' />
            <Button variant='primary'>Enter Skill</Button>
          </form>
          <Button variant='secondary' onClick={finishEdit}>
            Finish
          </Button>
        </div>
      )}
      <div className='flex justify-start gap-2 flex-wrap'>
        {skills.map((skill, index) => (
          <div className={`${isEdit && 'cursor-pointer'}`} onClick={() => handleRemove(skill)} key={index}>
            <Badge label={skill} key={index} />
          </div>
        ))}
      </div>
    </div>
  )
}
export default SkillCard
