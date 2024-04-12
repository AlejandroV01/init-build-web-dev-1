import deleteEducation from '@/database/educations/deleteEducation'
import deleteExperience from '@/database/experiences/deleteExperience'
import profileQuery from '@/database/profiles/profileQuery'
import { updateSkillsForm } from '@/database/profiles/updateProfileByEmail'
import deleteProject from '@/database/projects/deleteProject'
import supabase from '@/lib/supabaseClient'
import { useAppSelector } from '@/store/hooks'
import { IEducationTableTypes, IExperienceTableTypes, IProjectTableTypes } from '@/types'
import { useEffect, useState } from 'react'
import { FaRegFileAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Avatar from '../Avatar'
import Button from '../Button'
import EducationCard from '../EducationCard'
import ExperienceCard from '../ExperienceCard'
import FileDrop from '../FileDrop'
import PortfolioCard from '../PortfolioCard'
import ProfileInfoCard from '../ProfileInfoCard'
import ProfileProjectCard from '../ProfileProjectCard'
import SkillCard from '../SkillCard'
import ProfileLoading from '../ui/ProfileLoading'
export interface IFileObject {
  name: string
  id: string
  updated_at: string
  created_at: string
  last_accessed_at: string
  metadata: {
    eTag: string
    size: number
    mimetype: string
    cacheControl: string
    lastModified: string
    contentLength: number
    httpStatusCode: number
  }
}
interface formattedExperience {
  companyLogo: string
  companyTitle: string
  companyName: string
  startDate: string
  endDate: string
  description: string
  experience_id: string
}

interface formattedEducation {
  schoolLogo: string
  schoolName: string
  schoolMajor: string
  startDate: string
  endDate: string
  education_id: string
}

interface formattedProject {
  projectName: string
  positionTitle: string
  projectStartDate: string
  projectEndDate: string
  description: string
  project_id: string
}

export interface IFullProfile {
  educations: IEducationTableTypes[]
  experiences: IExperienceTableTypes[]
  projects: IProjectTableTypes[]
  email: string
  first_name: string
  last_name: string
  location: string
  major: string
  profile_id: number
  school: string
  skills: string[]
  github_link: string
  linkedin_link: string
  portfolio_link: string
}
const ProfileTab = ({ userId = null }: { userId: number | null }) => {
  const reduxId = useAppSelector(state => state.auth).profile_id
  const finalUserId = userId || reduxId
  const isYourProfile = userId === null
  const [isLoading, setIsLoading] = useState(true)
  const [fullProfile, setFullProfile] = useState<IFullProfile | null>(null)
  const [resume, setResume] = useState<IFileObject | null>(null)
  const user = useAppSelector(state => state.auth)
  useEffect(() => {
    async function getData() {
      if (!finalUserId) return
      const res = await profileQuery(finalUserId)
      // @ts-expect-error error in genericStringError
      setFullProfile(res?.fullProfile)
      // @ts-expect-error error in genericStringError
      setResume(res?.resume)
      console.log(res?.resume)
      setIsLoading(false)
    }
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  if (isLoading) return <ProfileLoading />
  const createProfileInfoCard = () => {
    if (fullProfile) {
      return (
        <div>
          <ProfileInfoCard
            userFirstName={fullProfile.first_name}
            userLastName={fullProfile.last_name}
            userSchool={fullProfile.school}
            userLocation={fullProfile.location}
            userEmail={fullProfile.email}
            userMajor={fullProfile.major}
            isYourProfile={isYourProfile}
          />
        </div>
      )
    }
  }

  const createAvatar = () => {
    if (fullProfile) {
      return (
        <div>
          <Avatar firstName={fullProfile.first_name} lastName={fullProfile.last_name} className='w-full aspect-square' />
        </div>
      )
    }
  }

  const createExperienceCard = () => {
    if (fullProfile && fullProfile.experiences) {
      const formattedExperiences: formattedExperience[] = []
      // format experience data to a format acceptable for Experience Card
      fullProfile.experiences.map(experience =>
        formattedExperiences.push({
          companyLogo: experience.company,
          companyTitle: experience.title,
          companyName: experience.company,
          startDate: experience.start_date,
          endDate: experience.end_date,
          description: experience.description,
          experience_id: experience.experience_id || '',
        })
      )

      // fix type of description It can't be NULL
      return (
        <div>
          <ExperienceCard experiences={formattedExperiences} isYourProfile={isYourProfile} removeExperience={removeExperience} />
        </div>
      )
    }
  }

  const createEducationCard = () => {
    if (fullProfile && fullProfile.educations) {
      const formattedEducation: formattedEducation[] = []
      // Format education to be acceptable for EducationCard
      fullProfile.educations.map(education =>
        formattedEducation.push({
          schoolLogo: education.school,
          schoolName: education.school,
          schoolMajor: education.major,
          startDate: education.start_date,
          endDate: education.end_date,
          education_id: education.education_id || '',
        })
      )
      return (
        <div>
          <EducationCard educations={formattedEducation} isYourProfile={isYourProfile} removeEducation={removeEducation} />
        </div>
      )
    }
  }

  const createProjectCard = () => {
    if (fullProfile && fullProfile.projects) {
      const formattedProjects: formattedProject[] = []
      // Format projects to be acceptable by Project Card
      fullProfile.projects.map(project =>
        formattedProjects.push({
          projectName: project.project_name,
          positionTitle: project.position_title,
          projectStartDate: project.start_date,
          projectEndDate: project.end_date,
          description: project.description,
          project_id: project.project_id || '',
        })
      )
      // Fix type of description, it can't be NULL ?
      return (
        <div>
          <ProfileProjectCard projects={formattedProjects} isYourProfile={isYourProfile} removeProject={removeProject} />
        </div>
      )
    }
  }

  const CreateSkillCard = () => {
    const [allSkills, setAllSkills] = useState<string[]>(fullProfile ? fullProfile.skills : [])
    const handleRemoveSkill = (skill: string) => {
      console.log(allSkills)
      const newSkills = allSkills.filter(s => s !== skill)
      console.log(newSkills)
      setAllSkills(newSkills)
    }
    const handleSkillEnter = (val: string) => {
      if (val === '') return
      if (allSkills.includes(val)) return
      setAllSkills([...allSkills, val])
    }
    const handleFinishEditing = async () => {
      if (!finalUserId) return
      const data = {
        skills: allSkills,
        profile_id: finalUserId,
      }
      const res = await updateSkillsForm(data)
      if (res) {
        toast.success('Skills updated')
      } else {
        toast.error('Failed to update skills')
      }
    }
    const handleCancelEditing = () => {
      setAllSkills(fullProfile ? fullProfile.skills : [])
    }
    if (fullProfile && fullProfile.skills) {
      return (
        <div>
          <SkillCard
            skills={allSkills}
            handleCancelEditing={handleCancelEditing}
            onSkillEnter={handleSkillEnter}
            handleRemoveSkill={handleRemoveSkill}
            onFinishEditing={handleFinishEditing}
            isYourProfile={isYourProfile}
          />
        </div>
      )
    }
  }

  const CreateResumeCard = () => {
    function formatDate(isoDateString: string) {
      const date = new Date(isoDateString)
      const month = date.getUTCMonth() + 1
      const day = date.getUTCDate()
      const year = date.getUTCFullYear()

      const formattedDate = `${month}/${day}/${year}`
      return formattedDate
    }
    const navigate = useNavigate()
    const [file, setFile] = useState<File | null>(null)
    const uploadResume = async () => {
      if (!file) return
      const { data, error } = await supabase.storage.from('resumes').upload(user.profile_id + '/' + 'resume-file', file)
      if (data) {
        toast.success('Resume uploaded')
        navigate(0)
        return data
      } else {
        toast.error('Failed to upload resume')
        console.log('error', error)
      }
    }
    if (!resume)
      return (
        <div className='p-5 flex flex-col gap-2 rounded-lg bg-foreground/5 shadow-lg dark:border dark:border-foreground/20'>
          {isYourProfile ? (
            <div className='bg-primary/20 p-4 rounded-lg flex flex-col gap-2'>
              <div className='flex flex-col'>
                <h3 className='text-lg font-semibold'>No resume found</h3>
                <p>Enter a resume here to share!</p>
              </div>
              <FileDrop handleFileUpload={setFile} />
              <Button onClick={uploadResume} disabled={!file} className={`w-full ${!file && 'cursor-not-allowed'}`}>
                Upload
              </Button>
            </div>
          ) : (
            <div className='bg-primary/20 p-4 rounded-lg flex flex-col gap-2'>
              <div className='flex flex-col'>
                <h3 className='text-lg font-semibold'>No resume found</h3>
                <p>Tell {fullProfile?.first_name} to enter a resume!</p>
              </div>
            </div>
          )}
        </div>
      )
    return (
      <div className='p-5 flex flex-col gap-2 rounded-lg bg-foreground/5 shadow-lg dark:border dark:border-foreground/20 mt-4'>
        <div className='flex gap-4'>
          <div className='w-[80px] h-[80px] flex items-center justify-center bg-primary rounded-lg'>
            <FaRegFileAlt size={50} color='white' />
          </div>
          <div className='flex flex-col'>
            <a
              href={import.meta.env.VITE_SUPABASE_URL + '/storage/v1/object/public/resumes/' + fullProfile?.profile_id + '/' + resume.name}
              target='_blank'
              className='font-extrabold text-xl underline'
            >
              Resume
            </a>
            <a
              href={import.meta.env.VITE_SUPABASE_URL + '/storage/v1/object/public/resumes/' + fullProfile?.profile_id + '/' + resume.name}
              target='_blank'
              className='underline '
            >
              View resume last uploaded: {formatDate(resume.created_at)}
            </a>
          </div>
        </div>
      </div>
    )
  }
  if (!fullProfile) return <div>Profile not found</div>

  const removeEducation = async (education_id: string) => {
    const res = await deleteEducation(education_id)
    if (res) {
      toast.success('Education removed')
      fullProfile.educations = fullProfile.educations.filter(edu => edu.education_id !== education_id)
    } else {
      toast.error('Failed to remove education')
    }
  }
  const removeExperience = async (experience_id: string) => {
    const res = await deleteExperience(experience_id)
    if (res) {
      toast.success('Experience removed')
      fullProfile.experiences = fullProfile.experiences.filter(exp => exp.experience_id !== experience_id)
    } else {
      toast.error('Failed to remove experience')
    }
  }
  const removeProject = async (project_id: string) => {
    const res = await deleteProject(project_id)
    if (res) {
      toast.success('Project removed')
      fullProfile.projects = fullProfile.projects.filter(project => project.project_id !== project_id)
    } else {
      toast.error('Failed to remove project')
    }
  }

  return (
    <div className='flex justify-center w-full  lg:ml-0'>
      <div className='w-full lg:w-[80%] flex flex-col items-center'>
        <div className='w-full p-5 flex flex-col lg:flex-row items-center gap-3 rounded-lg bg-foreground/5 dark:border dark:border-foreground/20 shadow-lg'>
          <div className='w-[20%]'>{createAvatar()}</div>
          <div>{createProfileInfoCard()}</div>
        </div>
        <div className='w-full flex flex-col gap-4'>
          <CreateResumeCard />
          <div>{createExperienceCard()}</div>
          <div>{createEducationCard()}</div>
          <div>{createProjectCard()}</div>
          <CreateSkillCard />
          <div>
            <PortfolioCard fullProfile={fullProfile} isYourProfile={isYourProfile} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileTab
