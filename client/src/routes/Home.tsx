import Badge from '@/components/badge'
import React from 'react'
const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Badge label='Test' className='w-fit' variant='primary' />
      <Badge label='Test' className='w-fit' variant='secondary' />
      <Badge label='Test' className='w-fit' variant='danger' />
    </div>
  )
}
export default Home
