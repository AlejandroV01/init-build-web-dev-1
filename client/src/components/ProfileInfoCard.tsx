import { FaGraduationCap } from 'react-icons/fa6'
import { PiFlaskLight } from 'react-icons/pi'
interface IProfileInfoCard {
  userFirstName: string
  userLastName: string
  userSchool: string
  userLocation: string
  userEmail: string
  userMajor: string
  isYourProfile: boolean
}

const ProfileInfoCard = ({ userFirstName, userLastName, userSchool, userLocation, userEmail, userMajor }: IProfileInfoCard) => {
  return (
    <div className='flex flex-col sm:flex-row gap-6 justify-between w-fit bg-primary p-5 rounded-lg text-white'>
      <div className='flex-col'>
        <div className='text-[18px] font-semibold'>
          {userFirstName} {userLastName}
        </div>
        <div className='text-[14px]'>
          <div className='flex items-center gap-1'>
            <FaGraduationCap />
            <span>{userSchool}</span>
          </div>
          <div className='flex items-center gap-1'>
            <PiFlaskLight />
            <span>{userMajor}</span>
          </div>
        </div>
      </div>
      <div className='w-[3px] bg-white/40' />
      <div className='flex-col'>
        <div className='text-[18px] font-semibold'>Contact</div>
        <div className='text-[14px]'>
          {userEmail} <br /> {userLocation}
        </div>
      </div>
    </div>
  )
}

export default ProfileInfoCard
