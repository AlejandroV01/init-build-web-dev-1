import supabase from "@/lib/supabaseClient"

const profileQuery = async (profileID: number) => {
    const { data: completeProfileInfo, error } = await supabase
        .from("profiles")
        .select("profile_id, first_name, last_name, school, major, email, location, " + 
        "experiences (*), educations(*), projects(*)")
        if (completeProfileInfo) {
            return completeProfileInfo[profileID]
        } else {
            console.error(error)
            return null
        }
    }
    
export default profileQuery