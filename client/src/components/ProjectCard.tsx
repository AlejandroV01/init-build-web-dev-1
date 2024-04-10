import { useAppSelector } from '@/store/hooks'
import { IIdeaProfileAcceptedView } from '@/types'
import { useEffect, useRef, useState } from 'react'
import { BsBookmark } from 'react-icons/bs'
import { useLocation } from 'react-router-dom'
import ApplicantsPopup from './ApplictantsPopup'
import Avatar from './Avatar'
import Button from './Button'
import ShadowCard from './ShadowCard'
import Badge from './badge'
const ProjectCard = ({ idea }: { idea: IIdeaProfileAcceptedView }) => {
  const user = useAppSelector(state => state.auth)
  const [bookmarked, setBookmarked] = useState<boolean>(false)
  const [activePopover, setActivePopover] = useState(false)
  const isYourPost = user.profile_id === idea.profile_id ? true : false
  const popoverRef = useRef(null)
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
  return (
    <ShadowCard className={`flex flex-col w-full max-w-[800px] h-fit`}>
      <div className='p-5'>
        {/* Card Header */}
        <div className='flex flex-col'>
          <div className='flex flex-row gap-3 '>
            <div>
              <Avatar firstName={idea.profile_first_name} lastName={idea.profile_last_name} size={80} />
            </div>
            <div className='flex flex-col'>
              <h2 className='text-lg font-semibold'>
                {idea.profile_first_name} {idea.profile_last_name}
              </h2>
              <div className='text-sm font-medium'>
                <span>{idea.profile_school}</span>
                <span> | </span>
                <span>{idea.profile_major}</span>
              </div>
              <span className='text-sm font-light text-slate-500'>Posted on {formattedDate()}</span>
            </div>
          </div>
          <div className='flex flex-row gap-5 py-3 '>
            {idea.tech_stack?.slice(0, 4).map((badge, i) => {
              return <Badge key={i} label={badge} size='medium' className={`shadow-[-1px_1px_0px_0px_rgba(0,0,0,0.3)] !bg-[#ededed] !text-black`} />
            })}
            {idea.tech_stack?.slice(4).length > 0 && (
              <span className='text-small font-light text-slate-500'>+ {idea.tech_stack?.slice(4).length}</span>
            )}
          </div>
        </div>
        <hr className='border border-gray-300 mt-3' />
      </div>
      {/* Card Body */}
      <div className='px-5'>
        <h1 className='text-xl font-bold'>{idea.idea_title}</h1>
        <p className='py-2'>{idea.idea_description}</p>
        {isYourPost ? (
          <div className='flex flex-row py-3 gap-2'>
            <Button variant='primary' className='w-full' onClick={handleManageBtnOnClick}>
              Manage
            </Button>
            <Button variant='secondary' onClick={() => console.log('editing idea')} className='w-full'>
              Edit Idea
            </Button>
            <Button variant='secondary' onClick={handleBookmarkBtnOnClick} className={bookmarked ? 'bg-yellow-400' : ''}>
              <BsBookmark />
            </Button>
          </div>
        ) : (
          <div className='flex flex-row py-3 gap-2'>
            <a href={`/idea/${idea.idea_id}`} className='w-full'>
              <Button variant='primary' className='w-full'>
                View More
              </Button>
            </a>
            <Button variant='secondary' onClick={handleBookmarkBtnOnClick} className={bookmarked ? 'bg-yellow-400' : ''}>
              <BsBookmark />
            </Button>
          </div>
        )}
      </div>

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
