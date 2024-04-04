import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import Button from './Button'
import Input from './Input'
import ShadowCard from './ShadowCard'

interface HomeSearchInputProps {
  handleSearch: () => void
}

const HomeSearchInput: React.FC<HomeSearchInputProps> = ({ handleSearch }) => {
  const [text, setText] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleSearch()
  }

  return (
    <ShadowCard className='p-3'>
      <form onSubmit={handleSubmit} className='flex gap-5'>
        <Input
          type='text'
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder='Search by idea title or description'
          className='w-full'
        />
        <Button variant='primary' onClick={handleSearch}>
          <FaSearch />
        </Button>
      </form>
    </ShadowCard>
  )
}

export default HomeSearchInput
