import supabase from "@/lib/supabaseClient";

const fetchIdeaApplicants = async (idea_id: number) => {
  const { data: ideas, error } = await supabase
    .from("idea_applicants")
    .select("*")
    .eq("idea_id", idea_id);

  if (ideas) {
    return ideas;
  } else {
    console.error(error);
    return null;
  }
};

export default fetchIdeaApplicants;
