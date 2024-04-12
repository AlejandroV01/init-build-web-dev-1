import supabase from '@/lib/supabaseClient'

const deleteEducation = async (education_id: string) => {
  const { error } = await supabase.from('educations').delete().eq('education_id', education_id)

  if (error) {
    console.error(error)
    return false
  }

  return true
}

export default deleteEducation
