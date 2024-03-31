import supabase from "@/lib/supabaseClient";

const fetchEducation = async (profile_id: number) => {
    const {data: education, error} = await supabase
        .from('educations')
        .select('*')
        .eq('profile_id', profile_id);

    if (error) {
        console.error(error);
        return ;
    }

    return education.length > 0 ? education : null;
};


export default fetchEducation;
