import supabase from '@/lib/supabaseClient'
import { User } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'
export const useRetrieveUser = () => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    async function getUser() {
      const { data, error } = await supabase.auth.getSession()
      if (error) return console.error(error)
      if (!data.session?.user) return
      setUser(data.session.user)
      setLoading(false)
    }

    getUser()
  }, [])

  return { user, loading }
}
