import supabase from '@/lib/supabaseClient'

const fetchAllIdeas = async () => {
  const { data, error } = await supabase.from('idea_profile_accepted_view').select('*')
  if (data) {
    console.log(data)
    return data
  } else {
    console.error(error)
    return []
  }
}

export default fetchAllIdeas
