export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export type Database = {
  public: {
    Tables: {
      educations: {
        Row: {
          education_id: string
          end_date: string
          major: string
          profile_id: number
          school: string
          start_date: string
        }
        Insert: {
          education_id?: string
          end_date: string
          major: string
          profile_id: number
          school: string
          start_date: string
        }
        Update: {
          education_id?: string
          end_date?: string
          major?: string
          profile_id?: number
          school?: string
          start_date?: string
        }
        Relationships: [
          {
            foreignKeyName: 'educations_profile_id_fkey'
            columns: ['profile_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['profile_id']
          }
        ]
      }
      experiences: {
        Row: {
          company: string
          description: string
          end_date: string
          experience_id: string
          profile_id: number
          start_date: string
          title: string
        }
        Insert: {
          company: string
          description: string
          end_date: string
          experience_id?: string
          profile_id: number
          start_date: string
          title: string
        }
        Update: {
          company?: string
          description?: string
          end_date?: string
          experience_id?: string
          profile_id?: number
          start_date?: string
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: 'experiences_profile_id_fkey'
            columns: ['profile_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['profile_id']
          }
        ]
      }
      idea_applicants: {
        Row: {
          application_id: string
          application_role: string
          idea_id: string
          is_accepted: boolean
          profile_id: number
        }
        Insert: {
          application_id?: string
          application_role: string
          idea_id: string
          is_accepted: boolean
          profile_id: number
        }
        Update: {
          application_id?: string
          application_role?: string
          idea_id?: string
          is_accepted?: boolean
          profile_id?: number
        }
        Relationships: [
          {
            foreignKeyName: 'idea_applicants_idea_id_fkey'
            columns: ['idea_id']
            isOneToOne: false
            referencedRelation: 'idea_profile_accepted_view'
            referencedColumns: ['idea_id']
          },
          {
            foreignKeyName: 'idea_applicants_idea_id_fkey'
            columns: ['idea_id']
            isOneToOne: false
            referencedRelation: 'ideas'
            referencedColumns: ['idea_id']
          },
          {
            foreignKeyName: 'idea_applicants_profile_id_fkey'
            columns: ['profile_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['profile_id']
          }
        ]
      }
      idea_saves: {
        Row: {
          idea_id: string
          idea_save_id: string
          profile_id: number
        }
        Insert: {
          idea_id: string
          idea_save_id?: string
          profile_id: number
        }
        Update: {
          idea_id?: string
          idea_save_id?: string
          profile_id?: number
        }
        Relationships: [
          {
            foreignKeyName: 'idea_saves_idea_id_fkey'
            columns: ['idea_id']
            isOneToOne: false
            referencedRelation: 'idea_profile_accepted_view'
            referencedColumns: ['idea_id']
          },
          {
            foreignKeyName: 'idea_saves_idea_id_fkey'
            columns: ['idea_id']
            isOneToOne: false
            referencedRelation: 'ideas'
            referencedColumns: ['idea_id']
          },
          {
            foreignKeyName: 'idea_saves_profile_id_fkey'
            columns: ['profile_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['profile_id']
          }
        ]
      }
      ideas: {
        Row: {
          back_end: number
          created_at: string
          front_end: number
          full_stack: number
          github_link: string
          idea_description: string
          idea_id: string
          idea_title: string
          profile_id: number
          tech_stack: string[]
          ux_ui: number
        }
        Insert: {
          back_end: number
          created_at: string
          front_end: number
          full_stack: number
          github_link: string
          idea_description: string
          idea_id?: string
          idea_title: string
          profile_id: number
          tech_stack: string[]
          ux_ui: number
        }
        Update: {
          back_end?: number
          created_at?: string
          front_end?: number
          full_stack?: number
          github_link?: string
          idea_description?: string
          idea_id?: string
          idea_title?: string
          profile_id?: number
          tech_stack?: string[]
          ux_ui?: number
        }
        Relationships: [
          {
            foreignKeyName: 'ideas_profile_id_fkey'
            columns: ['profile_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['profile_id']
          }
        ]
      }
      messages: {
        Row: {
          created_at: string
          idea_id: string
          message_id: string
          profile_id: number
          text: string
        }
        Insert: {
          created_at: string
          idea_id: string
          message_id?: string
          profile_id: number
          text: string
        }
        Update: {
          created_at?: string
          idea_id?: string
          message_id?: string
          profile_id?: number
          text?: string
        }
        Relationships: [
          {
            foreignKeyName: 'messages_idea_id_fkey'
            columns: ['idea_id']
            isOneToOne: false
            referencedRelation: 'idea_profile_accepted_view'
            referencedColumns: ['idea_id']
          },
          {
            foreignKeyName: 'messages_idea_id_fkey'
            columns: ['idea_id']
            isOneToOne: false
            referencedRelation: 'ideas'
            referencedColumns: ['idea_id']
          },
          {
            foreignKeyName: 'messages_profile_id_fkey'
            columns: ['profile_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['profile_id']
          }
        ]
      }
      profiles: {
        Row: {
          created_at: string
          email: string
          first_name: string
          github_link: string
          languages: string[]
          last_name: string
          linkedin_link: string
          location: string
          major: string
          portfolio_link: string
          profile_id: number
          school: string
          skills: string[]
        }
        Insert: {
          created_at?: string
          email: string
          first_name: string
          github_link: string
          languages: string[]
          last_name: string
          linkedin_link: string
          location: string
          major: string
          portfolio_link: string
          profile_id?: number
          school: string
          skills: string[]
        }
        Update: {
          created_at?: string
          email?: string
          first_name?: string
          github_link?: string
          languages?: string[]
          last_name?: string
          linkedin_link?: string
          location?: string
          major?: string
          portfolio_link?: string
          profile_id?: number
          school?: string
          skills?: string[]
        }
        Relationships: []
      }
      projects: {
        Row: {
          description: string
          end_date: string
          position_title: string
          profile_id: number
          project_id: string
          project_name: string
          start_date: string
        }
        Insert: {
          description: string
          end_date: string
          position_title: string
          profile_id: number
          project_id?: string
          project_name: string
          start_date: string
        }
        Update: {
          description?: string
          end_date?: string
          position_title?: string
          profile_id?: number
          project_id?: string
          project_name?: string
          start_date?: string
        }
        Relationships: [
          {
            foreignKeyName: 'projects_profile_id_fkey'
            columns: ['profile_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['profile_id']
          }
        ]
      }
    }
    Views: {
      idea_profile_accepted_view: {
        Row: {
          accepted_participants: Json | null
          accepted_profile_ids: number[] | null
          back_end: number | null
          created_at: string | null
          front_end: number | null
          full_stack: number | null
          github_link: string | null
          idea_description: string | null
          idea_id: string | null
          idea_title: string | null
          non_accepted_participants: Json | null
          profile_email: string | null
          profile_first_name: string | null
          profile_id: number | null
          profile_last_name: string | null
          profile_major: string | null
          profile_school: string | null
          tech_stack: string[] | null
          ux_ui: number | null
        }
        Relationships: [
          {
            foreignKeyName: 'ideas_profile_id_fkey'
            columns: ['profile_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['profile_id']
          }
        ]
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      application_role: 'Frontend' | 'Backend' | 'Full-Stack' | 'UI/UX'
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, 'public'>]

export type Tables<
  PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] & PublicSchema['Views']) | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] & Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] & Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] & PublicSchema['Views'])
  ? (PublicSchema['Tables'] & PublicSchema['Views'])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends keyof PublicSchema['Tables'] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
  ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends keyof PublicSchema['Tables'] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
  ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends keyof PublicSchema['Enums'] | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema['Enums']
  ? PublicSchema['Enums'][PublicEnumNameOrOptions]
  : never
