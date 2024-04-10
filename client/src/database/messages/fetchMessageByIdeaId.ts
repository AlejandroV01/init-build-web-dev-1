import supabase from "@/lib/supabaseClient";

const fetchMessageByIdeaId = async (ideaId: string) => {
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

export default fetchMessageByIdeaId;
