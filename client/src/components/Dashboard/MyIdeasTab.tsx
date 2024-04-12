import { fetchIdeaProfileAcceptedViewByProfileId } from '@/database/idea_profile_accepted_view/fetchIdeaProfileAcceptedViewByIdeaId'
import { useAppSelector } from '@/store/hooks'
import { IIdeaProfileAcceptedView } from '@/types'
import { useEffect, useState } from 'react'
import Button from '../Button'
import CreateProject from '../CreateProject'
import ProjectCard from '../ProjectCard'
const OthersIdeasTab = () => {
  const [ideas, setIdeas] = useState<IIdeaProfileAcceptedView[]>([])
  const user = useAppSelector(state => state.auth)
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  useEffect(() => {
    const fetchOthersIdeas = async () => {
      if (!user || !user.profile_id) return
      const userIdeas = await fetchIdeaProfileAcceptedViewByProfileId(user?.profile_id)
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
              <h2 className='text-3xl font-semibold'>No Ideas Created Yet!</h2>
              <p>Start creating some ideas and share it to the community!</p>
              <Button onClick={() => setIsPopupOpen(true)}>Create an Idea</Button>
            </div>
          )}
          <CreateProject handleClosePopup={() => setIsPopupOpen(false)} isActive={isPopupOpen} closePopup={() => setIsPopupOpen(false)} />
        </div>
      </div>
    </div>
  )
}

export default OthersIdeasTab
