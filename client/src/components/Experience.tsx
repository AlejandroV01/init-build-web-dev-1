import insertExperience from '@/database/experiences/insertExperience'
import updateExperience from '@/database/experiences/updateExperience'
import { useAppSelector } from '@/store/hooks'
import { IExperienceTableTypes } from '@/types'
import React, { useState } from 'react'
import { BsBriefcase, BsSuitcaseLg } from 'react-icons/bs'
import { FaRegTrashAlt } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'
import { HiPencil } from 'react-icons/hi2'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { start } from 'repl'
import Button from './Button'
import Input from './Input'
import Label from './Label'
import PopupParent from './PopupParent'
import SeedBackground from './SeedBackground'
import TextArea from './TextArea'
import CheckboxComponent from './checkbox'
interface ExperienceProps {
  companyLogo: string
  companyTitle: string
  companyName: string
  startDate: string
  endDate: string
  description: string
  experience_id: string
  isYourProfile: boolean
  removeExperience: (experience_id: string) => void
}

const Experience = ({
  experience_id,
  companyTitle,
  companyName,
  startDate,
  endDate,
  description,
  isYourProfile,
  removeExperience,
}: ExperienceProps) => {
  const navigate = useNavigate()
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [experience, setExperience] = useState({
    company: companyName,
    position: companyTitle,
    startMonth: startDate.split(' ')[0],
    startYear: startDate.split(' ')[1],
    endMonth: endDate === 'Present' ? '' : endDate.split(' ')[0],
    endYear: endDate === 'Present' ? '' : endDate.split(' ')[1],
    description: description,
    isPresent: endDate === 'Present',
  })
  const [isPresent, setIsPresent] = useState(endDate === 'Present')
  const handleManageBtnOnClick = () => {
    document.body.style.overflow = 'hidden'
    setIsPopupOpen(true)
  }
  const handleExperienceSave = async () => {
    const data: IExperienceTableTypes = {
      profile_id: 0,
      company: experience.company,
      title: experience.position,
      start_date: `${experience.startMonth} ${experience.startYear}`,
      end_date: experience.isPresent ? 'Present' : `${experience.endMonth} ${experience.endYear}`,
      description: experience.description,
      experience_id: experience_id,
    }
    const res = await updateExperience(data)
    console.log(res)
    if (res) {
      toast.success('Experience updated successfully')
      navigate(0)
    } else {
      toast.error('Failed to update experience')
    }
    setIsPopupOpen(false)
  }
  const handleCancel = () => {
    document.body.style.overflow = 'auto'
    setIsPopupOpen(false)
  }
  return (
    <div className=' w-full flex flex-col '>
      <PopupParent active={isPopupOpen} handlePopoverClose={() => setIsPopupOpen(false)}>
        <div className='flex flex-col gap-3 p-5'>
          <div className='flex items-center justify-between mb-5'>
            <div className='flex items-center gap-4'>
              <div className='bg-primary/20 p-3 rounded-full'>
                <BsBriefcase size={30} />
              </div>
              <h2 className='text-xl font-semibold'>Edit Work Experience</h2>
            </div>
            <FaXmark size={20} className='cursor-pointer' onClick={() => setIsPopupOpen(false)} />
          </div>

          <div className='grid grid-cols-12  gap-5'>
            <div className='col-span-6'>
              <Label htmlFor={`company`}>Company</Label>
              <Input
                type='text'
                value={experience.company}
                onChange={e => setExperience({ ...experience, company: e.target.value })}
                name='company'
                id={`company`}
                className='w-full'
                placeholder='Company name'
              />
            </div>
            <div className='col-span-6'>
              <Label htmlFor={`position`}>Position Title</Label>
              <Input
                type='text'
                value={experience.position}
                onChange={e => setExperience({ ...experience, position: e.target.value })}
                name='position'
                id={`position`}
                className='w-full'
                placeholder='Title'
              />
            </div>
            <div className='col-span-6'>
              <div className='grid grid-cols-6 gap-3'>
                <div className='col-span-3'>
                  <Label htmlFor={`startMonth`}>Start Month</Label>
                  <Input
                    type='text'
                    value={experience.startMonth}
                    onChange={e => setExperience({ ...experience, startMonth: e.target.value })}
                    name='startMonth'
                    id={`startMonth`}
                    className='w-full'
                    placeholder='Month'
                  />
                </div>
                <div className='col-span-3'>
                  <Label htmlFor={`startYear`}>Start Year</Label>
                  <Input
                    type='number'
                    value={experience.startYear}
                    onChange={e => setExperience({ ...experience, startYear: e.target.value })}
                    name='startYear'
                    id={`startYear`}
                    className='w-full'
                    placeholder='Year'
                  />
                </div>
              </div>
            </div>
            <div className='col-span-6'>
              <div className='grid grid-cols-6 gap-3'>
                <div className='col-span-3'>
                  <Label htmlFor={`endMonth`}>End Month</Label>
                  <Input
                    type='text'
                    value={!experience.isPresent ? experience.endMonth : ''}
                    onChange={e => setExperience({ ...experience, endMonth: e.target.value })}
                    name='endMonth'
                    id={`endMonth`}
                    className='w-full'
                    placeholder='Month'
                    disabled={experience.isPresent}
                  />
                </div>
                <div className='col-span-3'>
                  <Label htmlFor={`endYear`}>End Year</Label>
                  <Input
                    type='number'
                    value={!experience.isPresent ? experience.endYear : ''}
                    onChange={e => setExperience({ ...experience, endYear: e.target.value })}
                    name='endYear'
                    id={`endYear`}
                    className='w-full'
                    placeholder='Year'
                    disabled={experience.isPresent}
                  />
                </div>
                <div className='col-span-6 flex flex-row align-middle gap-1 checkbox'>
                  <CheckboxComponent checked={isPresent} onChange={() => setIsPresent(!isPresent)} />
                  <Label htmlFor='checkbox' className='font-normal text-sm'>
                    Still work here?
                  </Label>
                </div>
              </div>
            </div>
            <div className='col-span-12'>
              <Label htmlFor={`description`}>Description</Label>
              <TextArea
                value={experience.description}
                onChange={e => setExperience({ ...experience, description: e.target.value })}
                resizable={false}
                name='description'
                id={`description`}
                placeholder='A couple sentences about your experience'
                className='w-full'
              />
            </div>
          </div>
          <div className='w-full flex justify-end gap-5'>
            <Button variant='secondary' className='!w-1/2' onClick={handleCancel}>
              Cancel
            </Button>
            <Button className='!w-1/2' onClick={handleExperienceSave}>
              Save
            </Button>
          </div>
        </div>
      </PopupParent>
      <div className='flex justify-between'>
        <div className='flex gap-4 mb-4'>
          <SeedBackground seed={companyName}>
            <BsSuitcaseLg size={50} />
          </SeedBackground>
          <div className='flex flex-col h-full'>
            <span className='font-extrabold text-lg text-2'>{companyTitle}</span>
            <span className='mb-[5px]'>
              <span>{companyName}</span>
            </span>
            <span>
              <span className='text-gray-500 text-sm'>{startDate}</span>
              <span> - </span>
              <span className='text-gray-500 text-sm'>{endDate}</span>
            </span>
          </div>
        </div>
        <div className='flex gap-2'>
          {isYourProfile && <HiPencil color='#7B7B7B' fontSize='18px' onClick={handleManageBtnOnClick} className='cursor-pointer' />}
          {isYourProfile && (
            <FaRegTrashAlt color='#7B7B7B' fontSize='18px' onClick={() => removeExperience(experience_id)} className='cursor-pointer' />
          )}
        </div>
      </div>

      <div>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Experience

export const ExperienceProfileForm = ({
  experienceItem,
  heading,
  isEdit,
  isActive,
  setIsActive,
}: {
  experienceItem?: IExperienceTableTypes
  heading: string
  isEdit: boolean
  isActive: boolean
  setIsActive: (value: React.SetStateAction<boolean>) => void
}) => {
  const navigate = useNavigate()
  const user = useAppSelector(state => state.auth)
  const [experience, setExperience] = useState({
    company: experienceItem?.company || '',
    position: experienceItem?.title || '',
    startMonth: experienceItem?.start_date.split(' ')[0] || '',
    startYear: experienceItem?.start_date.split(' ')[1] || '',
    endMonth: experienceItem?.end_date === 'Present' ? '' : experienceItem?.end_date.split(' ')[0] || '',
    endYear: experienceItem?.end_date === 'Present' ? '' : experienceItem?.end_date.split(' ')[1] || '',
    description: experienceItem?.description || '',
    isPresent: experienceItem?.end_date === 'Present' || false,
  })
  const [isPresent, setIsPresent] = useState(experienceItem?.end_date === 'Present' || false)
  const handleExperienceSave = async () => {
    if (isEdit) {
      const data: IExperienceTableTypes = {
        profile_id: 0,
        company: experience.company,
        title: experience.position,
        start_date: `${experience.startMonth} ${experience.startYear}`,
        end_date: experience.isPresent ? 'Present' : `${experience.endMonth} ${experience.endYear}`,
        description: experience.description,
        experience_id: experienceItem?.experience_id,
      }
      const res = await updateExperience(data)
      console.log(res)
      if (res) {
        toast.success('Experience updated successfully')
        navigate(0)
      } else {
        toast.error('Failed to update experience')
      }
    } else {
      if (!user.profile_id) return
      const data: IExperienceTableTypes = {
        profile_id: user.profile_id,
        company: experience.company,
        title: experience.position,
        start_date: `${experience.startMonth} ${experience.startYear}`,
        end_date: experience.isPresent ? 'Present' : `${experience.endMonth} ${experience.endYear}`,
        description: experience.description,
      }
      const res = await insertExperience(data)
      console.log(res)
      if (res) {
        toast.success('Experience added successfully')
        navigate(0)
      } else {
        toast.error('Failed to add experience')
      }
    }
    setIsActive(false)
  }
  const handleCancel = () => {
    document.body.style.overflow = 'auto'
    setIsActive(false)
  }
  return (
    <PopupParent active={isActive} handlePopoverClose={handleCancel}>
      <div className='flex flex-col gap-3 p-5'>
        <div className='flex items-center justify-between mb-5'>
          <div className='flex items-center gap-4'>
            <div className='bg-primary/20 p-3 rounded-full'>
              <BsBriefcase size={30} />
            </div>
            <h2 className='text-xl font-semibold'>{heading}</h2>
          </div>
          <FaXmark size={20} className='cursor-pointer' onClick={handleCancel} />
        </div>

        <div className='grid grid-cols-12  gap-5'>
          <div className='col-span-6'>
            <Label htmlFor={`company`}>Company</Label>
            <Input
              type='text'
              value={experience.company}
              onChange={e => setExperience({ ...experience, company: e.target.value })}
              name='company'
              id={`company`}
              className='w-full'
              placeholder='Company name'
            />
          </div>
          <div className='col-span-6'>
            <Label htmlFor={`position`}>Position Title</Label>
            <Input
              type='text'
              value={experience.position}
              onChange={e => setExperience({ ...experience, position: e.target.value })}
              name='position'
              id={`position`}
              className='w-full'
              placeholder='Title'
            />
          </div>
          <div className='col-span-6'>
            <div className='grid grid-cols-6 gap-3'>
              <div className='col-span-3'>
                <Label htmlFor={`startMonth`}>Start Month</Label>
                <Input
                  type='text'
                  value={experience.startMonth}
                  onChange={e => setExperience({ ...experience, startMonth: e.target.value })}
                  name='startMonth'
                  id={`startMonth`}
                  className='w-full'
                  placeholder='Month'
                />
              </div>
              <div className='col-span-3'>
                <Label htmlFor={`startYear`}>Start Year</Label>
                <Input
                  type='number'
                  value={experience.startYear}
                  onChange={e => setExperience({ ...experience, startYear: e.target.value })}
                  name='startYear'
                  id={`startYear`}
                  className='w-full'
                  placeholder='Year'
                />
              </div>
            </div>
          </div>
          <div className='col-span-6'>
            <div className='grid grid-cols-6 gap-3'>
              <div className='col-span-3'>
                <Label htmlFor={`endMonth`}>End Month</Label>
                <Input
                  type='text'
                  value={!experience.isPresent ? experience.endMonth : ''}
                  onChange={e => setExperience({ ...experience, endMonth: e.target.value })}
                  name='endMonth'
                  id={`endMonth`}
                  className='w-full'
                  placeholder='Month'
                  disabled={experience.isPresent}
                />
              </div>
              <div className='col-span-3'>
                <Label htmlFor={`endYear`}>End Year</Label>
                <Input
                  type='number'
                  value={!experience.isPresent ? experience.endYear : ''}
                  onChange={e => setExperience({ ...experience, endYear: e.target.value })}
                  name='endYear'
                  id={`endYear`}
                  className='w-full'
                  placeholder='Year'
                  disabled={experience.isPresent}
                />
              </div>
              <div className='col-span-6 flex flex-row align-middle gap-1 checkbox'>
                <CheckboxComponent checked={isPresent} onChange={() => setIsPresent(!isPresent)} />
                <Label htmlFor='checkbox' className='font-normal text-sm'>
                  Still work here?
                </Label>
              </div>
            </div>
          </div>
          <div className='col-span-12'>
            <Label htmlFor={`description`}>Description</Label>
            <TextArea
              value={experience.description}
              onChange={e => setExperience({ ...experience, description: e.target.value })}
              resizable={false}
              name='description'
              id={`description`}
              placeholder='A couple sentences about your experience'
              className='w-full'
            />
          </div>
        </div>
        <div className='w-full flex justify-end gap-5'>
          <Button variant='secondary' className='!w-1/2' onClick={handleCancel}>
            Cancel
          </Button>
          <Button className='!w-1/2' onClick={handleExperienceSave}>
            {isEdit ? 'Save' : 'Add'}
          </Button>
        </div>
      </div>
    </PopupParent>
  )
}
