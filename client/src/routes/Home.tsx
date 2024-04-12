import Button from '@/components/Button'
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
    <div className=''>
      <Hero />
      <div className='flex flex-col items-center gap-5 container md:pl-20 md:pr-20'>
        <span className='font-medium'>Made possible by:</span>
        <div className='flex gap-7 sm:gap-14'>
          {companies.map(company => {
            return <img key={company.name} src={company.src} alt={company.name} className='h-[35px] sm:h-[45px] aspect-auto' />
          })}
        </div>
      </div>
      <div className='py-14 flex flex-col gap-14 container md:pl-40 md:pr-40'>
        <HomeInfoCard
          title='Discover the World of Coding'
          highlight='Discover'
          imgSRC='/home.PNG'
          description={`Explore a diverse range of project ideas from talented individuals within the development community. Whether you're passionate about frontend design or backend development, find projects that match your skills and interests.`}
        />
        <HomeInfoCard
          title='Build Your Dream Team'
          highlight='Team'
          imgSRC='/applicant.PNG'
          description={`Connect with like-minded collaborators and build your dream team for project execution. Whether you're seeking frontend developers, backend engineers, or UI/UX designers, our platform facilitates seamless team formation to bring your ideas to life.`}
          reversed
        />
        <HomeInfoCard
          title='Foster Community Collaboration'
          highlight='Community'
          imgSRC='/chat.PNG'
          description={`Cultivate a collaborative environment where creativity flourishes and ideas thrive. Share your project concepts, receive valuable feedback, and collaborate with passionate individuals to turn your vision into reality. Together, we empower innovation and drive collective progress.`}
        />
      </div>
      <CTA />
      <MeetTheTeam />
    </div>
  )
}
export default Home

const CTA = () => {
  return (
    <div className='bg-primary py-10'>
      <div className='flex flex-col items-center gap-5 container'>
        <h2 className='text-3xl font-semibold text-center text-white'>Get your ideas out there.</h2>
        <a href='/auth'>
          <Button variant='secondary' className='text-white bg-[#928bff]'>
            Get Started
          </Button>
        </a>
        <img src='/MACProfile.png' alt='' className='w-full max-w-[900px]' />
      </div>
    </div>
  )
}
