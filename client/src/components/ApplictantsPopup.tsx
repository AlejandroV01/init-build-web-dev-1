import { IApplicants } from '@/routes/Home'
import Avatar from './Avatar'
import Button from './Button'
const ApplicantsPopup = ({ applicants }: { applicants: IApplicants[] }) => {
  console.log(applicants)
  return (
    <div className='bg-red-500 w-[500px] rounded-lg'>
      <h1>ApplicantsPopup</h1>
      {applicants.map(applicant => (
        <h1>{applicant.firstName}</h1>
      ))}
      <Button variant='primary'>Button 1</Button>
      <Button variant='secondary'>Button 2</Button>
      <Avatar firstName='Test' lastName='Test' />
    </div>
  )
}

export default ApplicantsPopup
