import Nav from '@/components/Nav'
import { useRetrieveUser } from '@/hooks/useRetrieveUser'

import { Outlet } from 'react-router-dom'
const Root = () => {
  const { loading } = useRetrieveUser()
  if (loading) return <div>Loading...</div>
  return (
    <main className='flex flex-col'>
      <Nav />
      <Outlet />
    </main>
  )
}
export default Root
