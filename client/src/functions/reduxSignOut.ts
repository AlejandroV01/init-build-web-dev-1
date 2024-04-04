import { removeProfile } from '@/store/auth/auth.slice'
import { useAppDispatch } from '@/store/hooks'
import { redirect } from 'react-router'

export const useReduxSignOut = () => {
  const dispatch = useAppDispatch()

  const signOut = () => {
    dispatch(removeProfile())
    redirect('/')
  }

  return signOut
}
