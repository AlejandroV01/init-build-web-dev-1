import supabase from "@/lib/supabaseClient";

interface ProjectTableTypes {
  project_id: number;
  project_name: string;
  position_title: string;
  start_date: string;
  end_date: string;
  description: string;
}

const updateProject = async (project: ProjectTableTypes) => {
  const { data, error } = await supabase
    .from("projects")
    .update({
      project_name: project.project_name,
      position_title: project.position_title,
      start_date: project.start_date,
      end_date: project.end_date,
      description: project.description,
    })
    .eq("project_id", project.project_id);
  if (data) {
    console.log(data);
    return true;
  } else {
    console.error(error);
    return false;
  }
};

export default updateProject;
