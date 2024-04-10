import Badge from '@/components/badge'
import React, { useState } from 'react'
import Input from './Input'

const SkillsInfoForm = ({
  skills,

  handleSkillChange,
  handleSkillRemove,
}: {
  skills: string[]

  handleSkillChange: (val: string) => void
  handleSkillRemove: (index: number) => void
}) => {
  const [input, setInput] = useState<string>('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleSkillChange(input)
    setInput('')
  }

  return (
    <div className='flex flex-col justify-between gap-1 items-center w-full'>
      <div className='text-sm mt-3'>Click a skill again to remove it.</div>
      <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)} className='w-full'>
        <Input
          type='text'
          value={input}
          className='border min-w-fit w-full'
          placeholder='Enter a skill...'
          onChange={e => setInput(e.target.value)}
        />
      </form>
      <div className='flex gap-3 mt-3 justify-start flex-wrap w-full'>
        {skills.map((skill, index) => {
          return <Badge label={skill} key={index} onClick={() => handleSkillRemove(index)} />
        })}
      </div>
    </div>
  )
}

export default SkillsInfoForm
