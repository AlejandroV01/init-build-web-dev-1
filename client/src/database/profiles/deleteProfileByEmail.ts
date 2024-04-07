import supabase from '@/lib/supabaseClient'

import React from 'react'

const deleteProfileByEmail = async (email: string) => {
  const {data: emails, error} = await supabase.from('profiles').delete().eq('email', email)
  if (emails) {
    console.log(email)
    return true
  }
  else {
    console.error(error)
    return false
  }
  
}

export default deleteProfileByEmail