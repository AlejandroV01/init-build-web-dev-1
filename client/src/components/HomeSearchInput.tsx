import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import Button from './Button'
import { default as Input, default as Input } from './Input'
import ShadowCard from './ShadowCard'
import { Select } from './select-ui'
interface HomeSearchInputProps {
  handleSearch: (term: string) => void
}

const HomeSearchInput: React.FC<HomeSearchInputProps> = ({ handleSearch }) => {
  const [text, setText] = useState('')
  const [jobType, setJobType] = useState('')
  const [tech, setTech] = useState<string[]>([])
  const [input, setInput] = useState<string>('')
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleSearch(text)
  }

  return (
    <ShadowCard className='p-3 w-full max-w-[800px]'>
      <form onSubmit={handleSubmit} className='flex gap-5'>
        <Input
          type='text'
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder='Search by idea title or description'
          className='w-full'
        />
        <Button variant='primary' type='submit'>
          <FaSearch />
        </Button>
      </form>
      <Select label='Job Type' options={['Frontend', 'Backend', 'Full-Stack', 'UI/UX']} />
    </ShadowCard>
  )
}

export default HomeSearchInput
