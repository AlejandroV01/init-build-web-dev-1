import supabase from "@/lib/supabaseClient";

const deleteIdeaSaves = async (profileId: number) => {
    const { data, error } = await supabase
    .from('idea_saves')
    .delete()
    .eq('profile_id', profileId)

    if (data) {
        console.log(data)
        return true
      } else {
        console.error(error)
        return false
      }
}

export default deleteIdeaSaves