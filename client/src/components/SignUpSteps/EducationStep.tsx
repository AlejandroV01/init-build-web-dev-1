import insertEducation from '@/database/educations/insertEducation'
import { useAppSelector } from '@/store/hooks'
import { ChangeEvent, useState } from 'react'
import Button from '../Button'
import CardBox from '../CardBox'
import Input from '../Input'
import Label from '../Label'

interface Education {
  school: string
  major: string
  startMonth: string
  startYear: string
  endMonth: string
  endYear: string
}

interface Props {
  handleStepSubmit: () => void
}

const educationObject = {
  school: '',
  major: '',
  startMonth: '',
  startYear: '',
  endMonth: '',
  endYear: '',
}

const EducationStep: React.FC<Props> = ({ handleStepSubmit }) => {
  const user = useAppSelector(state => state.auth)
  const [education, setEducation] = useState<Education[]>([educationObject])

  const handleAddExperience = () => {
    setEducation([...education, educationObject])
  }
  const handleFormChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
    const { name, value } = e.target
    setEducation(prevEducation => {
      const updatedEducation = [...prevEducation]
      updatedEducation[index] = {
        ...updatedEducation[index],
        [name]: value,
      }
      return updatedEducation
    })
  }

  const handleRemove = (index: number) => {
    setEducation(prevEducation => {
      const updatedEducation = []
      for (let i = 0; i < prevEducation.length; ++i) {
        if (i != index) {
          updatedEducation.push(prevEducation[i])
        }
      }
      return updatedEducation
    })
  }
  const [missingFields, setMissingFields] = useState<boolean>(false)
  const handleSubmit = () => {
    let check = false
    education.forEach(eduction => {
      if (
        eduction.school === '' ||
        eduction.major === '' ||
        eduction.startMonth === '' ||
        eduction.startYear === '' ||
        eduction.endMonth === '' ||
        eduction.endYear === ''
      ) {
        setMissingFields(true)
        check = true
      }
    })
    if (check) return
    education.forEach(async education => {
      if (!user.profile_id) return
      const data = {
        profile_id: user.profile_id,
        school: education.school,
        major: education.major,
        start_date: `${education.startMonth} ${education.startYear}`,
        end_date: `${education.endMonth} ${education.endYear}`,
      }
      await insertEducation(data)
    })
    handleStepSubmit()
  }

  return (
    <CardBox>
      <div
        className='flex flex-col gap-2 max-h-[600px] overflow-y-scroll'
        style={{
          scrollbarWidth: education.length > 1 ? 'auto' : 'none',
          paddingInlineEnd: education.length > 1 ? '12px' : 'none',
        }}
      >
        <h1 className='font-bold text-3xl'>Education</h1>
        <span className='text-sm text-slate-500'>Enter some education information !</span>
        {missingFields && <span className='text-red-500'>Oh no! Please fill out all fields or click "Skip this step"</span>}
        <div>
          {education.map((education, i) => {
            return (
              <div key={i} className='mb-3'>
                <h2 className='font-bold text-lg'>Education {i + 1}</h2>
                <div className='grid grid-cols-12  gap-5'>
                  <div className='col-span-6'>
                    <Label htmlFor={`school[${i}]`}>School Name</Label>
                    <Input
                      type='text'
                      value={education.school}
                      onChange={e => handleFormChange(e, i)}
                      name='school'
                      id={`school[${i}]`}
                      className='w-full'
                      placeholder='School name'
                    />
                  </div>
                  <div className='col-span-6'>
                    <Label htmlFor={`position[${i}]`}>Major</Label>
                    <Input
                      type='text'
                      value={education.major}
                      onChange={e => handleFormChange(e, i)}
                      name='major'
                      id={`major[${i}]`}
                      className='w-full'
                      placeholder='Major'
                    />
                  </div>
                  <div className='col-span-6'>
                    <div className='grid grid-cols-6 gap-3'>
                      <div className='col-span-3'>
                        <Label htmlFor={`startMonth[${i}]`}>Start Month</Label>
                        <Input
                          type='text'
                          value={education.startMonth}
                          onChange={e => handleFormChange(e, i)}
                          name='startMonth'
                          id={`startMonth[${i}]`}
                          className='w-full'
                          placeholder='Month'
                        />
                      </div>
                      <div className='col-span-3'>
                        <Label htmlFor={`startYear[${i}]`}>Start Year</Label>
                        <Input
                          type='number'
                          value={education.startYear}
                          onChange={e => handleFormChange(e, i)}
                          name='startYear'
                          id={`startYear[${i}]`}
                          className='w-full'
                          placeholder='Year'
                        />
                      </div>
                    </div>
                  </div>
                  <div className='col-span-6'>
                    <div className='grid grid-cols-6 gap-3'>
                      <div className='col-span-3'>
                        <Label htmlFor={`endMonth[${i}]`}>End Month</Label>
                        <Input
                          type='text'
                          value={education.endMonth}
                          onChange={e => handleFormChange(e, i)}
                          name='endMonth'
                          id={`endMonth[${i}]`}
                          className='w-full'
                          placeholder='Month'
                        />
                      </div>
                      <div className='col-span-3'>
                        <Label htmlFor={`endYear[${i}]`}>End Year</Label>
                        <Input
                          type='number'
                          value={education.endYear}
                          onChange={e => handleFormChange(e, i)}
                          name='endYear'
                          id={`endYear[${i}]`}
                          className='w-full'
                          placeholder='Year'
                        />
                      </div>
                    </div>
                  </div>
                  {i != 0 && (
                    <div className='col-span-12'>
                      <Button variant='destructive' className='w-full' onClick={() => handleRemove(i)}>
                        Remove
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            )
          })}

          <div className='flex flex-col items-center'>
            <Button variant='secondary' className='w-full mb-5' onClick={handleAddExperience}>
              Add More
            </Button>
            <Button variant='primary' className='w-1/2 py-2.5 mt-5' onClick={handleSubmit}>
              Next Step
            </Button>
            <Button variant='secondary' className='w-1/2 py-2.5 !bg-transparent !text-foreground/80' onClick={handleStepSubmit}>
              Skip this step
            </Button>
          </div>
        </div>
      </div>
    </CardBox>
  )
}

export default EducationStep
