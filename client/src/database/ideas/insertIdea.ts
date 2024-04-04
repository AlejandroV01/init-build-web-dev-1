import supabase from '@/lib/supabaseClient'

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
interface IIdeaCreate {
  id: number
  title: string
  description: string
  techStack: string[]
  frontend: number
  backend: number
  fullstack: number
  uiux: number
}
const insertIdea = async (idea: IIdeaCreate) => {
  const { data, error } = await supabase
    .from('ideas')
    .insert([
      {
        profile_id: idea.id,
        idea_title: idea.title,
        idea_description: idea.description,
        tech_stack: idea.techStack,
        front_end: idea.frontend,
        back_end: idea.backend,
        full_stack: idea.fullstack,
        ux_ui: idea.uiux,
      },
    ])
    .select()
  if (data) {
    console.log(data)
    return true
  } else {
    console.error(error)
    return false
  }
}

export default insertIdea
