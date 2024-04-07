import supabase from "@/lib/supabaseClient";

const fetchIdeasOnFilters = async (
  searchTerm: string,
  role: string,
  techs: string[]
) => {
  let role_column_name: string;

  switch (role) {
    case "Frontend":
      role_column_name = "front_end";
      break;
    case "Backend":
      role_column_name = "back_end";
      break;
    case "Full Stack":
      role_column_name = "full_stack";
      break;
    case "UX/UI":
      role_column_name = "ux_ui";
      break;
    default:
      role_column_name = "";
      break;
  }

  const { data: ideas, error } = await supabase
    .from("ideas")
    .select("*")
    .gte(role_column_name, 1)
    .contains("tech_stack", techs)
    .or(
      `idea_title.ilike.%${searchTerm}%,idea_description.ilike.%${searchTerm}%`
    );

  if (ideas) {
    return ideas;
  } else {
    console.error(error);
    return null;
  }
};

export default fetchIdeasOnFilters;
