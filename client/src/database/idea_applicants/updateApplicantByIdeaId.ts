import supabase from '@/lib/supabaseClient'
import { IIdeaApplicantsTableTypes } from '@/types'

const updateIdeaApplicants = async (newApplicantUpdate: IIdeaApplicantsTableTypes) => {
  const { data: ideas, error } = await supabase
    .from('idea_applicants')
    .update({
      is_accepted: newApplicantUpdate.is_accepted,
    })
    .eq('idea_id', newApplicantUpdate.idea_id)
    .eq('profile_id', newApplicantUpdate.profile_id)
    .select('*')

  if (ideas) {
    return ideas
  } else {
    console.error(error)
    return null
  }
}

export default updateIdeaApplicants
