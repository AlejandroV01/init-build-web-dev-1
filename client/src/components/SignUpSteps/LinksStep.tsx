import { updateLinksForm } from '@/database/profiles/updateProfileByEmail'
import { useAppSelector } from '@/store/hooks'
import React, { useState } from 'react'
import { FaCircleCheck } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import Button from '../Button'
import CardBox from '../CardBox'
import Input from '../Input'
import Label from '../Label'
import PopupParent from '../PopupParent'
const LinksStep = ({ handleStepSubmit }: { handleStepSubmit: () => void }) => {
  const navigate = useNavigate()
  const user = useAppSelector(state => state.auth)
  const [linkedin, setLinkedin] = useState('')
  const [githubUrl, setGithubUrl] = useState('')
  const [portfolioUrl, setPortfolioUrl] = useState('')
  const [missingFields, setMissingFields] = useState<boolean>(false)
  const [popup, setPopup] = useState(false)
  const handleSubmit = async () => {
    if (!user.profile_id) return
    if (!linkedin && !githubUrl && !portfolioUrl) {
      setMissingFields(true)
      return
    }
    setMissingFields(false)
    const data = {
      github: githubUrl,
      linkedin: linkedin,
      portfolio: portfolioUrl,
      profile_id: user.profile_id,
    }
    const res = await updateLinksForm(data)
    if (res) {
      console.log(res)
    } else {
      console.error('error')
      return
    }
    setPopup(true)
  }

  return (
    <CardBox>
      <PopupParent active={popup}>
        <div className='flex flex-col items-center gap-2 px-10 '>
          <FaCircleCheck size={35} className='text-[#89FF41]' />
          <h3 className='text-xl font-semibold'>Nice work!</h3>
          <p className='text-base text-foreground/80'>You are now all set up.</p>
          <a href='/dashboard'>
            <Button>Go To Dashboard</Button>
          </a>
        </div>
      </PopupParent>
      <div className='flex flex-col gap-3'>
        <h1 className='font-bold text-3xl'>Last Step! - Links</h1>
        <span className='text-sm text-slate-500'>Enter some links for people to get to know you better!</span>
        {missingFields && <span className='text-red-500'>Oh no! Please fill one of the fields or click "Skip this step"</span>}
        <div className='flex flex-col gap-2 '>
          <Label htmlFor='LinkedInURL' className='font-bold'>
            LinkedIn URL
          </Label>
          <div className='flex w-full outline outline-[1px] outline-gray-400 rounded-lg'>
            <div className='w-fit bg-primary/20 rounded-tl-lg rounded-bl-lg flex items-center justify-center px-3'>https://www.linkedin.com/in </div>
            <Input
              id='linkedinUrL'
              type='text'
              required
              value={linkedin}
              onChange={e => setLinkedin(e.target.value)}
              className='rounded-bl-none rounded-tl-none w-full'
              placeholder='...'
            />
          </div>
        </div>
        <div className='flex flex-col gap-2 '>
          <Label htmlFor='GitHubUrl' className='font-bold'>
            GitHub URL
          </Label>
          <div className='flex h-10 w-full outline outline-[1px] outline-gray-400 rounded  '>
            <div className='h-full  w-fit  bg-[#E9E7FF] flex items-center justify-center px-3 rounded-bl-none rounded-tl-none  '>
              https://github.com/{' '}
            </div>
            <Input
              id='githubUrl'
              type='text'
              required
              value={githubUrl}
              onChange={e => setGithubUrl(e.target.value)}
              className='rounded w-full h-full  rounded-bl-none rounded-tl-none'
              placeholder='...'
            />
          </div>
        </div>
        <div className='flex flex-col gap-2 '>
          <Label htmlFor='Portfolio' className='font-bold'>
            Portfolio URL
          </Label>
          <div className='flex h-10 w-full outline outline-[1px] outline-gray-400 rounded  '>
            <div className='h-full  w-fit  bg-[#E9E7FF] flex items-center justify-center px-3 rounded-bl-none rounded-tl-none  '>https://</div>
            <Input
              id='Portfolio'
              type='text'
              required
              value={portfolioUrl}
              onChange={e => setPortfolioUrl(e.target.value)}
              className='rounded w-full h-full  rounded-bl-none rounded-tl-none'
              placeholder='...'
            />
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center'>
        <Button variant='primary' className='w-1/2 py-2.5 mt-5' onClick={handleSubmit}>
          Done!
        </Button>
        <Button variant='secondary' className='w-1/2 py-2.5 !bg-transparent !text-foreground/80' onClick={() => setPopup(true)}>
          Skip this step
        </Button>
      </div>
    </CardBox>
  )
}

export default LinksStep
