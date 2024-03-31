export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export type Database = {
  public: {
    Tables: {
      educations: {
        Row: {
          education_id: number
          end_date: string
          major: string
          profile_id: number | null
          school: string
          start_date: string
        }
        Insert: {
          education_id?: number
          end_date: string
          major: string
          profile_id?: number | null
          school: string
          start_date: string
        }
        Update: {
          education_id?: number
          end_date?: string
          major?: string
          profile_id?: number | null
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
          description: string | null
          end_date: string
          experience_id: number
          profile_id: number | null
          start_date: string
          title: string
        }
        Insert: {
          company: string
          description?: string | null
          end_date: string
          experience_id?: number
          profile_id?: number | null
          start_date: string
          title: string
        }
        Update: {
          company?: string
          description?: string | null
          end_date?: string
          experience_id?: number
          profile_id?: number | null
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
          application_role: Database['public']['Enums']['application_role']
          idea_id: number
          profile_id: number
        }
        Insert: {
          application_role: Database['public']['Enums']['application_role']
          idea_id: number
          profile_id: number
        }
        Update: {
          application_role?: Database['public']['Enums']['application_role']
          idea_id?: number
          profile_id?: number
        }
        Relationships: [
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
          idea_id: number
          profile_id: number
        }
        Insert: {
          idea_id: number
          profile_id: number
        }
        Update: {
          idea_id?: number
          profile_id?: number
        }
        Relationships: [
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
          created_at: string | null
          front_end: number
          full_stack: number
          idea_description: string
          idea_id: number
          idea_title: string
          profile_id: number | null
          tech_stack: string[]
          ux_ui: number
        }
        Insert: {
          back_end: number
          created_at?: string | null
          front_end: number
          full_stack: number
          idea_description: string
          idea_id?: never
          idea_title: string
          profile_id?: number | null
          tech_stack: string[]
          ux_ui: number
        }
        Update: {
          back_end?: number
          created_at?: string | null
          front_end?: number
          full_stack?: number
          idea_description?: string
          idea_id?: never
          idea_title?: string
          profile_id?: number | null
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
      profiles: {
        Row: {
          created_at: string | null
          email: string
          first_name: string
          github_link: string | null
          languages: string[] | null
          last_name: string
          linkedin_link: string | null
          location: string
          major: string
          portfolio_link: string | null
          profile_id: number
          school: string
          skills: string[] | null
        }
        Insert: {
          created_at?: string | null
          email: string
          first_name: string
          github_link?: string | null
          languages?: string[] | null
          last_name: string
          linkedin_link?: string | null
          location: string
          major: string
          portfolio_link?: string | null
          profile_id?: number
          school: string
          skills?: string[] | null
        }
        Update: {
          created_at?: string | null
          email?: string
          first_name?: string
          github_link?: string | null
          languages?: string[] | null
          last_name?: string
          linkedin_link?: string | null
          location?: string
          major?: string
          portfolio_link?: string | null
          profile_id?: number
          school?: string
          skills?: string[] | null
        }
        Relationships: []
      }
      projects: {
        Row: {
          description: string | null
          end_date: string
          position_title: string
          profile_id: number | null
          project_id: number
          project_name: string
          start_date: string
        }
        Insert: {
          description?: string | null
          end_date: string
          position_title: string
          profile_id?: number | null
          project_id?: number
          project_name: string
          start_date: string
        }
        Update: {
          description?: string | null
          end_date?: string
          position_title?: string
          profile_id?: number | null
          project_id?: number
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
      [_ in never]: never
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
