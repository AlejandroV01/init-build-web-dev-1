import supabase from "@/lib/supabaseClient";

const fetchProfileIdeasViewByIdeaId = async (idea_id: string) => {
  const { data, error } = await supabase
    .from("idea_profile_accepted_view")
    .select("*")
    .eq("idea_id", idea_id);
  if (data) {
    console.log(data);
    return data[0];
  } else {
    console.error(error);
    return [];
  }
};

export default fetchProfileIdeasViewByIdeaId;
