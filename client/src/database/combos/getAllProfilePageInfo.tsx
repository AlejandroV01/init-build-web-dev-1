import supabase from '@/lib/supabaseClient'

const getAllProfilePageInfo = async (profile_id: number) => {
  const { data, error } = await supabase.from('profiles').select(`
    ${profile_id}, 
    first_name, 
    educations ( ${profile_id}, school )
    `)

  if (error) {
    console.error(error)
    return
  }

  return data
}

export default getAllProfilePageInfo
