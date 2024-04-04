import React, { useState } from 'react'
import { CiEdit } from 'react-icons/ci'
import { FaXmark } from 'react-icons/fa6'
import { RiPencilFill } from 'react-icons/ri'
import Button from './Button'
import Input from './Input'
import Badge from './badge'
import { spawn } from 'child_process'

const SkillCard = ({
  onFinishEditing,
  skills,
  onDoneClick,
}: {
  onFinishEditing: () => void
  skills: string[]
  onDoneClick: (e: React.FormEvent<HTMLFormElement>, val: string) => void
}) => {
  const [inputSkill, setInputSkill] = useState<string>('')

  


  const handleAddSkill = (event: React.FormEvent) => {
    event.preventDefault()
    if (!inputSkill) return
    setInputSkill('')

    
  }

  const [showExit, setShowExit] = useState<boolean>(false)
  const [showPencil, setShowPencil] = useState<boolean>(true)
  const [editMode, setEditMode] = useState<boolean>(false)  
  const [showSkills, setShowSkills] = useState <boolean>(true)
  const handleEdit = (event: React.FormEvent) => {
    event.preventDefault()
    setShowPencil(!showPencil)
    setShowExit(true)
    setEditMode(true)
    setShowSkills(false)
  }
  const exitEdit = (event: React.FormEvent) => {
    event.preventDefault()
    setShowExit(!showExit)
    setShowPencil(true)
    setEditMode(false)
    setShowSkills(true)
  }
  

  return (
    <div className ='flex flex-col gap-4 bg-blue-400 p-6'>
      <div className='flex items-center justify-between'>
        <h1 className='font-bold text-3xl'>Skills</h1>
        {showPencil && <button><RiPencilFill onClick={handleEdit} /></button>}
        {showExit && <button><FaXmark onClick={exitEdit} /></button>}

      </div>
      {/**
       * Edit mode will change decide if the div underneath this comment is shown
       * Edit mode will also decide which icon is shown like the pencil
       * onClick of x should also call the same function as the Finish button
       */}
      {showSkills && <div className = 'flex gap-5' >
        <form onSubmit={e => onDoneClick(e, inputSkill)} className='flex gap-3'>
          <Input type='text' value={inputSkill} onChange={event => setInputSkill(event.target.value)} className='bg-white' />
          <Button variant='primary'>Enter Skill</Button>
        </form>
        {editMode && <Button variant='secondary' onClick={onFinishEditing}>
          Finish
        </Button>}
      </div>}
      <div className='flex justify-start gap-2 flex-wrap'>
        {skills.map((skill, index) => (
          <Badge label={skill} key={index} />
        ))}
      </div>
    </div>
  )
       
}
export default SkillCard
