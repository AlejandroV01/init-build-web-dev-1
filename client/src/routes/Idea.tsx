import Button from '@/components/Button'
import MeetYourAcceptedTeam from '@/components/MeetYourAcceptedTeam'
import ProjectCard from '@/components/ProjectCard'
import ShadowCard from '@/components/ShadowCard'
import fetchIdeaProfileAcceptedViewByIdeaId from '@/database/idea_profile_accepted_view/fetchIdeaProfileAcceptedViewByIdeaId'
import fetchProfileIdeasViewByIdeaId from '@/database/profile_ideas_view/fetchProfileIdeasViewByIdeaId'
import fetchProfileByID from '@/database/profiles/fetchProfileByID'
import { IAcceptedParticipant, IIdeaProfileAcceptedView, IProfileIdeasViewTypes } from '@/types'
import React, { useEffect, useState } from 'react'
import { BsGithub } from 'react-icons/bs'
import { IoChatboxSharp } from 'react-icons/io5'
import { useParams } from 'react-router-dom'
const Idea = () => {
  const { id } = useParams<{ id: string }>()
  const [idea, setIdea] = useState<IIdeaProfileAcceptedView | null>(null)
  useEffect(() => {
    getIdea()
  }, [])
  if (!id) {
    return <div>Invalid Idea ID</div>
  }
  const getIdea = async () => {
    const res = await fetchIdeaProfileAcceptedViewByIdeaId(parseInt(id))
    if (res) {
      // @ts-expect-error supabase wants JSON but we know its array
      setIdea(res)
    }
  }
  return (
    <div className='container flex justify-between'>
      {idea && (
        <ProjectCard
          title={idea.idea_title}
          description={idea.idea_description}
          college='Florida International University'
          major={'Computer Science'}
          created={
            new Date(idea.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) +
            ' - ' +
            new Date(idea.created_at).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
          }
          author={{ author_id: idea.profile_id, firstName: idea.creator_first_name, lastName: idea.creator_last_name, src: '' }}
          badges={idea.tech_stack}
          ideaId={idea.idea_id}
        />
      )}
      {idea && <RightBox members={idea.accepted_participants} idea={idea} />}
    </div>
  )
}
export default Idea
const RightBox = ({ members, idea }: { members: IAcceptedParticipant[]; idea: IIdeaProfileAcceptedView }) => {
  const memberBox = () => {
    if (members.length === 0) {
      return (
        <div className='bg-foreground/10 rounded-lg p-2'>
          <h2 className='font-bold text-lg text-foreground/80 text-center'>No Team Members Yet</h2>
          <p className='text-foreground/60 text-center'>Once you there are team members, they will be displayed here.</p>
        </div>
      )
    } else {
      return <MeetYourAcceptedTeam members={members} />
    }
  }

  return (
    <ShadowCard className='flex flex-col !w-fit p-4 gap-4 max-w-[400px]'>
      <h2 className='font-bold text-2xl'>
        Meet the <span className='text-primary '>Team</span>!
      </h2>
      {memberBox()}
      <h2 className='font-bold text-xl text-foreground/80'>Important Links:</h2>
      <div className='flex flex-col gap-3'>
        <div className='flex gap-2 items-center'>
          <div className='bg-black p-3 rounded-lg flex items-center justify-center '>
            <BsGithub color='white' size={35} />
          </div>
          <div className='flex flex-col justify-center '>
            <h4 className='font-semibold text-lg'>Github Repository</h4>
            <span className='hover:underline text-sm text-foreground/90'>{idea.github_link}</span>
          </div>
        </div>
        <div className='flex gap-2 items-center'>
          <div className='bg-primary p-3 rounded-lg flex items-center justify-center '>
            <IoChatboxSharp color='white' size={35} />
          </div>
          <div className='flex flex-col justify-center '>
            <h4 className='font-semibold text-lg'>Buds Chat</h4>
            <span className='hover:underline text-sm text-foreground/90'>https://asdasd</span>
          </div>
        </div>
      </div>
      <h3 className='font-semibold'>Still looking for...</h3>
      <div className='grid grid-cols-2'>
        <span className='font-semibold'>
          🎨<span className='text-primary'>{idea.front_end}</span> Frontend
        </span>
        <span className='font-semibold'>
          👨‍💻<span className='text-primary'>{idea.back_end}</span> Backend
        </span>
        <span className='font-semibold'>
          📊<span className='text-primary'>{idea.full_stack}</span> Full Stack
        </span>
        <span className='font-semibold'>
          🖼️<span className='text-primary'>{idea.ux_ui}</span> UX/UI
        </span>
      </div>
      <Button className='w-full'>Share Idea</Button>
    </ShadowCard>
  )
}
