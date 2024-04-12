import insertIdeaApplicant from '@/database/idea_applicants/insertIdeaApplicant'
import updateIdea from '@/database/ideas/updateIdea'
import { useAppSelector } from '@/store/hooks'
import { IIdeaProfileAcceptedView } from '@/types'
import { useEffect, useRef, useState } from 'react'
import { BsBookmark } from 'react-icons/bs'
import { FaRegLightbulb } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'
import ApplicantsPopup from './ApplictantsPopup'
import Avatar from './Avatar'
import Button from './Button'
import Label from './Label'
import ShadowCard from './ShadowCard'
import Badge from './badge'
import { Select } from './select-ui'
const ProjectCard = ({ idea }: { idea: IIdeaProfileAcceptedView }) => {
  const user = useAppSelector(state => state.auth)
  const [bookmarked, setBookmarked] = useState<boolean>(false)
  const [activePopover, setActivePopover] = useState(false)
  const isYourPost = user.profile_id === idea.profile_id ? true : false
  const popoverRef = useRef(null)
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false)
  const [isEditPopupOpen, setIsEditPopupOpen] = useState<boolean>(false)
  const location = useLocation()
  const handleBookmarkBtnOnClick = () => {
    setBookmarked(!bookmarked)
  }

  const handleManageBtnOnClick = () => {
    document.body.style.overflow = 'hidden'
    setActivePopover(true)
  }

  const handlePopoverClose = () => {
    document.body.style.overflow = 'auto'
    setActivePopover(false)
  }
  const isOnIdeaPage = location.pathname.split('/')[1] === 'idea'

  const formattedDate = () => {
    const date =
      new Date(idea.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) +
      ' - ' +
      new Date(idea.created_at).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
    return date
  }
  const badgeLimit = !isOnIdeaPage ? 4 : idea.tech_stack?.length
  return (
    <ShadowCard className={`flex flex-col w-full max-w-[800px] h-fit`}>
      <div className='p-5'>
        {/* Card Header */}
        <div className='flex flex-col'>
          <div className='flex flex-row gap-3 '>
            <a href={`/profile/${idea.profile_id}`} target='_blank'>
              <Avatar firstName={idea.profile_first_name} lastName={idea.profile_last_name} size={80} />
            </a>
            <div className='flex flex-col'>
              <a className='text-lg font-semibold hover:underline' href={`/profile/${idea.profile_id}`} target='_blank'>
                {idea.profile_first_name} {idea.profile_last_name}
              </a>
              <div className='text-sm font-medium'>
                <span>{idea.profile_school}</span>
                <span> | </span>
                <span>{idea.profile_major}</span>
              </div>
              <span className='text-sm font-light text-slate-500'>Posted on {formattedDate()}</span>
            </div>
          </div>
          <div className='flex flex-row gap-5 py-3 flex-wrap'>
            {idea.tech_stack?.slice(0, badgeLimit).map((badge, i) => {
              return <Badge key={i} label={badge} size='medium' className={`shadow-[-1px_1px_0px_0px_rgba(0,0,0,0.3)] !bg-[#ededed] !text-black`} />
            })}
            {idea.tech_stack?.slice(badgeLimit).length > 0 && (
              <span className='text-small font-light text-slate-500'>+ {idea.tech_stack?.slice(4).length}</span>
            )}
          </div>
        </div>
        <hr className='border border-gray-300 mt-3' />
      </div>
      {/* Card Body */}
      <div className='px-5'>
        <a href={`/idea/${idea.idea_id}`} target='_blank' className='hover:underline'>
          <h1 className='text-xl font-bold'>{idea.idea_title}</h1>
        </a>
        <p className='py-2'>{idea.idea_description}</p>
        {isYourPost ? (
          <div className='flex flex-row py-3 gap-2'>
            <Button variant='primary' className='w-full' onClick={handleManageBtnOnClick}>
              Manage
            </Button>
            <Button variant='secondary' onClick={() => setIsEditPopupOpen(true)} className='w-full'>
              Edit Idea
            </Button>
            <Button variant='secondary' onClick={handleBookmarkBtnOnClick} className={bookmarked ? 'bg-yellow-400' : ''}>
              <BsBookmark />
            </Button>
          </div>
        ) : (
          <div className='flex flex-row py-3 gap-2'>
            {isOnIdeaPage ? (
              <Button
                variant='primary'
                className={`w-full ${user.profile_id && idea.accepted_profile_ids.includes(user.profile_id) && 'hover:cursor-not-allowed'}`}
                onClick={() => setIsPopupOpen(true)}
                disabled={idea.accepted_profile_ids.includes(user.profile_id || 0)}
              >
                {user.profile_id && idea.accepted_profile_ids.includes(user.profile_id) ? 'Applied' : 'Apply'}
              </Button>
            ) : (
              <a href={`/idea/${idea.idea_id}`} className='w-full'>
                <Button variant='primary' className='w-full'>
                  View More
                </Button>
              </a>
            )}
            <Button variant='secondary' onClick={handleBookmarkBtnOnClick} className={bookmarked ? 'bg-yellow-400' : ''}>
              <BsBookmark />
            </Button>
          </div>
        )}
      </div>
      <EditIdea idea={idea} isPopupOpen={isEditPopupOpen} setIsPopupOpen={setIsEditPopupOpen} />
      <ApplyPopup isPopupOpen={isPopupOpen} setIsPopupOpen={() => setIsPopupOpen(false)} idea={idea} />
      {activePopover && (
        <div
          className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 flex justify-center'
          onMouseDown={e => popoverRef && popoverRef.current && !popoverRef.current.contains(e.target) && handlePopoverClose()}
        >
          <div className='bg-background mt-40 rounded-lg h-fit' ref={popoverRef}>
            <ApplicantsPopup applicants={idea.non_accepted_participants} idea={idea} />
          </div>
        </div>
      )}
    </ShadowCard>
  )
}

export default ProjectCard

import { useNavigate } from 'react-router-dom'
import PopupParent from './PopupParent'
const ApplyPopup = ({
  isPopupOpen,
  setIsPopupOpen,
  idea,
}: {
  isPopupOpen: boolean
  setIsPopupOpen: (value: React.SetStateAction<boolean>) => void
  idea: IIdeaProfileAcceptedView
}) => {
  const [role, setRole] = useState<string>('')
  const [noRole, setNoRole] = useState<boolean>(false)
  const user = useAppSelector(state => state.auth)
  const navigate = useNavigate()
  const handleCancel = () => {
    document.body.style.overflow = 'auto'
    setIsPopupOpen(false)
  }
  const handleSubmit = async () => {
    if (!user.profile_id) return
    if (!role) {
      setNoRole(true)
      return
    }
    setNoRole(false)
    const res = await insertIdeaApplicant(idea.idea_id, user.profile_id, role, false)
    if (res) {
      toast.success('Application submitted successfully')
      navigate(0)
    } else {
      toast.error('Failed to submit application')
    }
    handleCancel()
  }
  return (
    <PopupParent active={isPopupOpen} handlePopoverClose={() => setIsPopupOpen(false)}>
      <div className='flex flex-col gap-4 p-5 w-[500px] min-w-[300px]'>
        <div className='flex items-center gap-4'>
          <div className='bg-primary/20 p-3 rounded-full'>
            <FaRegLightbulb size={30} />
          </div>
          <h2 className='text-xl font-semibold'>Quick Apply</h2>
        </div>
        {noRole && <span className='text-red-500'>Please select a role</span>}

        <div className='flex flex-col gap-1'>
          <Label htmlFor={`name`}>Idea Role</Label>
          <Select label='Role' onChange={e => setRole(e.target.value)} options={['Frontend', 'Backend', 'Full-Stack', 'UI/UX']} />
        </div>
        <div className='flex flex-col gap-5'>
          <div className='flex flex-row gap-5'>
            <Button onClick={handleSubmit}>Apply</Button>
            <Button variant='secondary' onClick={handleCancel}>
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </PopupParent>
  )
}

import { FaXmark } from 'react-icons/fa6'
import { GrGroup } from 'react-icons/gr'
import { InputCombo, TeamCounter } from './CreateProject'
const EditIdea = ({
  isPopupOpen,
  setIsPopupOpen,
  idea,
}: {
  isPopupOpen: boolean
  setIsPopupOpen: (value: React.SetStateAction<boolean>) => void
  idea: IIdeaProfileAcceptedView
}) => {
  const [title, setTitle] = useState<string>(idea.idea_title)
  const [description, setDescription] = useState<string>(idea.idea_description)
  const [techStack, setTechStack] = useState<string>('')
  const [repoLink, setRepoLink] = useState<string>(idea.github_link)
  const [frontend, setFrontend] = useState<number>(idea.front_end)
  const [backend, setBackend] = useState<number>(idea.back_end)
  const [fullstack, setFullstack] = useState<number>(idea.full_stack)
  const [uiux, setUiux] = useState<number>(idea.ux_ui)
  const [techStackBadges, setTechStackBadges] = useState<string[]>(idea.tech_stack)
  const navigate = useNavigate()
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
  const handleSubmitIdea = async () => {
    if (title === '' || description === '' || techStackBadges.length === 0 || repoLink === '' || frontend + backend + fullstack + uiux === 0) {
      return alert('Fill all fields!')
    }
    const data = {
      profile_id: 0,
      created_at: idea.created_at,
      idea_title: title,
      idea_description: description,
      tech_stack: techStackBadges,
      github_link: repoLink,
      front_end: frontend,
      back_end: backend,
      full_stack: fullstack,
      ux_ui: uiux,
      idea_id: idea.idea_id,
    }
    console.log(data)
    const res = await updateIdea(data)
    if (res) {
      toast.success('Idea updated successfully!')
      document.body.style.overflow = 'auto'
      setIsPopupOpen(false)
      navigate(0)
    } else {
      toast.error('Failed to update idea!')
    }
  }
  const handleCancel = () => {
    document.body.style.overflow = 'auto'
    setIsPopupOpen(false)
  }
  return (
    <PopupParent active={isPopupOpen} handlePopoverClose={() => setIsPopupOpen(false)} mt='mt-14'>
      <div className='flex flex-col gap-3 p-5 max-h-[600px] overflow-y-auto'>
        <div className='flex items-center justify-between mb-5'>
          <div className='flex items-center gap-4'>
            <div className='bg-primary/20 p-3 rounded-full'>
              <GrGroup size={30} />
            </div>
            <h2 className='text-xl font-semibold'>Edit {idea.idea_title}</h2>
          </div>
          <FaXmark size={20} className='cursor-pointer' onClick={handleCancel} />
        </div>
        <div className='w-full flex flex-col gap-4'>
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
              value={description}
            ></textarea>
          </div>
          <form action='submit' onSubmit={e => handleBadgeEnter(e)} className='flex items-end gap-2 w-full flex-wrap'>
            <InputCombo
              className='w-[90%]'
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
        </div>
        <div className='w-full flex justify-end gap-5'>
          <Button variant='secondary' className='!w-1/2' onClick={handleCancel}>
            Cancel
          </Button>
          <Button className='!w-1/2' onClick={handleSubmitIdea}>
            Save
          </Button>
        </div>
      </div>
    </PopupParent>
  )
}
