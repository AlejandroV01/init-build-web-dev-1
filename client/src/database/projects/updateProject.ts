import supabase from '@/lib/supabaseClient'
import { IProjectTableTypes } from '@/types'

const updateProject = async (project: IProjectTableTypes) => {
  const { data, error } = await supabase
    .from('projects')
    .update({
      project_name: project.project_name,
      position_title: project.position_title,
      start_date: project.start_date,
      end_date: project.end_date,
      description: project.description,
    })
    .eq('project_id', project.project_id)
    .select()
  if (data) {
    console.log(data)
    return true
  } else {
    console.error(error)
    return false
  }
}

export default updateProject
