import { updateAccountInfo } from '@/database/profiles/updateProfileByEmail'
import { useAppSelector } from '@/store/hooks'
import { useState } from 'react'
import { toast } from 'react-toastify'
import Button from './Button'
import Input from './Input'
import Label from './Label'
const SettingsInput = () => {
  const user = useAppSelector(state => state.auth)
  console.log(user.first_name)

  const [firstName, setFirstName] = useState(`${user.first_name}`)
  const [lastName, setLastName] = useState(`${user.last_name}`)
  const [major, setMajor] = useState(`${user.major}`)
  const [school, setSchool] = useState(`${user.school}`)
  const [location, setLocation] = useState(`${user.location}`)
  const handleSave = async () => {
    if (!user.profile_id) return
    if (!firstName || !lastName || !major || !school || !location) {
      return toast.error('Please fill out all fields')
    }
    const res = await updateAccountInfo({
      first_name: firstName,
      last_name: lastName,
      major: major,
      school: school,
      location: location,
      profile_id: user.profile_id,
    })
    if (res) {
      toast.success('Account Info Updated')
    } else {
      toast.error('Error updating account info')
    }
  }
  return (
    <div className='create w-[500px] p-3'>
      <div className='flex flex-col gap-3'>
        <div className='flex flex-col gap-2'>
          <h1 className='font-bold text-2xl'> Account Info</h1>
          <Label>First Name</Label>
          <Input
            type='text'
            required
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            className='p-2 outline outline-[1px] outline-gray-400 rounded w-full'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <Label>Last Name</Label>
          <Input
            type='text'
            required
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            className='p-2 outline outline-[1px] outline-gray-400 rounded w-full'
            placeholder={user.first_name}
          />
        </div>
        <div className='flex flex-col gap-2'>
          <Label>Major</Label>
          <Input
            type='text'
            required
            value={major}
            onChange={e => setMajor(e.target.value)}
            className='p-2 outline outline-[1px] outline-gray-400 rounded w-full'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <Label>School</Label>
          <Input
            type='text'
            required
            value={school}
            onChange={e => setSchool(e.target.value)}
            className='p-2 outline outline-[1px] outline-gray-400 rounded w-full'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <Label>Location</Label>
          <Input
            type='text'
            required
            value={location}
            onChange={e => setLocation(e.target.value)}
            className='p-2 outline outline-[1px] outline-gray-400 rounded w-full'
          />
        </div>
        <div className='flex justify-between'>
          <Button onClick={handleSave}>Save Changes</Button>
        </div>
      </div>
    </div>
  )
}
export default SettingsInput
