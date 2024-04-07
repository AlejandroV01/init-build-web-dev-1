import supabase from '@/lib/supabaseClient'
import { v4 as uuidv4 } from 'uuid'
const uploadResume = async (uuid: string, file: File) => {
  const { data, error } = await supabase.storage.from('resumes').upload(uuid + `/${uuid}-resume`, file, {
    upsert: true,
  })
  if (data) {
    console.log(data)
    return data
  } else {
    console.log(error)
    return null
  }
}

export default uploadResume
