import { useAppSelector } from '@/store/hooks'
import { useEffect, useState } from 'react'
import { BsBookmark } from 'react-icons/bs'
import Avatar from './Avatar'
import Button from './Button'
import Badge from './badge'

interface Author {
  firstName: string
  lastName: string
  src: string
  author_id: number
}

interface CardProps {
  title: string
  description: string
  college?: string
  major?: string
  created?: string
  author: Author
  badges: string[]
  imageSrc?: string
  onClick?: () => void
}

const ProjectCard: React.FC<CardProps> = ({ title, description, college, major, created, author, badges, imageSrc, onClick }) => {
  const user = useAppSelector(state => state.auth)
  const [bookmarked, setBookmarked] = useState<boolean>(false)
  const [isYourPost, setIsYourPost] = useState(false)
  const [activePopover, setActivePopover] = useState(false)

  useEffect(() => {
    if (user.profile_id === author.author_id) {
      setIsYourPost(true)
    }
  }, [user.profile_id, author.author_id])

  const handleBookmarkBtnOnClick = () => {
    setBookmarked(!bookmarked)
  }

  const handleManageBtnOnClick = () => {
    setActivePopover(!activePopover)
  }
  return (
    <div className={`flex flex-col border dark:bg-black rounded-lg shadow-[0px_0px_2px_0px_rgba(0,0,0,0.5)] w-full max-w-[800px]`}>
      <div className='p-5'>
        {/* Card Header */}
        <div className='flex flex-col'>
          <div className='flex flex-row gap-3 '>
            <div>
              <Avatar firstName={author.firstName} lastName={author.lastName} src={author.src} size={80} />
            </div>
            <div className='flex flex-col'>
              <h2 className='text-lg font-semibold'>
                {author.firstName} {author.lastName}
              </h2>
              <div className='text-sm font-medium'>
                <span>{college}</span>
                <span> | </span>
                <span>{major}</span>
              </div>
              <span className='text-sm font-light text-slate-500'>Posted on {created}</span>
            </div>
          </div>
          <div className='flex flex-row gap-5 py-3 '>
            {badges?.slice(0, 4).map((badge, i) => {
              return <Badge key={i} label={badge} size='medium' className={`shadow-[-1px_1px_0px_0px_rgba(0,0,0,0.3)] !bg-[#ededed] !text-black`} />
            })}
            {badges?.slice(4).length > 0 && <span className='text-small font-light text-slate-500'>+ {badges?.slice(4).length}</span>}
          </div>
        </div>
        <hr className='border border-gray-300 mt-3' />
      </div>
      {/* Card Body */}
      <div className='px-5'>
        <h1 className='text-xl font-bold'>{title}</h1>
        <p className='py-2'>{description}</p>
        {imageSrc && (
          <div className='py-2'>
            <img src={imageSrc} alt='project-preview' className='rounded-md' />
          </div>
        )}

        {isYourPost ? (
          <div className='flex flex-row py-3 gap-2'>
            <Button variant='primary' className='w-full' onClick={handleManageBtnOnClick}>
              Manage
            </Button>
            <Button variant='secondary' onClick={onClick} className='w-full'>
              Edit Idea
            </Button>
            <Button variant='secondary' onClick={handleBookmarkBtnOnClick} className={bookmarked ? 'bg-yellow-400' : ''}>
              <BsBookmark />
            </Button>
          </div>
        ) : (
          <div className='flex flex-row py-3 gap-2'>
            <Button variant='primary' className='w-full' onClick={onClick}>
              Apply
            </Button>
            <Button variant='secondary' onClick={handleBookmarkBtnOnClick} className={bookmarked ? 'bg-yellow-400' : ''}>
              <BsBookmark />
            </Button>
          </div>
        )}
      </div>

      {activePopover && <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-40'>{/* Popover */}</div>}
    </div>
  )
}

export default ProjectCard
