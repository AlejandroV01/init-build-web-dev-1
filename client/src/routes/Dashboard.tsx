import MyIdeasTab from '@/components/Dashboard/MyIdeasTab'
import OthersIdeasTab from '@/components/Dashboard/OthersIdeasTab'
import ProfileTab from '@/components/Dashboard/ProfileTab'
import SettingsTab from '@/components/Dashboard/SettingsTab'
import SideNav, { Tab } from '@/components/SideNav'
import React, { useState } from 'react'
import { FaRegLightbulb } from 'react-icons/fa'
import { FaRegUser } from 'react-icons/fa6'
import { RiComputerLine } from 'react-icons/ri'
const Dashboard = () => {
  const tabs: Tab[] = [
    { name: 'Profile', icon: <FaRegUser /> },
    { name: 'My Ideas', icon: <FaRegLightbulb /> },
    { name: "Other's Ideas", icon: <RiComputerLine /> },
  ]
  const [activeTab, setActiveTab] = useState('Profile')
  const handleSetActive = (setTab: string) => {
    setActiveTab(setTab)
  }
  const renderInfo = () => {
    switch (activeTab) {
      case 'My Ideas':
        return <MyIdeasTab />
      case "Other's Ideas":
        return <OthersIdeasTab />
      case 'Profile':
        return <ProfileTab />
      case 'Settings':
        return <SettingsTab />
    }
  }
  return (
    <div className='container py-14'>
      <div className='flex justify-between gap-5'>
        <SideNav tabs={tabs} active={activeTab} onTabClick={handleSetActive} />
        {renderInfo()}
      </div>
    </div>
  )
}

export default Dashboard
