import supabase from '@/lib/supabaseClient'
const fetchIdeaNotProfileId = async (profileId: number) => {
  const { data: ideas, error } = await supabase.from('ideas').select('*').neq('profile_id', profileId)
  if (ideas) {
    return ideas
  } else {
    console.error(error)
    return null
  }
}

export default fetchIdeaNotProfileId
