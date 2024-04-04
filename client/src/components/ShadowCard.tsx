import React from 'react'

const ShadowCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={`${className} p-2 bg-white shadow-[0_0_3.5px_1px_rgba(0,0,0,0.3)] rounded-lg`}>{children}</div>
}

export default ShadowCard
