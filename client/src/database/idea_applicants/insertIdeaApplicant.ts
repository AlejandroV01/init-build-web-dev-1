import supabase from '@/lib/supabaseClient'

const insertIdeaApplicant = async (idea_id: string, profile_id: number, application_role: string, is_accepted?: boolean) => {
  if (is_accepted === undefined) {
    is_accepted = false
  }
  const { data, error } = await supabase.from('idea_applicants').insert([{ idea_id, profile_id, application_role, is_accepted }]).select()

  if (data) {
    console.log(data)
    return true
  } else {
    console.error(error)
    return false
  }
}

export default insertIdeaApplicant
