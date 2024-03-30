import supabase from '@/lib/supabaseClient'
import { IEducationTableTypes } from './../../types/index'

const insertEducation = async (education: IEducationTableTypes) => {
  const { data, error } = await supabase
    .from('education')
    .insert([
      {
        profile_id: education.profile_id,
        school: education.school,
        major: education.major,
        start_date: education.start_date,
        end_date: education.end_date,
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

export default insertEducation
