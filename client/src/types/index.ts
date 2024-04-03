export interface IIdeaTableTypes {
  idea_id: number
  idea_title: string
  idea_description: string
  tech_stack: string[]
  front_end: number
  back_end: number
  full_stack: number
  ux_ui: number
}

export interface IIdeaSavesTableTypes {
  idea_id: number
  profile_id: number
}


export interface IEducationTableTypes {
  education_id: number
  profile_id: string
  school: string
  major: string
  start_date: string
  end_date: string
}
