import supabase from "@/lib/supabaseClient";

const fetchExperiences = async (profile_id: number) => {
  const { data: experiences, error } = await supabase
    .from("experiences")
    .select("*")
    .eq("profile_id", profile_id);

  if (experiences) {
    return experiences;
  } else {
    console.error(error);
    return null;
  }
};

export default fetchExperiences;
