import Button from './Button'
const Hero = () => {
  return (
    <div className='flex gap-6 py-14 container md:pl-20 md:pr-20'>
      <div className='w-full md:w-1/2 flex flex-col gap-4'>
        <h2 className='text-3xl sm:text-4xl font-bold max-w-[400px]'>
          Got an amazing <span className='text-primary'>Idea?</span> Share it with the world and build <span className='text-primary'>together.</span>
        </h2>
        <p>Bringing project ideas to the community.</p>
        <a href='/ideas'>
          <Button variant='primary'>View Community Project</Button>
        </a>
      </div>
      <div className='hidden md:block w-1/2 relative'>
        <img src='/undraw_work_chat_re_qes4.svg' alt='' className='z-20' />
        <img src='/Vector.png' alt='' className='absolute top-0 right-0 w-full h-full hidden lg:block -z-10' />
      </div>
    </div>
  )
}

export default Hero
