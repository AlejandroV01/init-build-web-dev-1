import React from 'react'

interface LabelProps {
  children: React.ReactNode | string
  htmlFor?: string
  className?: string
}

const Label: React.FC<LabelProps> = ({ children, htmlFor, className, ...props }) => {
  return (
    <label htmlFor={htmlFor} className={`${className} font-medium`} {...props}>
      {children}
    </label>
  )
}

export default Label
