import fetchIdeaByProfileId from '@/database/ideas/fetchIdeaByProfileId'
import fetchIdeaNotProfileId from '@/database/ideas/fetchIdeaNotProfileId'
import { useAppSelector } from '@/store/hooks'
import React, { useEffect, useState } from 'react'
import ProjectCard from '../ProjectCard'
const MyIdeasTab = () => {
  const user = useAppSelector(state => state.auth)
  console.log(user)
  return (
    <div className='w-full bg-yellow-500 h-[2000px]'>
      <h1>My IDEAS TAB</h1>
    </div>
  )
}

export default MyIdeasTab
