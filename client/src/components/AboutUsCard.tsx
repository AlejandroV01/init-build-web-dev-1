import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Avatar from './Avatar'

export interface IAboutUsCard {
  userLinkedIn: string
  userGitHub: string
  userFirstName: string
  userLastName: string
  userSubtext: string
  imageSrc: string
}

const AboutUsCard = ({ userLinkedIn, userGitHub, userFirstName, userLastName, userSubtext, imageSrc }: IAboutUsCard) => {
  return (
    <div className='flex flex-col justify-between w-full rounded-lg shadow-lg bg-primary/15 dark:bg-foreground/50 h-[300px] '>
      <div className='bg-primary flex justify-center relative h-[115px] rounded-tl-lg rounded-tr-lg'>
        <div className='absolute -bottom-3 border-[5px] border-primary rounded-full'>
          <Avatar firstName={userFirstName} lastName={userLastName} src={imageSrc} size={100} className='border-[3px] border-white' />
        </div>
      </div>
      <div className='px-7 py-5 flex flex-col gap-5'>
        <div className='text-center flex flex-col'>
          <span className='font-bold'>
            {userFirstName} {userLastName}
          </span>
          <span className='text-sm text-foreground/60'>{userSubtext}</span>
        </div>
        <div className='flex justify-evenly'>
          <a href={userGitHub} target='_blank'>
            <FaGithub size={42} />
          </a>
          <a href={userLinkedIn} target='_blank'>
            <FaLinkedin size={42} color='#0077b5' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default AboutUsCard
