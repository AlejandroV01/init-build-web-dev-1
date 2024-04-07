import { IIdeaCreate } from '@/routes/Home'
import { useAppSelector } from '@/store/hooks'
import React, { useState } from 'react'
import { FaMinus } from 'react-icons/fa'
import { FaPlus, FaXmark } from 'react-icons/fa6'
import { toast } from 'react-toastify'
import Button from './Button'
import Input from './Input'
import Badge from './badge'
const CreateProject = ({ handleClosePopup, handleCreateIdea }: { handleClosePopup: () => void; handleCreateIdea: (idea: IIdeaCreate) => void }) => {
  const user = useAppSelector(state => state.auth)
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [techStack, setTechStack] = useState<string>('')
  const [repoLink, setRepoLink] = useState<string>('')
  const [frontend, setFrontend] = useState<number>(0)
  const [backend, setBackend] = useState<number>(0)
  const [fullstack, setFullstack] = useState<number>(0)
  const [uiux, setUiux] = useState<number>(0)
  const [techStackBadges, setTechStackBadges] = useState<string[]>([])

  const handleBadgeEnter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (techStackBadges.includes(techStack) || techStack === '') {
      return
    }
    setTechStackBadges([...techStackBadges, techStack])
    setTechStack('')
  }

  const handleRemoveBadge = (badge: string) => {
    const newBadges = techStackBadges.filter(b => b !== badge)
    setTechStackBadges(newBadges)
  }
  const handleSubmitIdea = () => {
    if (title === '' || description === '' || techStackBadges.length === 0 || repoLink === '' || frontend + backend + fullstack + uiux === 0) {
      return alert('Fill all fields!')
    }
    // if (!user.id) return alert('Not signed in!')
    const idea: IIdeaCreate = {
      id: user.id || 1,
      title,
      description,
      techStack: techStackBadges,
      repoLink,
      frontend,
      backend,
      fullstack,
      uiux,
    }
    handleCreateIdea(idea)
  }
  return (
    <div className='z-10 absolute w-screen h-screen bg-black/50 left-0 top-0 flex items-center justify-center'>
      <div className='bg-white rounded-lg absolute left-0 right-0 ml-auto mr-auto w-fit max-w-[80%] flex flex-col md:flex-row  '>
        <div className='bg-primary text-white w-full md:w-1/2 p-8 rounded-tl-lg rounded-tr-lg md:rounded-bl-lg md:rounded-tr-none'>
          <h2 className='font-bold text-3xl'>Idea Creation</h2>
          <p className='mt-2'>Create an idea to collaborate with the Devbuds community!</p>
          <img src='/undraw_collab.svg' alt='people working together' className='mt-10 hidden md:block' />
        </div>
        <div className='p-8 w-full md:w-1/2 flex flex-col gap-4'>
          <InputCombo placeholder='Enter your idea title...' label='Idea Title' value={title} onChange={e => setTitle(e.target.value)} />
          <div className='flex flex-col gap-1'>
            <label className='font-medium'>Project Description</label>
            <textarea
              className='resize-none rounded-md border-0 py-1.5 px-2.5 text-gray-900 dark:text-white bg-transparent shadow-md ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:outline-none  focus:ring-blue-500 sm:text-sm sm:leading-6'
              name=''
              id=''
              cols={30}
              rows={5}
              placeholder='What is your idea?'
              onChange={e => setDescription(e.target.value)}
            ></textarea>
          </div>
          <form action='submit' onSubmit={e => handleBadgeEnter(e)} className='flex items-end gap-2 w-full'>
            <InputCombo
              className='w-4/5'
              placeholder='Enter tech...'
              label='Project Tech Stack'
              value={techStack}
              onChange={e => setTechStack(e.target.value)}
            />
            <Button variant='primary' className='w-1/5'>
              Enter
            </Button>
          </form>
          <div className={'flex flex-wrap gap-1'}>
            {techStackBadges.map(tech => {
              return <Badge key={tech} label={tech} icon={FaXmark} className='cursor-pointer' onClick={() => handleRemoveBadge(tech)} />
            })}
          </div>
          <InputCombo
            placeholder='Enter the repository link for the project'
            label='Repository Link'
            value={repoLink}
            onChange={e => setRepoLink(e.target.value)}
          />
          <div className='bg-primary/20 p-5 rounded-lg gap-1 flex flex-col'>
            <label className='font-bold'>Dream Team</label>
            <TeamCounter label='Front Ends' count={frontend} setCount={setFrontend} />
            <span className='bg-secondary/25 h-[1px] w-full' />
            <TeamCounter label='Back Ends' count={backend} setCount={setBackend} />
            <span className='bg-secondary/25 h-[1px] w-full' />
            <TeamCounter label='Full-Stacks' count={fullstack} setCount={setFullstack} />
            <span className='bg-secondary/25 h-[1px] w-full' />
            <TeamCounter label='UI/UX' count={uiux} setCount={setUiux} />
          </div>
          <div className='w-full flex justify-end gap-3'>
            <Button variant='secondary' onClick={handleClosePopup}>
              Cancel
            </Button>
            <Button variant='primary' onClick={handleSubmitIdea}>
              Create
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateProject

const TeamCounter = ({ label, count, setCount }: { label: string; count: number; setCount: (newCount: number) => void }) => {
  return (
    <div className='flex items-center w-full'>
      <span className='w-2/5 select-none font-medium'>{label}</span>
      <div className='flex items-center w-3/5 gap-2 justify-end'>
        <div
          className='cursor-pointer w-[20px] h-[20px] bg-secondary p-1 rounded-full flex items-center justify-center text-white font-bold'
          onClick={count > 1 ? () => setCount(count - 1) : () => setCount(0)}
        >
          <FaMinus />
        </div>
        <span className='font-medium select-none '>{count}</span>
        <div
          className='cursor-pointer w-[20px] h-[20px] bg-secondary p-1 rounded-full flex items-center justify-center text-white font-bold'
          onClick={() => setCount(count + 1)}
        >
          <FaPlus />
        </div>
      </div>
    </div>
  )
}

const InputCombo = ({
  label,
  value,
  onChange,
  placeholder,
  className,
}: {
  label: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  className?: string
}) => {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <label className='font-medium'>{label}</label>
      <Input placeholder={placeholder} className='w-full' onChange={onChange} type='text' value={value} />
    </div>
  )
}
