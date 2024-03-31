import fetchProfileByID from '@/database/profiles/fetchProfileByID'
import fetchExperiences from '@/database/experiences/fetchExperiences'
import fetchEducation from '@/database/educations/fetchEducation'
import { useAppSelector } from '@/store/hooks'
import React, { useEffect, useState } from 'react'
import Avatar from '../Avatar'
import EducationCard from '../EducationCard'
import ExperienceCard from '../ExperienceCard'
import PortfolioCard from '../PortfolioCard'
import ProfileInfoCard from '../ProfileInfoCard'
import ProfileProjectCard from '../ProfileProjectCard'
import { IProfileTableTypes, IExperienceTableTypes, IEducationTableTypes } from '@/types'


const experiencess = [
  {companyLogo: 'LOGO', companyTitle: 'SDE', companyName: 'Amazon', companyLocation: 'Miami', startDate: 'May 2024', endDate: 'current', description: 'Sample description'}
];

const educationss = [
  {schoolLogo: 'LOGO', schoolName: 'FIU', schoolMajor: 'CS', startDate: '2022', endDate: '2024'}
];

const projects = [
  {projectName: 'project1', hackathonName: 'mmama', projectDate: '2022', description: 'Sample description'}
];


interface formattedExperience {
  companyLogo: string;
  companyTitle: string;
  companyName: string;
  companyLocation: string;
  startDate: string;
  endDate: string;
  description: string | null;
}

interface formattedEducation {
  schoolLogo: string;
  schoolName: string;
  schoolMajor: string;
  startDate: string;
  endDate: string;
}

const ProfileTab = () => {
  const user = useAppSelector(state => state.auth)
  const [ profileData, setProfileData ] = useState<IProfileTableTypes>();
  const [ experiences, setExperiences ] = useState<IExperienceTableTypes[]>([]);
  const [ educations, setEducations ] = useState<IEducationTableTypes[]>([]);
  //console.log('user id: ', user)

  useEffect( () => {
    async function getData() {
      if (typeof(user.id) === 'number') {
        const userData = await fetchProfileByID(user.id);
        const experienceData = await fetchExperiences(user.id);
        const educationData = await fetchEducation(user.id);

        if (userData) {
          setProfileData(userData);
        }

        if (experienceData) {
          console.log(experienceData);
          setExperiences(experienceData);
        }
        
        if (educationData) {
          setEducations(educationData);
        }

      }
    }
    getData();
  }, []);

  const createAvatar = () => {
    if (profileData) {
      return (
        <div>
          <Avatar firstName={profileData.first_name} lastName={profileData.last_name}/>
        </div>
      )
    }
  };

  const createExperienceCard = () => {
    if (experiences) {
      const formattedExperiences: formattedExperience[] = [];
      experiences.map( (experience) => (
        formattedExperiences.push({
          companyLogo: experience.company,
          companyTitle: experience.title,
          companyName: experience.company,
          companyLocation: 'Default',
          startDate: experience.start_date,
          endDate: experience.end_date,
          description: experience.description
      })));
      
      // fix type of description It can't be NULL
      return (
        <div>
          <ExperienceCard experiences={formattedExperiences}/>
        </div>
      )
    }
  };


  const createEducationCard = () => {
    if (educations) {
      const formattedEducation: formattedEducation[] = [];
      educations.map( (education) => (
        formattedEducation.push({
        schoolLogo: education.school,
        schoolName: education.school,
        schoolMajor: education.major,
        startDate: education.start_date,
        endDate: education.end_date
      })));
      return (
        <div>
          <EducationCard educations={formattedEducation}/>
        </div>
      );
    }
  };

  if (profileData) {
    return (
      <div className='w-full bg-orange-500 h-[2000px]'>
      <ProfileInfoCard userFirstName={profileData.first_name} userLastName={profileData.last_name} userSchool={profileData.school} userPhone='123123' userEmail={profileData.email} userMajor={profileData.major}/>
      <ExperienceCard experiences={experiencess} />
      <EducationCard educations={educationss}/>
      <ProfileProjectCard projects={projects}/>
      <PortfolioCard />
    </div>)
  ;
  }
  
  /**
   * Navigate to localhost:5167/dashboard to view this file
   * Order of the components if the following
   * 1. Avatar
   * 2. ProfileInfoCard
   * 3. ExperienceCard
   * 4. EducationCard
   * 5. ProfileProjectCard
   * 6. PortfolioCard
   * Use the fetchProfileByID function to get the user's profile
   * I made it so that in this branch the user.id is default to 1 which is
   * a valid user id in the database
   * Do not worry about the Skills Card, it is still in development
   * If you have any questions, please ask!
   */
  return (
    <div className='w-full bg-orange-500 h-[2000px]'>
      <h1>Profile Tab</h1>
      {createAvatar()}
      {createExperienceCard()}
      {createEducationCard()}
    </div>
  )
}

export default ProfileTab
