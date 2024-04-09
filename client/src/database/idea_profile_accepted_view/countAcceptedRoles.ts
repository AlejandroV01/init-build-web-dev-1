import supabase from '@/lib/supabaseClient'

const countAcceptedRoles = async (idea_id: number) => {
  try {
    const { data, error } = await supabase.from('idea_profile_accepted_view').select('accepted_participants').eq('idea_id', idea_id)
    if (error) {
      throw error
    }
    const acceptedRoles: Record<string, number> = {
      Frontend: 0,
      Backend: 0,
      'Full-Stack': 0,
      'UI/UX': 0,
    }
    data?.forEach(idea => {
      idea.accepted_participants.forEach(participant => {
        acceptedRoles[participant.application_role]++
      })
    })

    return acceptedRoles
  } catch (error) {
    console.error('Error counting accepted roles:', error)
    return {}
  }
}

export default countAcceptedRoles
