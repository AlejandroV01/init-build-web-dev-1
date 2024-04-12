import HomeSearchInput from '@/components/HomeSearchInput'
import ProjectCard from '@/components/ProjectCard'

import fetchAllIdeas from '@/database/idea_profile_accepted_view/fetchAllIdeas'
import fetchIdeasOnFilters from '@/database/idea_profile_accepted_view/fetchIdeasOnFilters'
import { IIdeaProfileAcceptedView } from '@/types'
import { useEffect, useState } from 'react'
const Ideas = () => {
  const [ideas, setIdeas] = useState<IIdeaProfileAcceptedView[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const handleSearch = async (input: string, jobType: string, formattedTech: string[]) => {
    if (jobType === 'Job Type') jobType = ''
    console.log('searching:', input, jobType, formattedTech)
    const res = await fetchIdeasOnFilters(input, jobType, formattedTech)
    console.log(res)
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
