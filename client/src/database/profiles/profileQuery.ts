import { QueryResult, QueryData, QueryError } from '@supabase/supabase-js'
import supabase from "@/lib/supabaseClient"
import fetchEducation from '@/database/educations/fetchEducation'
import fetchExperiences from '@/database/experiences/fetchExperiences'
import fetchProfileByID from '@/database/profiles/fetchProfileByID'
import getProjects from '@/database/projects/getProjects'
import { IEducationTableTypes, IExperienceTableTypes, IProfileTableTypes, IProjectTableTypes } from '@/types'


const combiningEverything = async (profileID: number) => {
    const { data: completeProfileInfo, error } = await supabase
        .from("profiles")
        .select("*, experiences (*), educations(*), projects(*)")
        if (completeProfileInfo) {
            return completeProfileInfo
        } else {
            console.error(error)
            return null
        }
    }
export default combiningEverything