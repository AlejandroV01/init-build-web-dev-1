import supabase from "@/lib/supabaseClient";

// CREATE TABLE ideas (
//   idea_id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
//   profile_id BIGINT REFERENCES profiles (id),
//   idea_title TEXT NOT NULL,
//   idea_description TEXT NOT NULL,
//   tech_stack TEXT[] NOT NULL,
//   created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
//   front_end INT NOT NULL,
//   back_end INT NOT NULL,
//   full_stack INT NOT NULL,
//   ux_ui INT NOT NULL
// );
interface IMessageCreate {
  id: number;
  profile_id: number;
  idea_id: number;
  text: string;
}

const insertIdea = async (message: IMessageCreate) => {
  const { data, error } = await supabase
    .from("messages")
    .insert([
      {
        id: message.id,
        profile_id: message.profile_id,
        idea_id: message.idea_id,
        text: message.text,
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

export default insertIdea;
