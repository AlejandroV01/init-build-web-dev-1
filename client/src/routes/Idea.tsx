import ProjectCard from '@/components/ProjectCard'
import fetchProfileIdeasViewByIdeaId from '@/database/profile_ideas_view/fetchProfileIdeasViewByIdeaId'
import { IProfileIdeasViewTypes } from '@/types'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const Idea = () => {
  const { id } = useParams<{ id: string }>()
  const [idea, setIdea] = useState<IProfileIdeasViewTypes | null>(null)
  useEffect(() => {
    getIdea()
  }, [])
  if (!id) {
    return <div>Invalid Idea ID</div>
  }
  const getIdea = async () => {
    const res = await fetchProfileIdeasViewByIdeaId(parseInt(id))
    console.log(res)
    setIdea(res)
  }
  return (
    <div className='container flex'>
      {idea && (
        <ProjectCard
          title={idea.idea_title_ideas}
          description={idea.idea_description_ideas}
          college='Florida International University'
          major={'Computer Science'}
          created={
            new Date(idea.created_at_ideas).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) +
            ' - ' +
            new Date(idea.created_at_ideas).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
          }
          author={{ author_id: idea.profile_id_profiles, firstName: idea.first_name_profiles, lastName: idea.last_name_profiles, src: '' }}
          badges={idea.tech_stack_ideas}
          ideaId={idea.idea_id_ideas}
        />
      )}
    </div>
  )
}

export default Idea
