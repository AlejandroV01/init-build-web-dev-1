import supabase from '@/lib/supabaseClient'

const deleteIdea = async (ideaId: number) => {
  const { data, error } = await supabase.from('ideas').delete().eq('idea_id', ideaId)
  if (data) {
    console.log(data)
    return true
  } else {
    console.error(error)
    return false
  }
}

export default deleteIdea