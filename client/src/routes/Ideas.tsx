import HomeSearchInput from '@/components/HomeSearchInput'
import ProjectCard from '@/components/ProjectCard'

import fetchProfileIdeasView from '@/database/profile_ideas_view/fetchProfileIdeasView'
import { IIdeaTableTypes, IProfileIdeasViewTypes } from '@/types'
import React, { useEffect, useState } from 'react'
const Ideas = () => {
  const [ideas, setIdeas] = useState<IProfileIdeasViewTypes[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const handleSearch = (term: string) => {
    console.log('searching:', term)
  }
  const getIdeas = async () => {
    const res = await fetchProfileIdeasView()
    setIdeas(res)
    setLoading(false)
  }
  useEffect(() => {
    getIdeas()
  }, [])
  return (
    <div className='container flex flex-col items-center gap-10'>
      <HomeSearchInput handleSearch={handleSearch} />
      {ideas.length === 0 && !loading && <p>Search Failed! Try again with different search criteria.</p>}
      <div className='flex flex-col gap-4 w-full items-center'>
        {ideas.map((idea, index) => (
          <ProjectCard
            key={index}
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
        ))}
      </div>
    </div>
  )
}

export default Ideas
