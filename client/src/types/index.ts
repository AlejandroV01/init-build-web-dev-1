export interface IIdeaTableTypes {
  idea_id: number
  profile_id: number
  idea_title: string
  idea_description: string
  tech_stack: string[]
  front_end: number
  back_end: number
  full_stack: number
  ux_ui: number
  created_at: string
}

export interface IIdeaSavesTableTypes {
  idea_id: number
  profile_id: number
}

export interface IIdeaApplicantsTableTypes {
  idea_id: number
  profile_id: number
  application_role: string
  is_accepted: boolean
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
}

export interface IProfileIdeasViewTypes {
  profile_id_profiles: number
  created_at_profiles: string
  email_profiles: string
  first_name_profiles: string
  github_link_profiles: string
  languages_profiles: string[]
  last_name_profiles: string
  linkedin_link_profiles: string
  location_profiles: string
  major_profiles: string
  portfolio_link_profiles: string
  school_profiles: string
  skills_profiles: string[]
  idea_id_ideas: number
  back_end_ideas: number
  created_at_ideas: string
  front_end_ideas: number
  full_stack_ideas: number
  idea_description_ideas: string
  idea_title_ideas: string
  tech_stack_ideas: string[]
  ux_ui_ideas: number
}

export interface IProfileInfo {
  profile_id: number
  first_name: string
  last_name: string
  email: string
  school: string
  major: string
  created_at: string // Assuming this is a string representation of a date
}

export interface IAcceptedParticipant {
  profile: IProfileInfo
  application_role: string
}

export interface IIdeaProfileAcceptedView {
  idea_id: number
  profile_id: number
  idea_title: string
  idea_description: string
  tech_stack: string[]
  created_at: string // Assuming this is a string representation of a date
  front_end: number
  back_end: number
  full_stack: number
  ux_ui: number
  profile_email: string
  profile_first_name: string
  profile_last_name: string
  profile_major: string
  profile_school: string
  accepted_participants: IAcceptedParticipant[]
}
