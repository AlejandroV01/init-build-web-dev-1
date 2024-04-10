import supabase from "@/lib/supabaseClient";

const fetchAcceptedIdeasByProfileId = async (profileId: number) => {
  const { data: acceptedIdeas, error } = await supabase
    .from("idea_profile_accepted_view")
    .select("*")
    .contains("accepted_profile_ids", [profileId]);

  if (acceptedIdeas) {
    return acceptedIdeas;
  } else {
    console.error(error);
    return null;
  }
};

export default fetchAcceptedIdeasByProfileId;
