import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
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
      userFirstName: 'Austin',
      userLastName: 'Houchens',
      userSubtext: 'Full-Stack Engineer',
      userGitHub: 'https://github.com/Austinh1512',
      userLinkedIn: 'https://www.linkedin.com/in/austin-houchens/',
      imageSrc: 'https://i.ibb.co/NWT8YMj/profile.png',
    },
    {
      userFirstName: 'Salomon',
      userLastName: 'Aduen',
      userSubtext: 'Full-Stack Engineer',
      userGitHub: 'https://github.com/salimaduen',
      userLinkedIn: 'https://www.linkedin.com/in/salomon-aduen',
      imageSrc:
        'https://images-ext-1.discordapp.net/external/CNyZd30BD2weQcnmMrGve1aGb1MTdCZOjzqENCQtLec/%3Fv%3D4/https/avatars.githubusercontent.com/u/15006051?format=webp',
    },
    {
      userFirstName: 'Linda',
      userLastName: 'Maali',
      userSubtext: 'Full-Stack Engineer',
      userGitHub: 'https://github.com/lindamaali',
      userLinkedIn: 'https://www.linkedin.com/in/lindamaali/',
      imageSrc:
        'https://media.licdn.com/dms/image/D4E03AQGeoS1Rcx5KsQ/profile-displayphoto-shrink_400_400/0/1700944770365?e=1717632000&v=beta&t=80Et44i6VKsmGpFrUmkRkoN95tPFmbXq-6cpDyEOKns',
    },
    {
      userFirstName: 'Zacharias',
      userLastName: 'Lafond',
      userSubtext: 'Full-Stack Engineer',
      userGitHub: 'https://github.com/Zachiderp',
      userLinkedIn: 'https://www.linkedin.com/in/zacharias-lafond/',
      imageSrc:
        'https://media.licdn.com/dms/image/C5603AQFN_IWrBjQeRg/profile-displayphoto-shrink_800_800/0/1655638723679?e=1717632000&v=beta&t=LWloB6K1tUilynuVPmlC0GESud3xN3tiwwPpSVWpc6I',
    },
    {
      userFirstName: 'Keren',
      userLastName: 'Rivera',
      userSubtext: 'Backend Engineer',
      userGitHub: 'https://github.com/KerenRivera1211',
      userLinkedIn: 'http://linkedin.com/in/keren-rivera-0b2217190/',
      imageSrc:
        'https://cdn.discordapp.com/attachments/1209248376718106666/1227425131840933949/IMG_0530_Original.jpg?ex=66285bbb&is=6615e6bb&hm=087c3ba4657695da653377d704bed42103b3bea5f5c1148117443722e85ad0a9&',
    },
    {
      userFirstName: 'Michael',
      userLastName: 'Duran',
      userSubtext: 'Frontend Engineer',
      userGitHub: 'https://github.com/duranmichael681',
      userLinkedIn: 'https://www.linkedin.com/in/michael-a-duran/',
      imageSrc:
        'https://media.licdn.com/dms/image/D4E03AQHNxQcFZKU_fw/profile-displayphoto-shrink_800_800/0/1708654578093?e=1718236800&v=beta&t=wkHuTlPLsr5pK0et-bmzpho4-mWpgHtETFb6oi9qeus',
    },
    {
      userFirstName: 'Angelica',
      userLastName: 'Moreno',
      userSubtext: 'Frontend Engineer',
      userGitHub: 'https://github.com/angelica-moreno',
      userLinkedIn: 'https://www.linkedin.com/in/angelica-moreno-23a724235/',
      imageSrc:
        'https://media.licdn.com/dms/image/D4E03AQECBrAbxMwq_Q/profile-displayphoto-shrink_800_800/0/1708620095256?e=1718236800&v=beta&t=j_CQGYOYPrvTq5JR9BvrQPkVWlG-YO6mqtUmxTIsZEY',
    },
    {
      userFirstName: 'Joshua',
      userLastName: 'Galvez',
      userSubtext: 'Full-Stack Engineer',
      userGitHub: 'https://github.com/Mancki21',
      userLinkedIn: 'https://www.linkedin.com/in/joshua-galvez-565683211/',
      imageSrc:
        'https://media.licdn.com/dms/image/C5603AQE8Ek9rrgMh8g/profile-displayphoto-shrink_800_800/0/1662870224873?e=1718236800&v=beta&t=CUIb5nU7_8WrbuPRilZU1EQfGQ6QiIEGyEDLqo7EuLg',
    },
    {
      userFirstName: 'Christian',
      userLastName: 'Mendez',
      userSubtext: 'Frontend Engineer',
      userGitHub: 'https://github.com/cmendzx',
      userLinkedIn: 'https://www.linkedin.com/in/christian-mendez-9b8207250/',
      imageSrc:
        'https://media.licdn.com/dms/image/D4E03AQGSuL3Q-7YMEw/profile-displayphoto-shrink_800_800/0/1679258635080?e=1718236800&v=beta&t=y18KSHkXoylhLyyWRXqlPeghGEylE3blRSgWcEdXeK0',
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
      userFirstName: 'Harrison',
      userLastName: 'Perez',
      userSubtext: 'Frontend Engineer',
      userGitHub: 'https://github.com/Harrisonp13',
      userLinkedIn: 'https://www.linkedin.com/in/harrison-perez-215088214/',
      imageSrc:
        'https://media.licdn.com/dms/image/D4E03AQGyyHxWcZIjDQ/profile-displayphoto-shrink_800_800/0/1707286833086?e=1718236800&v=beta&t=Ab6KiXsaNs3L9lneP3yK1SRhWIrqVu865gGZCDlSTks',
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
      userFirstName: 'Ismail',
      userLastName: 'Abousalem',
      userSubtext: 'Frontend Engineer',
      userGitHub: 'https://github.com/IsmailAbousalem',
      userLinkedIn: 'https://www.linkedin.com/in/ismailabousalem/',
      imageSrc:
        'https://media.discordapp.net/attachments/1208259913848061992/1225612295091257396/IsmailsHeadshot.png?ex=6621c365&is=660f4e65&hm=5e6988c20983ec349b160e52657686bc789c6709c8687c5c705f81f29e8da3d7&=&format=webp&quality=lossless',
    },
    {
      userFirstName: 'Felix',
      userLastName: 'Arbucias',
      userSubtext: 'Frontend Engineer',
      userGitHub: 'https://github.com/felixArbucias',
      userLinkedIn: 'https://www.linkedin.com/in/alejandrovera09/',
      imageSrc: `https://api.dicebear.com/8.x/initials/svg?seed=FelixArbucias&backgroundColor=00897b,00acc1,039be5,1e88e5,3949ab,43a047,5e35b1,7cb342,8e24aa,c0ca33,d81b60,e53935,f4511e,fb8c00,fdd835,ffb300,c0aede,d1d4f9,b6e3f4&backgroundType=solid,gradientLinear&backgroundRotation=0,360,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,300,310,320,330,340,350`,
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
