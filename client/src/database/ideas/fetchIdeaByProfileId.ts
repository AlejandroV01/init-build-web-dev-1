import supabase from '@/lib/supabaseClient'
const fetchIdeaByProfileId = async (profileId: number) => {
  const { data: ideas, error } = await supabase.from('ideas').select('*').eq('profile_id', profileId)
  if (ideas) {
    return ideas
  } else {
    console.error(error)
    return null
  }
}

export default fetchIdeaByProfileId