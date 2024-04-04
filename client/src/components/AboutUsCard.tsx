import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Avatar from './Avatar'

interface IAboutUsCard {
  userLinkedIn: string
  userGitHub: string
  userFirstName: string
  userLastName: string
  userSubtext: string
}

const AboutUsCard = ({ userLinkedIn, userGitHub, userFirstName, userLastName, userSubtext }: IAboutUsCard) => {
  return (
    <div className='flex flex-col justify-between w-[220px] rounded-lg overflow-hidden shadow-lg dark:bg-foreground/5'>
      <div className='bg-primary flex justify-center relative h-[115px]'>
        <div className='absolute -bottom-3 border-[5px] border-primary rounded-full'>
          <Avatar firstName={userFirstName} lastName={userLastName} size={100} className='border-[3px] border-white' />
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