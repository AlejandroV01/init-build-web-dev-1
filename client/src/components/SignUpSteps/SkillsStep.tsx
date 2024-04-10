import { updateSkillsForm } from '@/database/profiles/updateProfileByEmail'
import { useAppSelector } from '@/store/hooks'
import { useState } from 'react'
import Button from '../Button'
import CardBox from '../CardBox'
import SkillsInfoForm from '../SkillsInfoForm'

interface Props {
  handleStepSubmit: () => void
}

const SkillsStep: React.FC<Props> = ({ handleStepSubmit }) => {
  const user = useAppSelector(state => state.auth)

  const handleSubmit = async () => {
    if (!user.profile_id) {
      console.error('Profile not found')
      return
    }
    const data = {
      skills: skills,
      profile_id: user.profile_id,
    }
    const res = await updateSkillsForm(data)
    console.log(res)
    if (res) handleStepSubmit()
    else console.error('Error updating skills')
  }
  const [skills, setSkills] = useState<string[]>([])
  const [duplicate, setDuplicate] = useState<boolean>(false)
  const handleSkillChange = (val: string) => {
    if (skills.includes(val)) {
      setDuplicate(true)
      return
    }
    setDuplicate(false)
    setSkills([...skills, val])
  }
  const handleSkillRemove = (index: number) => {
    setSkills(skills.filter((_, i) => i !== index))
  }
  return (
    <CardBox>
      <div className='flex flex-col gap-2 max-h-[600px] overflow-y-auto max-w-[600px] sm:w-[600px]'>
        <h1 className='font-bold text-3xl'>Skills</h1>
        <span className='text-sm text-slate-500'>Enter skills that you have or enjoy working with!</span>
        {duplicate && <span className='text-red-500'>Oops! You entered a duplicate skill, try again!</span>}
        <SkillsInfoForm skills={skills} handleSkillChange={handleSkillChange} handleSkillRemove={handleSkillRemove} />
      </div>
      <div className='flex flex-col items-center'>
        <Button variant='primary' className='w-1/2 py-2.5 mt-5' onClick={handleSubmit}>
          Next Step
        </Button>
        <Button variant='secondary' className='w-1/2 py-2.5 !bg-transparent !text-foreground/80' onClick={handleStepSubmit}>
          Skip this step
        </Button>
      </div>
    </CardBox>
  )
}

export default SkillsStep
