import supabase from '@/lib/supabaseClient'
const fetchIdeas = async () => {
  const { data: ideas, error } = await supabase.from('ideas').select('*')
  if (ideas) {
    return ideas
  } else {
    console.error(error)
    return []
  }
}

export default fetchIdeas