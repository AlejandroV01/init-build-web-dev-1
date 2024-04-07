import supabase from '@/lib/supabaseClient'

interface ProjectCreate {
  profile_id: number
  project_name: string
  position_title: string
  start_date: string
  end_date: string
  description: string
}

const insertProject = async (project: ProjectCreate) => {
  const { data, error } = await supabase
    .from('projects')
    .insert([
      {
        profile_id: project.profile_id,
        project_name: project.project_name,
        position_title: project.position_title, //error stops showing when position_title is called working_title
        start_date: project.start_date,
        end_date: project.end_date,
        description: project.description,
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

export default insertProject
