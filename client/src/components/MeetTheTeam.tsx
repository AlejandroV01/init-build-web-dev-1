import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import React from 'react'
import AboutUsCard, { IAboutUsCard } from './AboutUsCard'
const MeetTheTeam = () => {
  const teamMembers: IAboutUsCard[] = [
    {
      userFirstName: 'Alejandro',
      userLastName: 'Vera',
      userSubtext: 'Lead Software Engineer',
      userGitHub: 'https://github.com/AlejandroV01',
      userLinkedIn: 'https://www.linkedin.com/in/alejandrovera09/',
      imageSrc: 'https://avatars.githubusercontent.com/u/91917536?v=4',
    },
    {
      userFirstName: 'Dabian',
      userLastName: 'Garnica',
      userSubtext: 'Co-Lead Software Engineer',
      userGitHub: 'https://github.com/dab1an',
      userLinkedIn: 'https://www.linkedin.com/in/dabian/',
      imageSrc:
        'https://media.licdn.com/dms/image/D4E03AQH_kvHSfhRGNg/profile-displayphoto-shrink_200_200/0/1708469883582?e=1717632000&v=beta&t=HxbOnfaT5YmkUIur5C5xltjSczXWUqms1me4JuVZfSU',
    },
    {
      userFirstName: 'Salomon',
      userLastName: 'Aduen',
      userSubtext: 'Full-Stack Engineer',
      userGitHub: 'https://github.com/salimaduen',
      userLinkedIn: 'https://www.linkedin.com/in/salomon-aduen',
      imageSrc: '',
    },
    {
      userFirstName: 'Kameron',
      userLastName: 'Harrison',
      userSubtext: 'Full-Stack Engineer',
      userGitHub: 'https://github.com/kameron-h',
      userLinkedIn: 'https://www.linkedin.com/in/kameron-h/',
      imageSrc:
        'https://media.licdn.com/dms/image/D4E03AQG_UIRgUJ_yFw/profile-displayphoto-shrink_800_800/0/1691523420394?e=1717632000&v=beta&t=jtMotesbzkA3Osgl-6ASNkq55NgUBDhiGqE3MXKRw14',
    },
    {
      userFirstName: 'Lorenzo',
      userLastName: 'Montero',
      userSubtext: 'Frontend Engineer',
      userGitHub: 'https://github.com/LoreMontero',
      userLinkedIn: 'https://www.linkedin.com/in/lorenzo-montero/',
      imageSrc: 'https://avatars.githubusercontent.com/u/54688379?u=e1cb369fd58f98eb06f50b40379a5e251706638d&v=4',
    },
    {
      userFirstName: 'Dabian',
      userLastName: 'Garnica',
      userSubtext: 'Co-Lead Software Engineer',
      userGitHub: 'https://github.com/dab1an',
      userLinkedIn: 'https://www.linkedin.com/in/dabian/',
      imageSrc:
        'https://media.licdn.com/dms/image/D4E03AQH_kvHSfhRGNg/profile-displayphoto-shrink_200_200/0/1708469883582?e=1717632000&v=beta&t=HxbOnfaT5YmkUIur5C5xltjSczXWUqms1me4JuVZfSU',
    },
    {
      userFirstName: 'Dabian',
      userLastName: 'Garnica',
      userSubtext: 'Co-Lead Software Engineer',
      userGitHub: 'https://github.com/dab1an',
      userLinkedIn: 'https://www.linkedin.com/in/dabian/',
      imageSrc:
        'https://media.licdn.com/dms/image/D4E03AQH_kvHSfhRGNg/profile-displayphoto-shrink_200_200/0/1708469883582?e=1717632000&v=beta&t=HxbOnfaT5YmkUIur5C5xltjSczXWUqms1me4JuVZfSU',
    },
    {
      userFirstName: 'Dabian',
      userLastName: 'Garnica',
      userSubtext: 'Co-Lead Software Engineer',
      userGitHub: 'https://github.com/dab1an',
      userLinkedIn: 'https://www.linkedin.com/in/dabian/',
      imageSrc:
        'https://media.licdn.com/dms/image/D4E03AQH_kvHSfhRGNg/profile-displayphoto-shrink_200_200/0/1708469883582?e=1717632000&v=beta&t=HxbOnfaT5YmkUIur5C5xltjSczXWUqms1me4JuVZfSU',
    },
    {
      userFirstName: 'Dabian',
      userLastName: 'Garnica',
      userSubtext: 'Co-Lead Software Engineer',
      userGitHub: 'https://github.com/dab1an',
      userLinkedIn: 'https://www.linkedin.com/in/dabian/',
      imageSrc:
        'https://media.licdn.com/dms/image/D4E03AQH_kvHSfhRGNg/profile-displayphoto-shrink_200_200/0/1708469883582?e=1717632000&v=beta&t=HxbOnfaT5YmkUIur5C5xltjSczXWUqms1me4JuVZfSU',
    },
    {
      userFirstName: 'Dabian',
      userLastName: 'Garnica',
      userSubtext: 'Co-Lead Software Engineer',
      userGitHub: 'https://github.com/dab1an',
      userLinkedIn: 'https://www.linkedin.com/in/dabian/',
      imageSrc:
        'https://media.licdn.com/dms/image/D4E03AQH_kvHSfhRGNg/profile-displayphoto-shrink_200_200/0/1708469883582?e=1717632000&v=beta&t=HxbOnfaT5YmkUIur5C5xltjSczXWUqms1me4JuVZfSU',
    },
    {
      userFirstName: 'Dabian',
      userLastName: 'Garnica',
      userSubtext: 'Co-Lead Software Engineer',
      userGitHub: 'https://github.com/dab1an',
      userLinkedIn: 'https://www.linkedin.com/in/dabian/',
      imageSrc:
        'https://media.licdn.com/dms/image/D4E03AQH_kvHSfhRGNg/profile-displayphoto-shrink_200_200/0/1708469883582?e=1717632000&v=beta&t=HxbOnfaT5YmkUIur5C5xltjSczXWUqms1me4JuVZfSU',
    },
    {
      userFirstName: 'Dabian',
      userLastName: 'Garnica',
      userSubtext: 'Co-Lead Software Engineer',
      userGitHub: 'https://github.com/dab1an',
      userLinkedIn: 'https://www.linkedin.com/in/dabian/',
      imageSrc:
        'https://media.licdn.com/dms/image/D4E03AQH_kvHSfhRGNg/profile-displayphoto-shrink_200_200/0/1708469883582?e=1717632000&v=beta&t=HxbOnfaT5YmkUIur5C5xltjSczXWUqms1me4JuVZfSU',
    },
    {
      userFirstName: 'Dabian',
      userLastName: 'Garnica',
      userSubtext: 'Co-Lead Software Engineer',
      userGitHub: 'https://github.com/dab1an',
      userLinkedIn: 'https://www.linkedin.com/in/dabian/',
      imageSrc:
        'https://media.licdn.com/dms/image/D4E03AQH_kvHSfhRGNg/profile-displayphoto-shrink_200_200/0/1708469883582?e=1717632000&v=beta&t=HxbOnfaT5YmkUIur5C5xltjSczXWUqms1me4JuVZfSU',
    },
    {
      userFirstName: 'Dabian',
      userLastName: 'Garnica',
      userSubtext: 'Co-Lead Software Engineer',
      userGitHub: 'https://github.com/dab1an',
      userLinkedIn: 'https://www.linkedin.com/in/dabian/',
      imageSrc:
        'https://media.licdn.com/dms/image/D4E03AQH_kvHSfhRGNg/profile-displayphoto-shrink_200_200/0/1708469883582?e=1717632000&v=beta&t=HxbOnfaT5YmkUIur5C5xltjSczXWUqms1me4JuVZfSU',
    },
  ]
  return (
    <div className='py-14 flex flex-col gap-10 container md:pl-20 md:pr-20'>
      <h2 className='text-primary font-bold text-center text-3xl'>Meet The Team</h2>
      <div className='flex gap-10 w-full flex-wrap justify-center'>
        <Carousel
          className='w-full '
          opts={{
            align: 'center',
          }}
        >
          <CarouselContent className='w-full'>
            {teamMembers.map((member, i) => {
              return (
                <CarouselItem className='sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5' key={i}>
                  <AboutUsCard
                    userFirstName={member.userFirstName}
                    userLastName={member.userLastName}
                    userSubtext={member.userSubtext}
                    userGitHub={member.userGitHub}
                    userLinkedIn={member.userLinkedIn}
                    imageSrc={member.imageSrc}
                  />
                </CarouselItem>
              )
            })}
          </CarouselContent>
          <CarouselPrevious className='ml-4' />
          <CarouselNext className='mr-4 ' />
        </Carousel>
      </div>
    </div>
  )
}

export default MeetTheTeam
