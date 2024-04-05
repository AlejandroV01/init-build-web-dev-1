import HomeSearchInput from '@/components/HomeSearchInput'
import ProjectCard from '@/components/ProjectCard'
import fetchIdeas from '@/database/ideas/fetchIdeas'
import { IIdeaTableTypes } from '@/types'
import React, { useEffect, useState } from 'react'
const Ideas = () => {
  const [ideas, setIdeas] = useState<IIdeaTableTypes[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const handleSearch = (term: string) => {
    console.log('searching:', term)
  }
  const getIdeas = async () => {
    const res = await fetchIdeas()
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
  )
}

export default Ideas
