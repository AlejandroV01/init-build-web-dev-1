import supabase from "@/lib/supabaseClient";

// CREATE TABLE experiences (
//     profile_id BIGINT REFERENCES profiles (id),
//     company TEXT NOT NULL,
//     title TEXT NOT NULL,
//     start_date TEXT NOT NULL,
//     end_date TEXT NOT NULL,
//     description TEXT
//     );

interface ExperienceTableTypes {
  experienceId: number;
  company: string;
  title: string;
  startDate: string;
  endDate: string;
  description: string;
}

const updateExperience = async (experience: ExperienceTableTypes) => {
  const { data, error } = await supabase
    .from("experiences")
    .update({
      company: experience.company,
      title: experience.title,
      start_date: experience.startDate,
      end_date: experience.endDate,
      description: experience.description,
    })
    .eq("experience_id", experience.experienceId);
  if (data) {
    console.log(data);
    return true;
  } else {
    console.error(error);
    return false;
  }
};

export default updateExperience;
