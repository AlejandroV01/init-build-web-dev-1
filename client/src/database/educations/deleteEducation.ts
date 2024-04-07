import supabase from "@/lib/supabaseClient";


const deleteEducation = async (education_id: number) => {
    const { error } = await supabase
        .from('education')
        .delete()
        .eq('education_id', education_id);

    if (error) {
        console.error(error);
        return false;
    }

    return true;

};


export default deleteEducation;