import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import Button from './Button'
import Input from './Input'
import ShadowCard from './ShadowCard'

interface HomeSearchInputProps {
  handleSearch: (term: string) => void
}

const HomeSearchInput: React.FC<HomeSearchInputProps> = ({ handleSearch }) => {
  const [text, setText] = useState('')

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
    </ShadowCard>
  )
}

export default HomeSearchInput
