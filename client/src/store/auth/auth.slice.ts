import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface IProfileRedux {
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
const initialState: IProfileRedux = {
  profile_id: null,
  first_name: '',
  last_name: '',
  email: '',
  school: '',
  major: '',
  location: '',
  linkedin_link: '',
  github_link: '',
  portfolio_link: '',
  skills: [],
  languages: [],
  created_at: null,
  uuid: '',
}

export const authSlice = createSlice({
  name: 'auth-state',
  initialState,
  reducers: {
    addProfile: (state, action: PayloadAction<IProfileRedux>) => {
      return {
        ...state,
        profile_id: action.payload.profile_id,
        first_name: action.payload.first_name,
        last_name: action.payload.last_name,
        email: action.payload.email,
        school: action.payload.school,
        major: action.payload.major,
        location: action.payload.location,
        linkedin_link: action.payload.linkedin_link,
        github_link: action.payload.github_link,
        portfolio_link: action.payload.portfolio_link,
        skills: action.payload.skills,
        languages: action.payload.languages,
        created_at: action.payload.created_at,
      }
    },
    addProfileUuid: (state, action: PayloadAction<string>) => {
      state.uuid = action.payload
    },
    removeProfile: () => initialState,
  },
})

export const { addProfile, removeProfile, addProfileUuid } = authSlice.actions

export default authSlice.reducer
