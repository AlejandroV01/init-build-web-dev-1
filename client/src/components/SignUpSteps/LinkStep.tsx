import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../Button'
import Input from '../Input'
import Label from '../Label'

const LinkStep = ({ handleGoNext }: { handleGoNext: () => void }) => {
  const navigate = useNavigate()

  // State variables
  const [linkdeninUrl, setLinkdeninUrl] = useState('...')
  const [githubUrl, setGithubUrl] = useState('...')
  const [portfolioUrl, setPortfolioUrl] = useState('...')

  const handleSubmit = () => {
    console.log('ALL THE STATE')
    navigate('/dashboard')
  }

  return (
    <div className='create w-[700px] p-3  border-2 border-gray-400 rounded'>
      <div className='flex flex-col gap-3'>
        <div className='flex flex-col gap-2'>
          <h1 className='font-bold text-4xl'> Last Step! - Links</h1>
          <h2>Enter some links for people to get to know you better!</h2>
          <div className='flex flex-col gap-2 '>
            <Label htmlFor='LinkedInURL' className='font-bold'>
              LinkedIn URL
            </Label>
            <div className='flex h-10 w-full outline outline-[1px] outline-gray-400 rounded'>
              <div className='h-full  w-fit  bg-[#E9E7FF] flex items-center justify-center px-3'>https://www.linkedin.com/in </div>
              <Input
                id='linkedinUrL'
                type='text'
                required
                value={linkdeninUrl}
                onChange={(e) => setLinkdeninUrl(e.target.value)}
                className='   rounded-bl-none rounded-tl-none w-full'
              />
            </div>
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
              onChange={(e) => setGithubUrl(e.target.value)}
              className=' rounded w-full h-full  rounded-bl-none rounded-tl-none'
            />
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-2 '>
        <Label htmlFor='portfolioUrl' className='font-bold'>
          Portfolio URL
        </Label>
        <div className='flex h-10 w-full outline outline-[1px] outline-gray-400 rounded '>
          <div className='h-full  w-fit  bg-[#E9E7FF] flex items-center justify-center px-3 rounded-bl-none rounded-tl-none  '>https:// </div>
          <Input
            id='portfolioUrl'
            type='text'
            required
            value={portfolioUrl}
            onChange={(e) => setPortfolioUrl(e.target.value)}
            className='rounded-bl-none rounded-tl-none w-full'
          />
        </div>
      </div>
      <div className='flex flex-col items-center '>
        <Button variant='primary' className='content-center w-[60%] font-bold text-xl ' onClick={handleSubmit}>
          Submit!
        </Button>
        <Button variant='secondary' className='w-[30%] mt-2'>
          Skip this Step
        </Button>
      </div>
    </div>
  )
}

export default LinkStep
