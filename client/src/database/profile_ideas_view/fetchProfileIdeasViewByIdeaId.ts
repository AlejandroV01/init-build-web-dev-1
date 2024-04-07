import supabase from '@/lib/supabaseClient'

const fetchProfileIdeasViewByIdeaId = async (idea_id: number) => {
  const { data, error } = await supabase.from('profile_ideas_view').select('*').eq('idea_id_ideas', idea_id)
  if (data) {
    console.log(data)
    return data[0]
  } else {
    console.error(error)
    return []
  }
}

export default fetchProfileIdeasViewByIdeaId
