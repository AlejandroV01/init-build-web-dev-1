import supabase from "@/lib/supabaseClient";
import { IEducationUpdateTypes } from "@/types";

const updateEducation = async (education: IEducationUpdateTypes) => {
    const { error } = await supabase
        .from('educations')
        .update({
            school: education.school,
            major: education.major,
            start_date: education.start_date,
            end_date: education.end_date
        })
        .eq('education_id', education.education_id);

    if (error) {
        console.error(error);
        return false;
    }


    return true;
};

export default updateEducation;
