import React from 'react'

const CardBox = ({ children }: { children: React.ReactNode }) => {
  return <div className='border border-foreground/40 shadow-lg p-5 rounded-lg'>{children}</div>
}

export default CardBox
