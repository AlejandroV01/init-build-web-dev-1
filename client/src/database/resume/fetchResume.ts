import supabase from '@/lib/supabaseClient'

const fetchResume = async (profile_id: string) => {
  console.log(profile_id)
  const { data, error } = await supabase.storage.from('resumes').list(profile_id, { limit: 1 })

  if (data) {
    console.log(data)
    return data
  } else {
    console.error(error)
    return null
  }
}

export default fetchResume
