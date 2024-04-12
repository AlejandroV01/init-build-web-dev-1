import React from 'react'

const Avatar = ({
  src,
  alt,
  size,
  firstName,
  lastName,
  className,
}: {
  src?: string
  alt?: string
  size?: number
  firstName: string
  lastName: string
  className?: string
}) => {
  if (src) {
    return <img src={src} alt={alt} className={`rounded-full object-cover ${className}`} style={{ width: size, height: size }} />
  } else {
    return (
      <img
        src={`https://api.dicebear.com/8.x/initials/svg?seed=${firstName}${lastName}&backgroundColor=00897b,00acc1,039be5,1e88e5,3949ab,43a047,5e35b1,7cb342,8e24aa,c0ca33,d81b60,e53935,f4511e,fb8c00,fdd835,ffb300,c0aede,d1d4f9,b6e3f4&backgroundType=solid,gradientLinear&backgroundRotation=0,360,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,300,310,320,330,340,350`}
        alt={alt}
        className={`rounded-full object-cover ${className}`}
        style={{ width: size, height: size }}
      />
    )
  }
}

export default Avatar
