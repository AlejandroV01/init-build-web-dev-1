import supabase from '@/lib/supabaseClient'

const deleteApplicant = async (ideaId: number, profile_id: number) => {
  const { data, error } = await supabase.from('idea_applicants').delete().eq('idea_id', ideaId).eq('profile_id', profile_id)
  if (data) {
    console.log(data)
    return true
  } else {
    console.error(error)
    return false
  }
}

export default deleteApplicant
