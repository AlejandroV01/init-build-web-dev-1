import Nav from '@/components/Nav'
import { useRetrieveUser } from '@/hooks/useRetrieveUser'
import { addProfile } from '@/store/auth/auth.slice'
import { useAppDispatch } from '@/store/hooks'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Root = () => {
  const dispatch = useAppDispatch()
  const { user, loading } = useRetrieveUser()
  console.log(user, loading)
  if (loading) return <div>Loading...</div>

  return (
    <main className='flex flex-col'>
      <Nav />
      <Outlet />
    </main>
  )
}
export default Root
