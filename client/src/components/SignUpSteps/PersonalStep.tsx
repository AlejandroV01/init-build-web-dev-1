import insertEducation from '@/database/educations/insertEducation'
import { updatePersonalForm } from '@/database/profiles/updateProfileByEmail'
import supabase from '@/lib/supabaseClient'
import { useAppSelector } from '@/store/hooks'
import { ChangeEvent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Button from '../Button'
import CardBox from '../CardBox'
import FileDrop from '../FileDrop'
import Input from '../Input'
import Label from '../Label'
interface Props {
  handleStepSubmit: () => void
}

const PersonalStep: React.FC<Props> = ({ handleStepSubmit }) => {
  const user = useAppSelector(state => state.auth)
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [school, setSchool] = useState<string>('')
  const [major, setMajor] = useState<string>('')
  const [location, setLocation] = useState<string>('')
  const [missingFields, setMissingFields] = useState<boolean>(false)
  const [file, setFile] = useState<File | null>(null)
  const uploadResume = async () => {
    if (!user.uuid) return
    if (!file) return
    const { data, error } = await supabase.storage.from('resumes').upload(user.uuid + '/' + uuidv4(), file)
    if (data) {
      console.log('success', data)
      return data
    } else {
      console.log('error', error)
    }
  }
  const handleSubmit = async () => {
    if (!user.profile_id) return
    if (!firstName || !lastName || !file) {
      setMissingFields(true)
      return
    }
    setMissingFields(false)
    const data = {
      first_name: firstName,
      last_name: lastName,
      school,
      major,
      location,
      profile_id: user.profile_id,
    }
    const res = await updatePersonalForm(data)
    const resumeRes = uploadResume()
    console.log(resumeRes)
    if (res) handleStepSubmit()
    else {
      console.error('Error updating personal info')
    }
  }
  return (
    <CardBox>
      <div className='flex flex-col gap-2 max-h-[600px] overflow-y-auto'>
        <h1 className='font-bold text-3xl'>Let's get started!</h1>
        <span className='text-sm text-slate-500'>Confirm your first and last name.</span>
        {missingFields && <span className='text-red-500'>Oh no! Please fill out all fields or click "Skip this step"</span>}
        <form className='flex flex-col w-full items-center gap-5' onSubmit={handleSubmit}>
          <div className='w-full flex gap-5'>
            <div className='w-1/2'>
              <Label htmlFor='first_name'>First Name *</Label>
              <Input
                type='text'
                id='first_name'
                placeholder='First Name'
                value={firstName}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
              />
            </div>
            <div className='w-1/2'>
              <Label htmlFor='last_name'>Last Name *</Label>
              <Input
                type='text'
                id='last_name'
                placeholder='Last Name'
                value={lastName}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <FileDrop handleFileUpload={setFile} />
          <div className='w-full flex gap-5'>
            <div className='w-1/2'>
              <Label htmlFor='major'>School Major</Label>
              <Input
                type='text'
                id='major'
                placeholder='School Major'
                value={major}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setMajor(e.target.value)}
              />
            </div>
            <div className='w-1/2'>
              <Label htmlFor='major'>Location</Label>
              <Input
                type='text'
                id='location'
                placeholder='Location'
                value={location}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setLocation(e.target.value)}
              />
            </div>
          </div>
          <div className='w-full'>
            <Label htmlFor='first_name'>School Name</Label>
            <Input
              type='text'
              id='school'
              placeholder='School Name'
              className='w-full'
              value={school}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setSchool(e.target.value)}
            />
          </div>
        </form>
        <div>
          <div className='flex flex-col items-center'>
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

export default PersonalStep
