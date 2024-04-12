import insertEducation from '@/database/educations/insertEducation'
import updateEducation from '@/database/educations/updateEducation'
import { IEducationTableTypes } from '@/types'
import React, { useState } from 'react'
import { BsBriefcase } from 'react-icons/bs'
import { FaXmark } from 'react-icons/fa6'
import { HiPencil } from 'react-icons/hi2'
import { PiStudent } from 'react-icons/pi'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Button from './Button'
import Input from './Input'
import Label from './Label'
import PopupParent from './PopupParent'
import SeedBackground from './SeedBackground'
interface EducationProps {
  schoolLogo: string
  schoolName: string
  schoolMajor: string
  startDate: string
  endDate: string
  education_id: string
  isYourProfile: boolean
  removeEducation: (education_id: string) => void
}

const Education = ({ education_id, schoolName, schoolMajor, startDate, endDate, isYourProfile, removeEducation }: EducationProps) => {
  const navigate = useNavigate()
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [education, setEducation] = useState({
    education_id: education_id,
    school: schoolName,
    major: schoolMajor,
    startMonth: startDate.split(' ')[0],
    startYear: startDate.split(' ')[1],
    endMonth: endDate.split(' ')[0],
    endYear: endDate.split(' ')[1],
  })
  const handleManageBtnOnClick = () => {
    document.body.style.overflow = 'hidden'
    setIsPopupOpen(true)
  }
  const handleExperienceSave = async () => {
    const data: IEducationTableTypes = {
      profile_id: 0,
      school: education.school,
      major: education.major,
      start_date: `${education.startMonth} ${education.startYear}`,
      end_date: `${education.endMonth} ${education.endYear}`,
      education_id: education_id,
    }
    const res = await updateEducation(data)
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
    <div className='w-full flex flex-col '>
      <PopupParent active={isPopupOpen} handlePopoverClose={() => setIsPopupOpen(false)}>
        <div className='flex flex-col gap-3 p-5'>
          <div className='flex items-center justify-between mb-5'>
            <div className='flex items-center gap-4'>
              <div className='bg-primary/20 p-3 rounded-full'>
                <PiStudent size={30} />
              </div>
              <h2 className='text-xl font-semibold'>Edit Education</h2>
            </div>
            <FaXmark size={20} className='cursor-pointer' onClick={() => setIsPopupOpen(false)} />
          </div>
          <div className='grid grid-cols-12  gap-5'>
            <div className='col-span-6'>
              <Label htmlFor={`school`}>School Name</Label>
              <Input
                type='text'
                value={education.school}
                onChange={e => setEducation({ ...education, school: e.target.value })}
                name='school'
                id={`school`}
                className='w-full'
                placeholder='School name'
              />
            </div>
            <div className='col-span-6'>
              <Label htmlFor={`position`}>Major</Label>
              <Input
                type='text'
                value={education.major}
                onChange={e => setEducation({ ...education, major: e.target.value })}
                name='major'
                id={`major`}
                className='w-full'
                placeholder='Major'
              />
            </div>
            <div className='col-span-6'>
              <div className='grid grid-cols-6 gap-3'>
                <div className='col-span-3'>
                  <Label htmlFor={`startMonth`}>Start Month</Label>
                  <Input
                    type='text'
                    value={education.startMonth}
                    onChange={e => setEducation({ ...education, startMonth: e.target.value })}
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
                    value={education.startYear}
                    onChange={e => setEducation({ ...education, startYear: e.target.value })}
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
                    value={education.endMonth}
                    onChange={e => setEducation({ ...education, endMonth: e.target.value })}
                    name='endMonth'
                    id={`endMonth`}
                    className='w-full'
                    placeholder='Month'
                  />
                </div>
                <div className='col-span-3'>
                  <Label htmlFor={`endYear`}>End Year</Label>
                  <Input
                    type='number'
                    value={education.endYear}
                    onChange={e => setEducation({ ...education, endYear: e.target.value })}
                    name='endYear'
                    id={`endYear`}
                    className='w-full'
                    placeholder='Year'
                  />
                </div>
              </div>
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
      <div className=' flex gap-4 mb-4 justify-between'>
        <div className='flex gap-4'>
          <SeedBackground seed={schoolName}>
            <PiStudent size={50} />
          </SeedBackground>
          <div className='flex flex-col h-full'>
            <span className='font-extrabold text-lg text-2'>{schoolName}</span>
            <span className='mb-[5px]'>
              <span className=''>{schoolMajor}</span>
            </span>
            <span>
              <span className='text-gray-500 text-sm'>
                {startDate} - {endDate}
              </span>
            </span>
          </div>
        </div>
        <div className='flex gap-2'>
          {isYourProfile && <HiPencil color='#7B7B7B' fontSize='18px' onClick={handleManageBtnOnClick} className='cursor-pointer' />}
          {isYourProfile && (
            <FaRegTrashAlt color='#7B7B7B' fontSize='18px' onClick={() => removeEducation(education_id)} className='cursor-pointer' />
          )}
        </div>
      </div>
    </div>
  )
}

export default Education

import { useAppSelector } from '@/store/hooks'
import { FaRegTrashAlt } from 'react-icons/fa'

export const EducationProfileForm = ({
  educationItem,
  heading,
  isEdit,
  isActive,
  setIsActive,
}: {
  educationItem?: IEducationTableTypes
  heading: string
  isEdit: boolean
  isActive: boolean
  setIsActive: (value: React.SetStateAction<boolean>) => void
}) => {
  const navigate = useNavigate()
  const user = useAppSelector(state => state.auth)
  const [education, setEducation] = useState({
    school: educationItem?.school || '',
    major: educationItem?.major || '',
    startMonth: educationItem?.start_date.split(' ')[0] || '',
    startYear: educationItem?.start_date.split(' ')[1] || '',
    endMonth: educationItem?.end_date === 'Present' ? '' : educationItem?.end_date.split(' ')[0] || '',
    endYear: educationItem?.end_date === 'Present' ? '' : educationItem?.end_date.split(' ')[1] || '',
  })
  const handleExperienceSave = async () => {
    if (isEdit) {
      const data: IEducationTableTypes = {
        profile_id: 0,
        school: education.school,
        major: education.major,
        start_date: `${education.startMonth} ${education.startYear}`,
        end_date: `${education.endMonth} ${education.endYear}`,
        education_id: educationItem?.education_id,
      }
      const res = await updateEducation(data)
      console.log(res)
      if (res) {
        toast.success('Experience updated successfully')
        navigate(0)
      } else {
        toast.error('Failed to update experience')
      }
    } else {
      if (!user.profile_id) return
      const data: IEducationTableTypes = {
        profile_id: user.profile_id,
        school: education.school,
        major: education.major,
        start_date: `${education.startMonth} ${education.startYear}`,
        end_date: `${education.endMonth} ${education.endYear}`,
      }
      const res = await insertEducation(data)
      console.log(res)
      if (res) {
        toast.success('Education added successfully')
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
              <PiStudent size={30} />
            </div>
            <h2 className='text-xl font-semibold'>{heading}</h2>
          </div>
          <FaXmark size={20} className='cursor-pointer' onClick={handleCancel} />
        </div>
        <div className='grid grid-cols-12  gap-5'>
          <div className='col-span-6'>
            <Label htmlFor={`school`}>School Name</Label>
            <Input
              type='text'
              value={education.school}
              onChange={e => setEducation({ ...education, school: e.target.value })}
              name='school'
              id={`school`}
              className='w-full'
              placeholder='School name'
            />
          </div>
          <div className='col-span-6'>
            <Label htmlFor={`position`}>Major</Label>
            <Input
              type='text'
              value={education.major}
              onChange={e => setEducation({ ...education, major: e.target.value })}
              name='major'
              id={`major`}
              className='w-full'
              placeholder='Major'
            />
          </div>
          <div className='col-span-6'>
            <div className='grid grid-cols-6 gap-3'>
              <div className='col-span-3'>
                <Label htmlFor={`startMonth`}>Start Month</Label>
                <Input
                  type='text'
                  value={education.startMonth}
                  onChange={e => setEducation({ ...education, startMonth: e.target.value })}
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
                  value={education.startYear}
                  onChange={e => setEducation({ ...education, startYear: e.target.value })}
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
                  value={education.endMonth}
                  onChange={e => setEducation({ ...education, endMonth: e.target.value })}
                  name='endMonth'
                  id={`endMonth`}
                  className='w-full'
                  placeholder='Month'
                />
              </div>
              <div className='col-span-3'>
                <Label htmlFor={`endYear`}>End Year</Label>
                <Input
                  type='number'
                  value={education.endYear}
                  onChange={e => setEducation({ ...education, endYear: e.target.value })}
                  name='endYear'
                  id={`endYear`}
                  className='w-full'
                  placeholder='Year'
                />
              </div>
            </div>
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
