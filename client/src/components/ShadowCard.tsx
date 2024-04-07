import React from 'react'

const ShadowCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={`${className} border dark:bg-black rounded-lg shadow-[0px_0px_3.5px_1px_rgba(0,0,0,0.25)] w-full `}>{children}</div>
}

export default ShadowCard
