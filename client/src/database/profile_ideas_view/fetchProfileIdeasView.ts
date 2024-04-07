import supabase from '@/lib/supabaseClient'

const fetchProfileIdeasView = async () => {
  const { data, error } = await supabase.from('profile_ideas_view').select('*')
  if (data) {
    console.log(data)
    return data
  } else {
    console.error(error)
    return []
  }
}

export default fetchProfileIdeasView
