import React from 'react'

export function Select({
  options,
  label,
  onChange,
}: {
  options: string[]
  label: string
  onChange: (selection: React.ChangeEvent<HTMLSelectElement>) => void
}) {
  return (
    <select name={label} id={label} onChange={onChange} className='p-2 bg-white shadow-[0_0_3.5px_1px_rgba(0,0,0,0.3)] rounded-lg w-[180px]]'>
      <option value={label}>{label}</option>
      {options.map(listItem => (
        <option value={listItem} key={listItem}>
          {listItem}
        </option>
      ))}
    </select>
  )
}
