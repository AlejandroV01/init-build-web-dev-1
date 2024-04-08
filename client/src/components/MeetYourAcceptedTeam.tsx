import { IAcceptedParticipant } from '@/types'
import Avatar from './Avatar'
import Button from './Button'
const MeetYourAcceptedTeam = ({ members }: { members: IAcceptedParticipant[] }) => {
  const getFullName = (member: IAcceptedParticipant) => {
    const fullName: string = `${member.profile.first_name} ${member.profile.last_name}`
    return fullName
  }

  return (
    <div className={`max-h-[310px] ${members.length > 4 && 'overflow-y-scroll'}  w-fit px-2`}>
      {members.map((member: IAcceptedParticipant) => (
        <div key={member.profile.profile_id} className='flex justify-between mb-5 w-[300px] items-center '>
          <Avatar firstName={member.profile.first_name} lastName={member.profile.last_name} size={55} className='mr-3'></Avatar>
          <div className='mr-auto'>
            <span className='font-semibold'>{getFullName(member).length < 12 ? getFullName(member) : getFullName(member).slice(0, 8) + '...'}</span>
            <br></br>
            <span className='text-foreground/60 font-semibold text-sm'>{member.application_role}</span>
          </div>
          <a href={`/profile/${member.profile.profile_id}`}>
            <Button variant='secondary'>View Profile</Button>
          </a>
        </div>
      ))}
    </div>
  )
}

export default MeetYourAcceptedTeam
