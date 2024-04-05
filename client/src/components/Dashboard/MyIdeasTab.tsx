// MyIdeasTab.tsx
import fetchIdeaByProfileId from '@/database/ideas/fetchIdeaByProfileId'
import { useAppSelector } from '@/store/hooks'
import { IIdeaTableTypes } from '@/types'
import React, { useEffect, useState } from 'react'
import ProjectCard from '../ProjectCard'
const MyIdeasTab = () => {
  const [ideas, setIdeas] = useState<IIdeaTableTypes[]>([])
  const user = useAppSelector(state => state.auth)

  useEffect(() => {
    const fetchIdeas = async () => {
      if (user && user.profile_id) {
        const userIdeas = await fetchIdeaByProfileId(user.profile_id)
        if (userIdeas) {
          setIdeas(userIdeas)
        }
      }
    }

    fetchIdeas()
  }, [user])
  console.log(ideas)

  return (
    <div className='flex flex-col items-center justify-center w-full h-full'>
      <div className='w-full h-full'>
        <div className='flex flex-col gap-4 w-full items-center'>
          {ideas.map((idea, index) => (
            <ProjectCard
              key={index}
              title={idea.idea_title}
              description={idea.idea_description}
              // college={idea.idea_college}
              college='Florida International University'
              major={'Computer Science'}
              // created={idea.created_at}
              created={
                new Date(idea.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) +
                ' - ' +
                new Date(idea.created_at).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
              }
              author={{ author_id: idea.profile_id, firstName: 'John', lastName: 'Doe', src: '' }}
              badges={idea.tech_stack}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MyIdeasTab