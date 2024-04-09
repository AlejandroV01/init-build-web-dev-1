import Button from '@/components/Button'
import MeetYourAcceptedTeam from '@/components/MeetYourAcceptedTeam'
import ProjectCard from '@/components/ProjectCard'
import ShadowCard from '@/components/ShadowCard'
import countAcceptedRoles from '@/database/idea_profile_accepted_view/countAcceptedRoles'
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
      {idea && <ProjectCard idea={idea} />}
      {idea && <RightBox members={idea.accepted_participants} idea={idea} />}
    </div>
  )
}
export default Idea
const RightBox = ({ members, idea }: { members: IAcceptedParticipant[]; idea: IIdeaProfileAcceptedView }) => {
  const [acceptedRoles, setAcceptedRoles] = useState<Record<string, number>>({
    Frontend: 0,
    Backend: 0,
    'Full-Stack': 0,
    'UI/UX': 0,
  })
  const handleCountAcceptedRoles = async () => {
    if (!idea) return
    const res = await countAcceptedRoles(idea.idea_id)
    setAcceptedRoles(res)
  }
  useEffect(() => {
    handleCountAcceptedRoles()
  }, [])
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
      <h3 className='font-semibold'>Dream Team...</h3>
      <div className='grid grid-cols-2'>
        <span className='font-semibold'>
          🎨
          <span className='text-primary'>
            {idea.front_end}
            <span className='text-foreground text-sm'>({acceptedRoles['Frontend']})</span>
          </span>{' '}
          Frontend
        </span>
        <span className='font-semibold'>
          👨‍💻
          <span className='text-primary'>
            {idea.back_end}
            <span className='text-foreground text-sm'>({acceptedRoles['Backend']})</span>
          </span>{' '}
          Backend
        </span>
        <span className='font-semibold'>
          📊
          <span className='text-primary'>
            {idea.full_stack}
            <span className='text-foreground text-sm'>({acceptedRoles['Full-Stack']})</span>
          </span>{' '}
          Full Stack
        </span>
        <span className='font-semibold'>
          🖼️
          <span className='text-primary'>
            {idea.ux_ui}
            <span className='text-foreground text-sm'>({acceptedRoles['UI/UX']})</span>
          </span>{' '}
          UI/UX
        </span>
      </div>
      <Button className='w-full'>Share Idea</Button>
    </ShadowCard>
  )
}
