import supabase from '@/lib/supabaseClient'

const fetchArrayOfTech = async () => {
  try {
    const { data, error } = await supabase.from('ideas').select('tech_stack')

    if (error) {
      throw error
    }

    // Extract tech_stack arrays from each row and flatten them
    const allTechStacks = data.map(row => row.tech_stack).flat()

    // Remove duplicates from the flattened array
    const uniqueTechStacks = [...new Set(allTechStacks)]

    return uniqueTechStacks
  } catch (error) {
    console.error('Error fetching ideas:', error)
    return []
  }
}

export default fetchArrayOfTech
