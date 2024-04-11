import supabase from '@/lib/supabaseClient'
import { IEducationTableTypes } from '@/types'

const updateEducation = async (education: IEducationTableTypes) => {
  if (!education.education_id) return console.error('Experience ID is required')
  const { data, error } = await supabase
    .from('educations')
    .update({
      school: education.school,
      major: education.major,
      start_date: education.start_date,
      end_date: education.end_date,
    })
    .eq('education_id', education.education_id)
    .select()
  if (data) {
    console.log(data)
    return true
  } else {
    console.error(error)
    return false
  }
}

export default updateEducation
