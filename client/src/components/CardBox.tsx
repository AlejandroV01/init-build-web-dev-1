import React from 'react'

const CardBox = ({ children }: { children: React.ReactNode }) => {
  return <div className='border border-foreground shadow-lg p-5 rounded-lg'>{children}</div>
}

export default CardBox
