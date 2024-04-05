import React from 'react'

const ShadowCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={`${className} p-2 border dark:bg-black rounded-lg shadow-[0px_0px_2px_0px_rgba(0,0,0,0.5)] w-full `}>{children}</div>
}

export default ShadowCard
