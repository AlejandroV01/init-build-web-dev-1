import HomeSearchInput from '@/components/HomeSearchInput'
import ProjectCard from '@/components/ProjectCard'

import fetchAllIdeas from '@/database/idea_profile_accepted_view/fetchAllIdeas'
import fetchProfileIdeasView from '@/database/profile_ideas_view/fetchProfileIdeasView'
import { IIdeaProfileAcceptedView, IIdeaTableTypes, IProfileIdeasViewTypes } from '@/types'
import React, { useEffect, useState } from 'react'
const Ideas = () => {
  const [ideas, setIdeas] = useState<IIdeaProfileAcceptedView[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [disableScroll, setDisableScroll] = useState<boolean>(false)
  const handleSearch = (term: string) => {
    console.log('searching:', term)
  }
  const getIdeas = async () => {
    const res = await fetchAllIdeas()
    // @ts-expect-error supabase wants JSON but we know its array
    setIdeas(res)
    setLoading(false)
  }
  useEffect(() => {
    getIdeas()
  }, [])
  console.log(ideas)
  return (
    <div className='container flex flex-col items-center gap-10 overflow'>
      <HomeSearchInput handleSearch={handleSearch} />
      {ideas.length === 0 && !loading && <p>Search Failed! Try again with different search criteria.</p>}
      <div className={`flex flex-col gap-4 w-full items-center`}>
        {ideas.map((idea, index) => (
          <ProjectCard key={index} idea={idea} />
        ))}
      </div>
    </div>
  )
}

export default Ideas
