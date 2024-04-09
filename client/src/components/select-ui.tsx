import React from 'react'

export function Select({
  options,
  label,
  onChange,
  className,
}: {
  options: string[]
  label: string
  onChange: (selection: React.ChangeEvent<HTMLSelectElement>) => void
  className?: string
}) {
  return (
    <select
      name={label}
      id={label}
      onChange={onChange}
      className={`${className} px-2 py-0.5 shadow-[0_0_3.5px_1px_rgba(0,0,0,0.3)] rounded-lg bg-background border-foreground/20 border`}
    >
      <option value={label}>{label}</option>
      {options.map(listItem => (
        <option value={listItem} key={listItem}>
          {listItem}
        </option>
      ))}
    </select>
  )
}
