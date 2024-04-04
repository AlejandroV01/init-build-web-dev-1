import React, { useState } from 'react'
import { IconType } from 'react-icons'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaCheck } from 'react-icons/fa6'
import { HiOutlinePaintBrush, HiPencil } from 'react-icons/hi2'
interface PortfolioProps {
  variant: string
  title?: string
  bgColor?: string
  domain?: string
  link?: string
  icon?: IconType
  handleStateLinkChange: (link: string, variant: string) => void
}

const Portfolio = ({ variant, title, bgColor, domain, link, icon: Icon, handleStateLinkChange }: PortfolioProps) => {
  switch (variant) {
    case 'github':
      title = 'Github'
      domain = 'https://github.com/'
      bgColor = 'bg-[black]'
      Icon = FaGithub

      break
    case 'linkedin':
      title = 'LinkedIn'
      domain = 'https://linkedin.com/in/'
      bgColor = 'bg-[#0274B3]'
      Icon = FaLinkedin
      break
    case 'personal':
      title = 'Personal Website'
      domain = 'https://'
      Icon = HiOutlinePaintBrush
      bgColor = 'bg-primary'
      break
  }

  const [userLink, setLink] = useState(link)
  const [input, setInput] = useState('')
  const [showInput, setShowInput] = useState(false)
  const [showEdit, setShowEdit] = useState(true)

  const handleDBLinkChange = () => {
    console.log('Change link in db to', input)
    const dataBaseResult = true
    if (dataBaseResult) {
      handleStateLinkChange(input, variant)
    }
  }
  const handleLinkChange = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    setLink(input)
    handleDBLinkChange()
    setShowInput(false)
    setShowEdit(true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  return (
    <div className='w-full flex flex-col '>
      <div className='flex items-center gap-4 h-[80px] mb-4 text-black '>
        <div className={`h-full rounded-[8px] w-[80px] drop-shad ${bgColor} flex justify-center items-center`}>
          {Icon && <Icon size={45} color='white' />}
        </div>
        <div className='flex flex-col  '>
          <span className='font-extrabold text-lg text-2'>{title}</span>

          <span className='flex items-center gap-2'>
            <span>
              <a href={domain && domain + userLink} target='_blank' className='hover:text-primary'>
                {domain}
                {showEdit && <span>{userLink}</span>}
              </a>
            </span>

            {showInput && (
              <form className='flex gap-2'>
                <input
                  type='text'
                  className='outline outline-[#afafaf] outline-1 rounded-md pl-2'
                  placeholder='johndoe'
                  value={input}
                  onChange={handleInputChange}
                />
                <button type='submit' onClick={e => handleLinkChange(e)} className='hover:text-primary'>
                  <FaCheck />
                </button>
              </form>
            )}

            {showEdit && (
              <button
                onClick={() => {
                  setShowInput(true)
                  setShowEdit(false)
                }}
                className='hover:text-primary'
              >
                <HiPencil color='#7B7B7B' />
              </button>
            )}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
