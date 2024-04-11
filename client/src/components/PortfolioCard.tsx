import Portfolio from '@/components/Portfolio'
import { updateLinksForm } from '@/database/profiles/updateProfileByEmail'
import { addProfile } from '@/store/auth/auth.slice'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { toast } from 'react-toastify'
import { IFullProfile } from './Dashboard/ProfileTab'
const PortfolioCard = ({ fullProfile, isYourProfile }: { fullProfile: IFullProfile; isYourProfile: boolean }) => {
  const user = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()
  const handleStateLinkChange = async (link: string, variant: string) => {
    if (!fullProfile.profile_id) return toast.error('Profile ID not found')
    let success = false
    if (variant === 'github') {
      const data = {
        github: link,
        linkedin: fullProfile.linkedin_link,
        portfolio: fullProfile.portfolio_link,
      }
      const res = await updateLinksForm({ ...data, profile_id: fullProfile.profile_id })
      if (res) {
        success = true
      }
    } else if (variant === 'linkedin') {
      const data = {
        github: fullProfile.github_link,
        linkedin: link,
        portfolio: fullProfile.portfolio_link,
      }
      const res = await updateLinksForm({ ...data, profile_id: fullProfile.profile_id })
      if (res) {
        success = true
      }
    } else if (variant === 'personal') {
      const data = {
        github: fullProfile.github_link,
        linkedin: fullProfile.linkedin_link,
        portfolio: link,
      }
      const res = await updateLinksForm({ ...data, profile_id: fullProfile.profile_id })
      if (res) {
        success = true
      }
    }
    if (success) {
      toast.success('Link updated successfully')
    } else {
      toast.error('Failed to update link')
    }
  }
  return (
    <div className='p-5 flex flex-col gap-3 rounded-lg bg-foreground/5 shadow-lg dark:border dark:border-foreground/20'>
      <div className='flex justify-between items-center'>
        <span className='font-extrabold text-2xl'>Portfolio</span>
      </div>
      <div className='flex flex-col gap-7'>
        <Portfolio
          variant='github'
          link={fullProfile.github_link || ''}
          handleStateLinkChange={handleStateLinkChange}
          isYourProfile={isYourProfile}
        />
        <Portfolio
          variant='linkedin'
          link={fullProfile.linkedin_link || ''}
          handleStateLinkChange={handleStateLinkChange}
          isYourProfile={isYourProfile}
        />
        <Portfolio
          variant='personal'
          link={fullProfile.portfolio_link || ''}
          handleStateLinkChange={handleStateLinkChange}
          isYourProfile={isYourProfile}
        />
      </div>
    </div>
  )
}

export default PortfolioCard
