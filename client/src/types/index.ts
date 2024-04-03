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
  profile_id: number
  school: string
  major: string
  start_date: string
  end_date: string
}

export interface IExperienceTableTypes {
  profile_id: number
  experience_id: number
  company: string
  title: string
  start_date: string
  end_date: string
  description: string
}

export interface IProfileTableTypes {
  profile_id: number
  first_name: string
  last_name: string
  email: string
  school: string
  major: string
  location: string
  linkedin_link: string
  github_link: string
  portfolio_link: string
  skills: string[]
  languages: string[]
  created_at: string
}

export interface IProjectTableTypes {
  project_id: number
  profile_id: number
  project_name: string
  position_title: string
  start_date: string
  end_date: string
  description: string | null
}
