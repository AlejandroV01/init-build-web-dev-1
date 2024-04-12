import React from 'react'

interface HomeInfoCardProps {
  title: string
  highlight: string
  description: string
  imgSRC: string
  reversed?: boolean
}

const HomeInfoCard = ({ title, highlight, description, imgSRC, reversed = false }: HomeInfoCardProps) => {
  const newTitle: string[] = title.split(' ')
  console.log(newTitle)
  if (reversed) {
    return (
      <div className='flex w-full gap-10 justify-center'>
        <div className='w-full lg:w-1/2 flex flex-col justify-center gap-6'>
          <h2 className='text-wrap text-3xl font-semibold'>
            {newTitle.map((word: string) => (
              <span key={word} className={`${word === highlight && 'text-primary'}`}>
                {word}{' '}
              </span>
            ))}
          </h2>
          <div className='text-wrap font-medium'>{description}</div>
        </div>
        <img className='hidden lg:block w-1/2 rounded-lg border-[8px] border-primary/60' src={imgSRC} />
      </div>
    )
  }
  return (
    <div className='flex w-full gap-10 justify-center'>
      <img className='hidden lg:block w-1/2 rounded-lg border-[8px] border-primary/60' src={imgSRC} />
      <div className='w-full lg:w-1/2 flex flex-col justify-center gap-6'>
        <h2 className='text-wrap text-3xl font-semibold'>
          {newTitle.map((word: string) => (
            <span key={word} className={`${word === highlight && 'text-primary'}`}>
              {word}{' '}
            </span>
          ))}
        </h2>
        <div className='text-wrap font-medium'>{description}</div>
      </div>
    </div>
  )
}

export default HomeInfoCard

{
  /* <HomeInfoCard
  title='Example text something'
  highlight='Example'
  imgSRC='https://images3.alphacoders.com/133/1332803.png'
  description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
/>
<HomeInfoCard
  title='Example text something'
  highlight='Example'
  reversed
  imgSRC='https://images3.alphacoders.com/133/1332803.png'
  description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
/> */
}
