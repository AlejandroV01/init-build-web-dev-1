import { IProfileTableTypes } from '@/types'
import { Button } from '@/components/ui/button'
import Avatar from './Avatar'

const MeetYourAcceptedTeam = (members: IProfileTableTypes[]) => {

    const getProfileLink = (member: IProfileTableTypes) => {
        const profile_link: string = `/profile/${member.profile_id}`
        return profile_link
    }

    const getFullName = (member: IProfileTableTypes) => {
        const fullName: string = `${member.first_name} ${member.last_name}`
        return fullName
    }

    return (
        <>
        <h1 className='font-bold text-2xl'>Meet your <span className='text-primary' style={{"fontFamily": 'Ubuntu, sans-serif'}}>team</span>!</h1>
        {members.map((member: IProfileTableTypes) => (
            <div key={member.profile_id} className='flex justify-between mb-5' style={{'maxWidth': '24rem'}}>
                <Avatar firstName={member.first_name} lastName={member.last_name} size={50} className='mr-3'></Avatar>
                <div className='mr-auto'>
                        {
                            getFullName(member).length < 12 ? 
                            getFullName(member) :
                            getFullName(member).slice(0, 11) + "..."
                        }
                    <br></br>
                    <span className='text-foreground/60'>Full-Stack</span> 
                </div>
                <a href={getProfileLink(member)}>
                <Button variant='secondary' size='lg'>
                    View Profile
                </Button>
                </a>
            </div>
        ))}
        </>
    );
}

export default MeetYourAcceptedTeam