import { ReactNode } from 'react'

const SeedBackground = ({ children, seed }: { children: ReactNode; seed: string }) => {
  return (
    <div className='w-[80px] h-[80px] relative flex text-white items-center justify-center'>
      <div className='z-10'>{children}</div>
      <img
        src={`https://api.dicebear.com/8.x/icons/svg?seed=${seed}&scale=0&backgroundColor=80cbc4,80deea,81d4fa,90caf9,9fa8da,a5d6a7,b39ddb,b6e3f4,c0aede,c5e1a5,ce93d8,d1d4f9,e6ee9c,ef9a9a,f48fb1,ffab91,ffcc80,ffd5dc,ffdfbf,ffe082&backgroundType=solid,gradientLinear&backgroundRotation=0,360,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,300,310,320,330,340,350`}
        alt=''
        className='absolute top-0 left-0 rounded-lg'
      />
    </div>
  )
}

export default SeedBackground
