import supabase from '@/lib/supabaseClient'
import { IIdeaTableTypes } from '@/types'

const insertIdea = async (idea: IIdeaTableTypes) => {
  const { data, error } = await supabase
    .from('ideas')
    .insert([
      {
        back_end: idea.back_end,
        front_end: idea.front_end,
        profile_id: idea.profile_id,
        full_stack: idea.full_stack,
        idea_title: idea.idea_title,
        github_link: idea.github_link,
        idea_description: idea.idea_description,
        tech_stack: idea.tech_stack,
        ux_ui: idea.ux_ui,
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
