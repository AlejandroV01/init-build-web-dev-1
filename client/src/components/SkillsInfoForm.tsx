import Button from '@/components/Button'
import Badge from '@/components/badge'
import React, { useState } from 'react'
import Input from './Input'

const SkillsInfoForm = () => {
  const [skills, setSkills] = useState<string[]>([])
  const [input, setInput] = useState<string>('')
  const [duplicate, setDuplicate] = useState<boolean>(false)

  const addSkill = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (skills.includes(input)) {
      setDuplicate(true)
      setInput('')
      return
    }
    if (input.length <1) {
      return
    }
     
      setSkills([...skills, input])
      setInput('')
      
      setDuplicate(false)
  }
  
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{

    e.preventDefault();
    addSkill(e);
    console.log(skills);
  }

  const deleteSkill = (index:number) => {
    setSkills(skills.filter((_,i) => i !== index))
    console.log(skills)
  }

  return (
    <div className='flex flex-col justify-between gap-5 items-center'>
      <div className=''>Click a skill again to remove it.</div>
      {duplicate && (<h1 className='text-destructive'>Already entered skill.</h1>)}

      <form onSubmit={(e:React.FormEvent<HTMLFormElement>) => handleSubmit(e)}>
      <Input type='text' value={input} className='border' placeholder='Enter a skill...' onChange={(e) => setInput(e.target.value)}/>
      </form>
      
      <div className='flex gap-5'>
        {skills.map((skill, index) => {
          return <Badge label={skill} key={index} onClick={() => deleteSkill(index)}/> })}
      </div>

    </div>
  )
}

export default SkillsInfoForm