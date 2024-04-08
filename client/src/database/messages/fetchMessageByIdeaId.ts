import supabase from "@/lib/supabaseClient";
const fetchIdeaByIdeaId = async (ideaId: number) => {
  const { data, error } = await supabase
    .from("messages")
    .select("*")
    .eq("idea_id", ideaId);
  if (data) {
    return data;
  } else {
    console.error(error);
    return null;
  }
};

export default fetchIdeaByIdeaId;
