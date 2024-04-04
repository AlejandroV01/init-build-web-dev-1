import supabase from '@/lib/supabaseClient'

const fetchResume = async (uuid: string) => {
  const { data, error } = await supabase.storage.from('resumes').list(uuid + '/', {
    limit: 1,
  })

  if (data) {
    console.log(data)
    return data
  } else {
    console.error(error)
    return null
  }
}

export default fetchResume
