import updateIdeaApplicants from '@/database/idea_applicants/updateApplicantByIdeaId'
import countAcceptedRoles from '@/database/idea_profile_accepted_view/countAcceptedRoles'
import { IApplicationParticipant, IIdeaApplicantsTableTypes, IIdeaProfileAcceptedView } from '@/types'
import React, { useEffect, useState } from 'react'
import { AiOutlineLoading } from 'react-icons/ai'
import { toast } from 'react-toastify'
import Avatar from './Avatar'
import Button from './Button'
const ApplicantsPopup = ({ applicants, idea }: { applicants: IApplicationParticipant[]; idea: IIdeaProfileAcceptedView }) => {
  const [loading, setLoading] = useState<boolean[]>(applicants.map(() => false))
  const [display, setDisplay] = useState<boolean[]>(applicants.map(() => true))
  const [num, setNum] = useState<number>(0)
  const [acceptedRoles, setAcceptedRoles] = useState<Record<string, number>>({
    Frontend: 0,
    Backend: 0,
    'Full-Stack': 0,
    'UI/UX': 0,
  })
  const handleApplicantUpdate = async (applicant: IApplicationParticipant, i: number) => {
    setLoading(loading.map((_, index) => (index === i ? true : loading[index])))
    const updatedRow: IIdeaApplicantsTableTypes = {
      idea_id: idea.idea_id,
      profile_id: applicant.profile.profile_id,
      is_accepted: true,
      application_role: applicant.application_role,
    }
    const res = await updateIdeaApplicants(updatedRow)
    if (res) {
      setLoading(loading.map((_, index) => (index === i ? false : loading[index])))
      setDisplay(display.map((_, index) => (index === i ? false : display[index])))
      setAcceptedRoles({ ...acceptedRoles, [applicant.application_role]: acceptedRoles[applicant.application_role] + 1 })
      setNum(num + 1)
      toast.success('Applicant Accepted!')
    }
  }
  const handleCountAcceptedRoles = async () => {
    const res = await countAcceptedRoles(idea.idea_id)
    setAcceptedRoles(res)
  }
  useEffect(() => {
    handleCountAcceptedRoles()
  }, [])
  return (
    <div className='flex flex-col items-center p-4'>
      <h1 className='text-2xl font-bold'>Applicants</h1>
      <div className='bg-primary/15 rounded-lg p-3'>
        <h4 className='text-center font-semibold'>Dream Team</h4>
        <div className='grid grid-cols-2 gap-2 place-items-start'>
          <span className='font-semibold'>
            🎨
            <span className='text-primary'>
              {idea.front_end}
              <span className='text-foreground text-sm'>({acceptedRoles['Frontend']})</span>
            </span>{' '}
            Frontend
          </span>
          <span className='font-semibold'>
            👨‍💻
            <span className='text-primary'>
              {idea.back_end}
              <span className='text-foreground text-sm'>({acceptedRoles['Backend']})</span>
            </span>{' '}
            Backend
          </span>
          <span className='font-semibold'>
            📊
            <span className='text-primary'>
              {idea.full_stack}
              <span className='text-foreground text-sm'>({acceptedRoles['Full-Stack']})</span>
            </span>{' '}
            Full Stack
          </span>
          <span className='font-semibold'>
            🖼️
            <span className='text-primary'>
              {idea.ux_ui}
              <span className='text-foreground text-sm'>({acceptedRoles['UI/UX']})</span>
            </span>{' '}
            UI/UX
          </span>
        </div>
      </div>
      <div className='overflow-y-auto max-h-[400px]'>
        {applicants.map((applicant, i) => (
          <div key={i} className={`bg-foreground/15 m-2 p-4 rounded shadow flex items-center gap-5 justify-between ${!display[i] && 'hidden'}`}>
            <div className='flex gap-2'>
              <Avatar firstName={applicant.profile.first_name} lastName={applicant.profile.last_name} size={55} />
              <div className='flex flex-col justify-center'>
                <span className='text-sm font-semibold'>
                  {applicant.profile.first_name} {applicant.profile.last_name}
                </span>
                <span className='text-sm font-semibold text-foreground/70'>{applicant.application_role}</span>
              </div>
            </div>
            <div className='mt-2 flex justify-center space-x-2'>
              <a href={`/profile/${applicant.profile.profile_id}`} target='_blank'>
                <Button variant='secondary'>View Profile</Button>
              </a>
              <div onClick={() => handleApplicantUpdate(applicant, i)}>
                <Button variant='primary' disabled={loading[i]}>
                  {!loading[i] ? 'Accept' : <AiOutlineLoading className='animate-spin text-base' size={24} />}
                </Button>
              </div>
            </div>
          </div>
        ))}
        {applicants.length - num === 0 && (
          <div className='bg-foreground/15 mt-5 p-4 rounded shadow flex items-center justify-center flex-col max-w-[400px]'>
            <span className='text-lg font-semibold'>No Applicants Here!</span>
            <p className='text-center text-foreground/80'>Once there is an applicant for this idea it will show up here for you to accept!</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ApplicantsPopup
