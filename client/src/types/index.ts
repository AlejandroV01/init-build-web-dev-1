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

export interface IProfilesTableTypes {
  profile_id: number | null
  first_name: string
  last_name: string
  email: string
  school: string
  major: string
  location: string
  linkedin_link: string | null
  github_link: string | null
  portfolio_link: string | null
  skills: string[] | null
  languages: string[] | null
  created_at: Date | null | string
  uuid?: string
}
