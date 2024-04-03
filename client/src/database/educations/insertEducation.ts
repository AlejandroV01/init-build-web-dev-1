import supabase from '@/lib/supabaseClient'
import { IEducationTableTypes } from '@/types'

const insertEducation = async (educationInfo: IEducationTableTypes) => {
    const { data, error } = await supabase
    .from('educations')
    .insert([
        {
            profile_id: educationInfo.profile_id,
            school: educationInfo.school,
            major: educationInfo.major,
            start_date: educationInfo.start_date,
            end_date: educationInfo.end_date
        }
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