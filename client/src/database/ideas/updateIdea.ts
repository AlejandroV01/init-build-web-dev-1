import supabase from '@/lib/supabaseClient'
import { IIdeaTableTypes } from '@/types'
const updateIdea = async (idea: IIdeaTableTypes) => {
  const { data, error } = await supabase
    .from('ideas')
    .update({
      idea_title: idea.idea_title,
      idea_description: idea.idea_description,
      tech_stack: idea.tech_stack,
      front_end: idea.front_end,
      back_end: idea.back_end,
      full_stack: idea.full_stack,
      ux_ui: idea.ux_ui,
    })
    .eq('idea_id', idea.idea_id)
  if (data) {
    console.log(data)
    return true
  } else {
    console.error(error)
    return false
  }
}

export default updateIdea
