import React, { ReactNode } from 'react'

const PopupParent = ({ active = true, children }: { active: boolean; children: ReactNode }) => {
  return (
    <div className={`${!active && 'hidden'} absolute top-0 left-0 w-full h-full bg-black/50 flex justify-center`}>
      <div className='w-fit bg-background rounded-lg p-3 h-fit mt-56'>{children}</div>
    </div>
  )
}

export default PopupParent
