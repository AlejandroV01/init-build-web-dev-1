import supabase from '@/lib/supabaseClient'
import { IApplicationParticipant } from '@/types'
const countAcceptedRoles = async (idea_id: string) => {
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
    if (!data) return acceptedRoles
    data?.forEach(idea => {
      if (!idea.accepted_participants) return
      idea.accepted_participants.forEach((participant: IApplicationParticipant) => {
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
