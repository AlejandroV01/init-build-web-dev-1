import supabase from '@/lib/supabaseClient'
import { IExperienceTableTypes } from '@/types'

const insertExperience = async (experienceInfo: IExperienceTableTypes) => {
  console.log(experienceInfo)
  const { data, error } = await supabase
    .from('experiences')
    .insert([
      {
        profile_id: experienceInfo.profile_id,
        company: experienceInfo.company,
        title: experienceInfo.title,
        start_date: experienceInfo.start_date,
        end_date: experienceInfo.end_date,
        description: experienceInfo.description,
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

export default insertExperience
