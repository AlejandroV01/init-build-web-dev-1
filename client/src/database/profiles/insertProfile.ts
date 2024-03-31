import supabase from '@/lib/supabaseClient'

// CREATE TABLE profiles (
//     profile_id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
//     first_name TEXT NOT NULL,
//     last_name TEXT NOT NULL,
//     email TEXT UNIQUE NOT NULL,
//     school TEXT NOT NULL,
//     major TEXT NOT NULL,
//     location TEXT NOT NULL,
//     linkedin_link TEXT,
//     github_link TEXT,
//     portfolio_link TEXT,
//     skills TEXT[],
//     languages TEXT[],
//     created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
//     );
interface IProfileCreate {
    firstName: string
    lastName: string
    email: string
    school: string
    major: string
    location: string
    linkedinLink: string
    githubLink: string
    portfolioLink: string
    skills: string[]
    languages: string[]
 }
const insertProfile = async (profile: IProfileCreate) => {
    const { data, error } = await supabase
        .from('profiles')
        .insert([
            {
                first_name: profile.firstName,
                last_name: profile.lastName,
                email: profile.email,
                school: profile.school,
                major: profile.major,
                location: profile.location,
                linkedin_link: profile.linkedinLink,
                github_link: profile.githubLink,
                portfolio_link: profile.portfolioLink,
                skills: profile.skills,
                languages: profile.languages,
            },
        ])
        .select()
    if (data) {
        console.log(data)
        return true
    } else {
        console.error(error)
        return false
    }
}

export default insertProfile