import Portfolio from '@/components/Portfolio'
import { addProfile } from '@/store/auth/auth.slice'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
const PortfolioCard = () => {
  const user = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()
  const handleStateLinkChange = (link: string, variant: string) => {
    if (variant === 'github') {
      dispatch(addProfile({ ...user, github_link: link }))
    } else if (variant === 'linkedin') {
      dispatch(addProfile({ ...user, linkedin_link: link }))
    } else if (variant === 'personal') {
      dispatch(addProfile({ ...user, portfolio_link: link }))
    }
  }
  return (
    <div className='w-[850px] py-5 px-5 pt-4 flex flex-col gap-7 rounded-[8px] drop-shad bg-[#E8E8E8] shadow-md border-l border-b border-[#b2b2b2]'>
      <div className='flex justify-between items-center'>
        <span className='font-extrabold text-2xl text-black'>Portfolio</span>
      </div>
      <div className='flex flex-col gap-7'>
        <Portfolio variant='github' link={user.github_link || ''} handleStateLinkChange={handleStateLinkChange} />
        <Portfolio variant='linkedin' link={user.linkedin_link || ''} handleStateLinkChange={handleStateLinkChange} />
        <Portfolio variant='personal' link={user.portfolio_link || ''} handleStateLinkChange={handleStateLinkChange} />
      </div>
    </div>
  )
}

export default PortfolioCard
