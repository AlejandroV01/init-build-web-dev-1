import fetchProfileByEmail from '@/database/profiles/fetchProfileByEmail'
import supabase from '@/lib/supabaseClient'
import { addProfile, addProfileUuid } from '@/store/auth/auth.slice'
import { useAppDispatch } from '@/store/hooks'
import { User } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'
export const useRetrieveUser = () => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const dispatch = useAppDispatch()
  const fetchProfile = async (email: string) => {
    const profile = await fetchProfileByEmail(email)
    if (profile) {
      dispatch(addProfile(profile))
    } else {
      console.error('Error fetching profile')
    }
  }
  useEffect(() => {
    async function getUser() {
      const { data, error } = await supabase.auth.getSession()
      if (error) {
        console.error(error)
        setLoading(false)
        return
      }
      if (!data.session?.user) {
        console.log('No user session', data, error)
        setLoading(false)
        return
      }
      data.session.user.email && (await fetchProfile(data.session.user.email))
      setUser(data.session.user)
      dispatch(addProfileUuid(data.session.user.id))
      setLoading(false)
    }

    getUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { user, loading }
}
