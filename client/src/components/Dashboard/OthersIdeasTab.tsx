import { fetchIdeaProfileAcceptedViewByProfileIdCounter } from '@/database/idea_profile_accepted_view/fetchIdeaProfileAcceptedViewByIdeaId'
import { useAppSelector } from '@/store/hooks'
import { IIdeaProfileAcceptedView } from '@/types'
import { useEffect, useState } from 'react'
import Button from '../Button'
import ProjectCard from '../ProjectCard'
const OthersIdeasTab = () => {
  const [ideas, setIdeas] = useState<IIdeaProfileAcceptedView[]>([])
  const user = useAppSelector(state => state.auth)

  useEffect(() => {
    const fetchOthersIdeas = async () => {
      if (!user || !user.profile_id) return
      const userIdeas = await fetchIdeaProfileAcceptedViewByProfileIdCounter(user?.profile_id)
      if (userIdeas) {
        // @ts-expect-error supabase wants JSON but we know its array

        setIdeas(userIdeas)
      }
    }

    fetchOthersIdeas()
  }, [user])
  console.log(ideas)

  return (
    <div className='flex flex-col items-center justify-center w-full h-full'>
      <div className='w-full h-full'>
        <div className='flex flex-col gap-4 w-full items-center'>
          {ideas.map(idea => (
            <ProjectCard idea={idea} />
          ))}
          {ideas.length === 0 && (
            <div className='bg-primary/20 p-5 flex flex-col items-center rounded-lg gap-2'>
              <h2 className='text-3xl font-semibold'>No Ideas Here Yet!</h2>
              <p>Start joining other developers project ideas to view them here!</p>
              <a href='/ideas'>
                <Button>Browse Ideas</Button>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default OthersIdeasTab
