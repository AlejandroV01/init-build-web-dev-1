import insertProject from '@/database/projects/insertProject'
import updateProject from '@/database/projects/updateProject'
import { useAppSelector } from '@/store/hooks'
import { IProjectTableTypes } from '@/types'
import React, { useState } from 'react'
import { BsSuitcaseLg } from 'react-icons/bs'
import { CiViewBoard } from 'react-icons/ci'
import { FaRegTrashAlt } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'
import { HiPencil } from 'react-icons/hi2'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Button from './Button'
import Input from './Input'
import Label from './Label'
import PopupParent from './PopupParent'
import SeedBackground from './SeedBackground'
import TextArea from './TextArea'
import CheckboxComponent from './checkbox'
interface ProjectProps {
  projectName: string
  positionTitle: string
  projectStartDate: string
  projectEndDate: string
  description: string
  project_id: string
  isYourProfile: boolean
  removeProject: (project_id: string) => void
}

const Project = ({
  projectName,
  positionTitle,
  projectStartDate,
  projectEndDate,
  description,
  project_id,
  isYourProfile,
  removeProject,
}: ProjectProps) => {
  const navigate = useNavigate()
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [project, setProject] = useState({
    project_name: projectName,
    position_title: positionTitle,
    startMonth: projectStartDate.split(' ')[0],
    startYear: projectEndDate.split(' ')[1],
    endMonth: projectEndDate === 'Present' ? '' : projectEndDate.split(' ')[0],
    endYear: projectEndDate === 'Present' ? '' : projectEndDate.split(' ')[1],
    description: description,
    isPresent: projectEndDate === 'Present',
  })
  const [isPresent, setIsPresent] = useState(projectEndDate === 'Present')
  const handleManageBtnOnClick = () => {
    document.body.style.overflow = 'hidden'
    setIsPopupOpen(true)
  }
  const handleExperienceSave = async () => {
    const data: IProjectTableTypes = {
      profile_id: 0,
      project_name: project.project_name,
      position_title: project.position_title,
      start_date: `${project.startMonth} ${project.startYear}`,
      end_date: project.isPresent ? 'Present' : `${project.endMonth} ${project.endYear}`,
      description: project.description,
      project_id: project_id,
    }
    const res = await updateProject(data)
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
                <CiViewBoard size={30} />
              </div>
              <h2 className='text-xl font-semibold'>Edit Project</h2>
            </div>
            <FaXmark size={20} className='cursor-pointer' onClick={() => setIsPopupOpen(false)} />
          </div>

          <div className='grid grid-cols-12  gap-5'>
            <div className='col-span-6'>
              <Label htmlFor={`name`}>Project Name</Label>
              <Input
                type='text'
                value={project.project_name}
                onChange={e => setProject({ ...project, project_name: e.target.value })}
                name='name'
                id={`name`}
                className='w-full'
                placeholder='Project name'
              />
            </div>
            <div className='col-span-6'>
              <Label htmlFor={`name`}>Project Position Title</Label>
              <Input
                type='text'
                value={project.position_title}
                onChange={e => setProject({ ...project, position_title: e.target.value })}
                name='name'
                id={`name`}
                className='w-full'
                placeholder='Project position title'
              />
            </div>
            <div className='col-span-6'>
              <div className='grid grid-cols-6 gap-3'>
                <div className='col-span-3'>
                  <Label htmlFor={`startMonth`}>Start Month</Label>
                  <Input
                    type='text'
                    value={project.startMonth}
                    onChange={e => setProject({ ...project, startMonth: e.target.value })}
                    name='startMonth'
                    id={`startMonth`}
                    className='w-full'
                    placeholder='Month'
                  />
                </div>
                <div className='col-span-3'>
                  <Label htmlFor={`startYear`}>Start Year</Label>
                  <Input
                    type='text'
                    value={project.startYear}
                    onChange={e => setProject({ ...project, startYear: e.target.value })}
                    name='startYear'
                    id={`startYear`}
                    className='w-full'
                    placeholder='Month'
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
                    value={project.endMonth}
                    onChange={e => setProject({ ...project, endMonth: e.target.value })}
                    name='endMonth'
                    id={`endMonth`}
                    className='w-full'
                    placeholder='Month'
                  />
                </div>
                <div className='col-span-3'>
                  <Label htmlFor={`endYear`}>End Year</Label>
                  <Input
                    type='text'
                    value={project.endYear}
                    onChange={e => setProject({ ...project, endYear: e.target.value })}
                    name='endYear'
                    id={`endYear`}
                    className='w-full'
                    placeholder='Month'
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
                value={project.description}
                onChange={e => setProject({ ...project, description: e.target.value })}
                resizable={false}
                name='description'
                id={`description`}
                placeholder='A couple sentences about your project'
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
          <SeedBackground seed={projectName}>
            <BsSuitcaseLg size={50} />
          </SeedBackground>
          <div className='flex flex-col h-full'>
            <span className='font-extrabold text-lg text-2'>{projectName}</span>
            <span className='mb-[5px]'>
              <span>{positionTitle}</span>
            </span>
            <span>
              <span className='text-gray-500 text-sm'>{projectStartDate}</span>
              <span> - </span>
              <span className='text-gray-500 text-sm'>{projectEndDate}</span>
            </span>
          </div>
        </div>
        <div className='flex gap-2'>
          {isYourProfile && <HiPencil color='#7B7B7B' fontSize='18px' onClick={handleManageBtnOnClick} className='cursor-pointer' />}
          {isYourProfile && <FaRegTrashAlt color='#7B7B7B' fontSize='18px' onClick={() => removeProject(project_id)} className='cursor-pointer' />}
        </div>
      </div>

      <div>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Project

export const ProjectProfileForm = ({
  projectItem,
  heading,
  isEdit,
  isActive,
  setIsActive,
}: {
  projectItem?: IProjectTableTypes
  heading: string
  isEdit: boolean
  isActive: boolean
  setIsActive: (value: React.SetStateAction<boolean>) => void
}) => {
  const navigate = useNavigate()
  const user = useAppSelector(state => state.auth)
  const [project, setProject] = useState({
    project_name: projectItem?.project_name || '',
    position_title: projectItem?.position_title || '',
    startMonth: projectItem?.start_date.split(' ')[0] || '',
    startYear: projectItem?.start_date.split(' ')[1] || '',
    endMonth: projectItem?.end_date === 'Present' ? '' : projectItem?.end_date.split(' ')[0] || '',
    endYear: projectItem?.end_date === 'Present' ? '' : projectItem?.end_date.split(' ')[1] || '',
    description: projectItem?.description || '',
    isPresent: projectItem?.end_date === 'Present' || false,
  })
  const [isPresent, setIsPresent] = useState(projectItem?.end_date === 'Present' || false)
  const handleExperienceSave = async () => {
    if (isEdit) {
      const data: IProjectTableTypes = {
        profile_id: 0,
        project_name: project.project_name,
        position_title: project.position_title,
        start_date: `${project.startMonth} ${project.startYear}`,
        end_date: project.isPresent ? 'Present' : `${project.endMonth} ${project.endYear}`,
        description: project.description,
        project_id: projectItem?.project_id || '',
      }
      const res = await updateProject(data)
      console.log(res)
      if (res) {
        toast.success('Experience updated successfully')
        navigate(0)
      } else {
        toast.error('Failed to update experience')
      }
    } else {
      if (!user.profile_id) return
      const data = {
        profile_id: 0,
        project_name: project.project_name,
        position_title: project.position_title,
        start_date: `${project.startMonth} ${project.startYear}`,
        end_date: project.isPresent ? 'Present' : `${project.endMonth} ${project.endYear}`,
        description: project.description,
      }
      const res = await insertProject(data)
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
    <PopupParent active={isActive} handlePopoverClose={() => setIsActive(false)}>
      <div className='flex flex-col gap-3 p-5'>
        <div className='flex items-center justify-between mb-5'>
          <div className='flex items-center gap-4'>
            <div className='bg-primary/20 p-3 rounded-full'>
              <CiViewBoard size={30} />
            </div>
            <h2 className='text-xl font-semibold'>{heading}</h2>
          </div>
          <FaXmark size={20} className='cursor-pointer' onClick={() => setIsActive(false)} />
        </div>

        <div className='grid grid-cols-12  gap-5'>
          <div className='col-span-6'>
            <Label htmlFor={`name`}>Project Name</Label>
            <Input
              type='text'
              value={project.project_name}
              onChange={e => setProject({ ...project, project_name: e.target.value })}
              name='name'
              id={`name`}
              className='w-full'
              placeholder='Project name'
            />
          </div>
          <div className='col-span-6'>
            <Label htmlFor={`name`}>Project Position Title</Label>
            <Input
              type='text'
              value={project.position_title}
              onChange={e => setProject({ ...project, position_title: e.target.value })}
              name='name'
              id={`name`}
              className='w-full'
              placeholder='Project position title'
            />
          </div>
          <div className='col-span-6'>
            <div className='grid grid-cols-6 gap-3'>
              <div className='col-span-3'>
                <Label htmlFor={`startMonth`}>Start Month</Label>
                <Input
                  type='text'
                  value={project.startMonth}
                  onChange={e => setProject({ ...project, startMonth: e.target.value })}
                  name='startMonth'
                  id={`startMonth`}
                  className='w-full'
                  placeholder='Month'
                />
              </div>
              <div className='col-span-3'>
                <Label htmlFor={`startYear`}>Start Year</Label>
                <Input
                  type='text'
                  value={project.startYear}
                  onChange={e => setProject({ ...project, startYear: e.target.value })}
                  name='startYear'
                  id={`startYear`}
                  className='w-full'
                  placeholder='Month'
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
                  value={project.endMonth}
                  onChange={e => setProject({ ...project, endMonth: e.target.value })}
                  name='endMonth'
                  id={`endMonth`}
                  className='w-full'
                  placeholder='Month'
                />
              </div>
              <div className='col-span-3'>
                <Label htmlFor={`endYear`}>End Year</Label>
                <Input
                  type='text'
                  value={project.endYear}
                  onChange={e => setProject({ ...project, endYear: e.target.value })}
                  name='endYear'
                  id={`endYear`}
                  className='w-full'
                  placeholder='Month'
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
              value={project.description}
              onChange={e => setProject({ ...project, description: e.target.value })}
              resizable={false}
              name='description'
              id={`description`}
              placeholder='A couple sentences about your project'
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
