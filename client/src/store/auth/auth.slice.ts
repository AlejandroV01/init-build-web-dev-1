import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IProfilesTableTypes } from '../../types/index'

const initialState: IProfilesTableTypes = {
  profile_id: null,
  first_name: '',
  last_name: '',
  email: '',
  school: '',
  major: '',
  location: '',
  linkedin_link: null,
  github_link: null,
  portfolio_link: null,
  skills: [],
  languages: [],
  created_at: null,
  uuid: '',
}

export const authSlice = createSlice({
  name: 'auth-state',
  initialState,
  reducers: {
    addProfile: (state, action: PayloadAction<IProfilesTableTypes>) => {
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
