export interface IMessageCreate {
  profile_id: number
  idea_id: string
  text: string
  created_at?: string
}
export interface IIdeaTableTypes {
  idea_id?: string
  profile_id: number
  idea_title: string
  idea_description: string
  tech_stack: string[]
  front_end: number
  back_end: number
  github_link: string
  full_stack: number
  ux_ui: number
  created_at?: string
}

export interface IIdeaSavesTableTypes {
  idea_id: string
  profile_id: number
}

export interface IIdeaApplicantsTableTypes {
  idea_id: string
  profile_id: number
  application_role: 'Frontend' | 'Backend' | 'Full-Stack' | 'UI/UX'
  is_accepted: boolean
}

export interface IEducationTableTypes {
  education_id?: string
  profile_id: number
  school: string
  major: string
  start_date: string
  end_date: string
}

export interface IExperienceTableTypes {
  experience_id?: string
  profile_id: number
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
  project_id: string
  profile_id: number
  project_name: string
  position_title: string
  start_date: string
  end_date: string
  description: string
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
  idea_id_ideas: string
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
  created_at: string
}

export interface IApplicationParticipant {
  profile: IProfileInfo
  application_role: 'Frontend' | 'Backend' | 'Full-Stack' | 'UI/UX'
}

export interface IIdeaProfileAcceptedView {
  idea_id: string
  profile_id: number
  idea_title: string
  idea_description: string
  tech_stack: string[]
  created_at: string
  front_end: number
  back_end: number
  github_link: string
  full_stack: number
  ux_ui: number
  profile_email: string
  profile_first_name: string
  profile_last_name: string
  profile_major: string
  profile_school: string
  accepted_participants: IApplicationParticipant[]
  accepted_profile_ids: number[]
  accepted_profile_firstNames: string[]
  non_accepted_participants: IApplicationParticipant[]
}

export interface IMessageCreate {
  profile_id: number
  idea_id: string
  text: string
  created_at?: string
}

export interface IMessageCreate {
  profile_id: number
  idea_id: string
  text: string
  created_at?: string
}
