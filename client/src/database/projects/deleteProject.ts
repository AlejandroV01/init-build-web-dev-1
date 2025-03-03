import supabase from '@/lib/supabaseClient'

const deleteProject = async (project_id: string) => {
  const { data, error } = await supabase.from('projects').delete().eq('project_id', project_id).select()
  if (data) {
    console.log(data)
    return true
  } else {
    console.error(error)
    return false
  }
}

export default deleteProject
