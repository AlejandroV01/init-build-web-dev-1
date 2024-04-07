import supabase from '@/lib/supabaseClient'
const fetchIdeaByIdeaId = async (ideaId: number) => {
  const { data: ideas, error } = await supabase.from('ideas').select('*').eq('idea_id', ideaId)
  if (ideas) {
    return ideas[0]
  } else {
    console.error(error)
    return null
  }
}

export default fetchIdeaByIdeaId