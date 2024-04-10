import supabase from '@/lib/supabaseClient'
interface IProfileCreate {
  firstName: string
  lastName: string
  email: string
  school: string
  major: string
  location: string
  linkedinLink: string
  githubLink: string
  portfolioLink: string
  skills: string[]
  languages: string[]
}
const insertProfile = async (profile: IProfileCreate) => {
  const { data, error } = await supabase
    .from('profiles')
    .insert([
      {
        first_name: profile.firstName,
        last_name: profile.lastName,
        email: profile.email,
        school: profile.school,
        major: profile.major,
        location: profile.location,
        linkedin_link: profile.linkedinLink,
        github_link: profile.githubLink,
        portfolio_link: profile.portfolioLink,
        skills: profile.skills,
        languages: profile.languages,
      },
    ])
    .select()
  if (data) {
    console.log(data)
    return true
  } else {
    console.error(error)
    return false
  }
}

export default insertProfile

export const insertEmptyProfile = async (email: string) => {
  const { data, error } = await supabase
    .from('profiles')
    .insert([
      {
        first_name: '',
        last_name: '',
        email: email,
        school: '',
        major: '',
        location: '',
        linkedin_link: '',
        github_link: '',
        portfolio_link: '',
        skills: [],
        languages: [],
      },
    ])
    .select()
  if (data) {
    console.log(data)
    return true
  } else {
    console.error(error)
    return false
  }
}
