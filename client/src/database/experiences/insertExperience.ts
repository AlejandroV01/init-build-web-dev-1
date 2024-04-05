import supabase from "@/lib/supabaseClient";

interface IExperience {
  profile_id: number;
  company: string;
  title: string;
  start_date: string;
  end_date: string;
  description: string;
}

const insertExperience = async (experience: IExperience) => {
  const { data, error } = await supabase
    .from("experience")
    .insert([
      {
        profile_id: experience.profile_id,
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
