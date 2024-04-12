import { IFullProfile } from '@/components/Dashboard/ProfileTab'

import ProfileTab from '@/components/Dashboard/ProfileTab'
import profileQuery from '@/database/profiles/profileQuery'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const Profile = () => {
  const { id } = useParams<{ id: string }>()
  const [fullProfile, setFullProfile] = useState<IFullProfile | null>(null)

  useEffect(() => {
    getFullProfile()
  }, [])

  if (!id) {
    return <div>Invalid Idea ID</div>
  }
  const getFullProfile = async () => {
    const res = await profileQuery(parseInt(id))
    if (res) {
      // @ts-expect-error supabase wants JSON but we know its array
      setFullProfile(res)
    }
  }
  console.log(fullProfile)
  return (
    <div className='container flex justify-center'>
      <ProfileTab userId={parseInt(id)} />
    </div>
  )
}
export default Profile
