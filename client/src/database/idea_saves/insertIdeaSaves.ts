import supabase from "@/lib/supabaseClient";

async function insertIdeaSaves(profile_id: number, idea_id: number): Promise<void> {
    try {
        
        const { data, error } = await supabase.from('idea_saves').insert([{ profile_id, idea_id }]);

        if (error) {
            throw error;
        }

        console.log('Idea Saves sucessfully inserted:', data);
        
    } 
    catch (error) {
      console.error('ERROR: Idea Saves not inserted', error);
  }
}

export default insertIdeaSaves;
