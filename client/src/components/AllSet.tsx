import { useState } from 'react'
import { FaCircleCheck } from 'react-icons/fa6'
import Button from './Button'
/**
 * using props in react
 * giving props types in TypeScript
 * ternary operator inside JSX
 *
 */
export const AllSet = () => {
  const name = 'John'
  return (
    <div className='bg-red-500 p-10 text-violet-500'>
      <h1>The File AllSet</h1>
      <p>{name}</p>
      <FaCircleCheck />
    </div>
  )
}

export default AllSet
