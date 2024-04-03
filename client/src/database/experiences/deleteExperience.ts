import supabase from "@/lib/supabaseClient";

const deleteExperience = async (experienceId: number) => {
  const { data, error } = await supabase
    .from("experiences")
    .delete()
    .eq("experience_id", experienceId);
  if (data) {
    console.log(data);
    return true;
  } else {
    console.error(error);
    return false;
  }
};

export default deleteExperience;
