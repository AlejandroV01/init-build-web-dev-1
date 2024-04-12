import supabase from '@/lib/supabaseClient'

const fetchIdeaProfileAcceptedViewByIdeaId = async (idea_id: string) => {
  const { data, error } = await supabase.from('idea_profile_accepted_view').select('*').eq('idea_id', idea_id)
  if (data) {
    console.log(data)
    return data[0]
  } else {
    console.error(error)
    return null
  }
}

export default fetchIdeaProfileAcceptedViewByIdeaId

export const fetchIdeaProfileAcceptedViewByProfileId = async (profile_id: number) => {
  const { data, error } = await supabase.from('idea_profile_accepted_view').select('*').eq('profile_id', profile_id)
  if (data) {
    console.log(data)
    return data
  } else {
    console.error(error)
    return null
  }
}

export const fetchIdeaProfileAcceptedViewByProfileIdCounter = async (profile_id: number) => {
  const { data, error } = await supabase
    .from('idea_profile_accepted_view')
    .select('*')
    .neq('profile_id', profile_id)
    .contains('accepted_profile_ids', [profile_id])
  if (data) {
    console.log(data)
    return data
  } else {
    console.error(error)
    return null
  }
}
