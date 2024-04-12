import fetchArrayOfTech from '@/database/ideas/fetchArrayOfTech'
import { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { MultiSelect } from 'react-multi-select-component'
import Button from './Button'
import Input from './Input'
import ShadowCard from './ShadowCard'
import { Select } from './select-ui'
interface HomeSearchInputProps {
  handleSearch: (term: string, jobType: string, tech: string[]) => void
}

const HomeSearchInput: React.FC<HomeSearchInputProps> = ({ handleSearch }) => {
  const [jobType, setJobType] = useState('')
  const [tech, setTech] = useState<{ value: string; label: string }[]>([])
  const [input, setInput] = useState<string>('')
  const [techOptions, setTechOptions] = useState<string[]>([])
  const formattedTechOptions = techOptions.map(tech => ({ value: tech, label: tech }))
  useEffect(() => {
    const fetchTech = async () => {
      const res = await fetchArrayOfTech()
      setTechOptions(res)
    }
    fetchTech()
  }, [])
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formattedTech = tech.map(tech => tech.value)
    handleSearch(input, jobType, formattedTech)
  }

  return (
    <ShadowCard className='p-3 w-full max-w-[800px] flex flex-col gap-2'>
      <form onSubmit={handleSubmit} className='flex gap-5'>
        <Input
          type='text'
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder='Search by idea title or description'
          className='w-full'
        />
        <Button variant='primary' type='submit'>
          <FaSearch />
        </Button>
      </form>
      <div className='flex gap-3'>
        <Select
          label='Job Type'
          options={['Frontend', 'Backend', 'Full-Stack', 'UI/UX']}
          onChange={e => setJobType(e.target.value)}
          className='w-[150px] text-sm'
        />
        <MultiSelect
          options={formattedTechOptions}
          labelledBy='Select'
          value={tech}
          onChange={setTech}
          className='text-sm rounded-lg w-[150px] [&>*]:[&>*]:[&>*]:[&>*]:[&>*]:bg-white [&>*]:[&>*]:[&>*]:[&>*]:[&>*]:text-black [&_svg]:dark:!stroke-white  [&>*]:[&>*]:bg-background [&>*]:!border-none [&>*]:!rounded-lg [&>*]:[&>*]:rounded-lg border border-foreground/20 shadow-[0_0_3.5px_1px_rgba(0,0,0,0.3)] '
        />
      </div>
    </ShadowCard>
  )
}

export default HomeSearchInput
