import supabase from '@/lib/supabaseClient'
import { IProfileTableTypes } from '@/types'

const updateProfileByEmail = async (profile_email: string, data: IProfileTableTypes): Promise<boolean> => {
  try {
    const { error } = await supabase.from('profiles').update(data).eq('email', profile_email)

    if (error) {
      console.error(error)
      return false
    }

    return true
  } catch (error) {
    console.error('ERROR: Cannot update profile data', error)
    return false
  }
}

export default updateProfileByEmail

interface IPersonalForm {
  first_name: string
  last_name: string
  school: string
  major: string
  location: string
  profile_id: number
}
export const updatePersonalForm = async (personalForm: IPersonalForm) => {
  const { data, error } = await supabase
    .from('profiles')
    .update({
      first_name: personalForm.first_name,
      last_name: personalForm.last_name,
      school: personalForm.school,
      major: personalForm.major,
      location: personalForm.location,
    })
    .eq('profile_id', personalForm.profile_id)
    .select()
  if (data) {
    console.log(data)
    return true
  } else {
    console.error(error)
    return false
  }
}

interface ISkillsForm {
  skills: string[]
  profile_id: number
}
export const updateSkillsForm = async (personalForm: ISkillsForm) => {
  const { data, error } = await supabase
    .from('profiles')
    .update({
      skills: personalForm.skills,
    })
    .eq('profile_id', personalForm.profile_id)
    .select()
  if (data) {
    console.log(data)
    return true
  } else {
    console.error(error)
    return false
  }
}

interface ILinksForm {
  github: string
  linkedin: string
  portfolio: string
  profile_id: number
}
export const updateLinksForm = async (personalForm: ILinksForm) => {
  const { data, error } = await supabase
    .from('profiles')
    .update({
      github_link: personalForm.github,
      linkedin_link: personalForm.linkedin,
      portfolio_link: personalForm.portfolio,
    })
    .eq('profile_id', personalForm.profile_id)
    .select()
  if (data) {
    console.log(data)
    return true
  } else {
    console.error(error)
    return false
  }
}

interface IAccountInfo {
  first_name: string
  last_name: string
  school: string
  major: string
  location: string
  profile_id: number
}
export const updateAccountInfo = async (personalForm: IAccountInfo) => {
  const { data, error } = await supabase
    .from('profiles')
    .update({
      first_name: personalForm.first_name,
      last_name: personalForm.last_name,
      school: personalForm.school,
      major: personalForm.major,
      location: personalForm.location,
    })
    .eq('profile_id', personalForm.profile_id)
    .select()
  if (data) {
    console.log(data)
    return true
  } else {
    console.error(error)
    return false
  }
}
