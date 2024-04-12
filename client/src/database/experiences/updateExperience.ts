import supabase from '@/lib/supabaseClient'
import { IExperienceTableTypes } from '@/types'

const updateExperience = async (experience: IExperienceTableTypes) => {
  if (!experience.experience_id) return console.error('Experience ID is required')
  const { data, error } = await supabase
    .from('experiences')
    .update({
      company: experience.company,
      title: experience.title,
      start_date: experience.start_date,
      end_date: experience.end_date,
      description: experience.description,
    })
    .eq('experience_id', experience.experience_id)
    .select()
  if (data) {
    console.log(data)
    return true
  } else {
    console.error(error)
    return false
  }
}

export default updateExperience
