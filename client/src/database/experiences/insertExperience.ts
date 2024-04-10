import supabase from "@/lib/supabaseClient";
import { IExperienceTableTypes } from "./../../types/index";

const insertExperience = async (experienceInfo: IExperienceTableTypes) => {
  const { data, error } = await supabase
    .from("experience")
    .insert([
      {
        profile_id: experience.profile_id,
        experience_id: experience.experience_id,
        company: experience.company,
        title: experience.title,
        start_date: experience.start_date,
        end_date: experience.end_date,
        description: experience.description,
      },
    ])
    .select();
  if (data) {
    console.log(data);
    return true;
  } else {
    console.error(error);
    return false;
  }
};

export default insertExperience;
