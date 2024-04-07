import { IProfileTableTypes } from '@/types'
import Avatar from './Avatar'
import Button from './Button'
const MeetYourAcceptedTeam = ({ members }: { members: IProfileTableTypes[] }) => {
  const getFullName = (member: IProfileTableTypes) => {
    const fullName: string = `${member.first_name} ${member.last_name}`
    return fullName
  }

  return (
    <div className='max-h-[310px] overflow-y-scroll w-fit px-2'>
      {members.map((member: IProfileTableTypes) => (
        <div key={member.profile_id} className='flex justify-between mb-5 w-[300px] items-center '>
          <Avatar firstName={member.first_name} lastName={member.last_name} size={55} className='mr-3'></Avatar>
          <div className='mr-auto'>
            <span className='font-semibold'>{getFullName(member).length < 12 ? getFullName(member) : getFullName(member).slice(0, 11) + '...'}</span>
            <br></br>
            <span className='text-foreground/60 font-semibold text-sm'>Full-Stack</span>
          </div>
          <a href={`/profile/${member.profile_id}`}>
            <Button variant='secondary'>View Profile</Button>
          </a>
        </div>
      ))}
    </div>
  )
}

export default MeetYourAcceptedTeam
