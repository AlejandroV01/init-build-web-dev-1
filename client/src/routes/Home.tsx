import Hero from '@/components/Hero'
import HomeInfoCard from '@/components/HomeInfoCard'
import MeetTheTeam from '@/components/MeetTheTeam'
import React from 'react'
const Home = () => {
  const companies = [
    { name: 'FIU', src: '/Florida_International_University_FIU_logo.svg' },
    { name: 'INIT', src: '/init.png' },
    { name: 'KF', src: '/kf.png' },
  ]
  return (
    <div className='container md:pl-20 md:pr-20'>
      <Hero />
      <div className='flex flex-col items-center gap-5 '>
        <span className='font-medium'>Made possible by:</span>
        <div className='flex gap-7 sm:gap-14'>
          {companies.map(company => {
            return <img key={company.name} src={company.src} alt={company.name} className='h-[35px] sm:h-[45px] aspect-auto' />
          })}
        </div>
      </div>
      <div className='py-14 flex flex-col gap-14 md:pl-20 md:pr-20'>
        <HomeInfoCard
          title='Discover the World of Coding'
          highlight='Discover'
          imgSRC='https://images3.alphacoders.com/133/1332803.png'
          description={`Explore a diverse range of project ideas from talented individuals within the development community. Whether you're passionate about frontend design or backend development, find projects that match your skills and interests.`}
        />
        <HomeInfoCard
          title='Build Your Dream Team'
          highlight='Team'
          imgSRC='https://images3.alphacoders.com/133/1332803.png'
          description={`Connect with like-minded collaborators and build your dream team for project execution. Whether you're seeking frontend developers, backend engineers, or UI/UX designers, our platform facilitates seamless team formation to bring your ideas to life.`}
          reversed
        />
        <HomeInfoCard
          title='Foster Community Collaboration'
          highlight='Community'
          imgSRC='https://images3.alphacoders.com/133/1332803.png'
          description={`Cultivate a collaborative environment where creativity flourishes and ideas thrive. Share your project concepts, receive valuable feedback, and collaborate with passionate individuals to turn your vision into reality. Together, we empower innovation and drive collective progress.`}
        />
      </div>
      <MeetTheTeam />
    </div>
  )
}
export default Home
