import supabase from '@/lib/supabaseClient'
import fetchResume from '../resume/fetchResume'
const profileQuery = async (profileID: number) => {
  const { data: completeProfileInfo, error } = await supabase
    .from('profiles')
    .select(
      'profile_id, first_name, last_name, school, major, email, location, skills, linkedin_link, github_link, portfolio_link, ' +
        'experiences (*), educations(*), projects(*)'
    )
    .eq('profile_id', profileID)
  const res = await fetchResume(profileID.toString())
  if (completeProfileInfo) {
    return { fullProfile: completeProfileInfo[0], resume: res ? res[0] : null }
  } else {
    console.error(error)
    return null
  }
}

export default profileQuery
