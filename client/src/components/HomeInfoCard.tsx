import React from 'react'

interface HomeInfoCardProps {
  title: string
  highlight: string
  description: string
  imgSRC: string
}

const HomeInfoCard = ({ title, highlight, description, imgSRC }: HomeInfoCardProps) => {
  const newTitle: string[] = title.split(' ')
  console.log(newTitle)
  return (
    <div className='flex justify-around py-4 rounded-md mt-5 w-3/4 h-auto'>
      <img
        className='hover:animate-[wiggle_1s_ease-in-out_infinite] w-1/3 rounded-lg border-[8px] border-primary/60'
        src={imgSRC}
        alt='Some Random Image I got from the Internet'
      />
      <div className='flex flex-col justify-around w-1/3'>
        <h2 className='text-wrap text-3xl font-medium'>
          {newTitle.map((word: string) => (
            <span key={word} className={`${word === highlight && 'text-primary'}`}>
              {word}{' '}
            </span>
          ))}
        </h2>
        <div className='text-wrap'>{description}</div>
      </div>
    </div>
  )
}

export default HomeInfoCard
