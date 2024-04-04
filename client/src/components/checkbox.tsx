export default function CheckboxComponent({ checked, onChange }: { checked: boolean; onChange: (value: boolean) => void }) {
  return (
    <div className='inline-flex items-center relative'>
      <input
        type='checkbox'
        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border-2 border-primary/35 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-primary checked:bg-primary checked:before:bg-primary hover:before:opacity-10"
        id='purple'
        onChange={() => onChange(!checked)}
        checked={checked}
      />
      <span
        className={` absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100`}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='lucide lucide-circle-check'
        >
          <circle cx='12' cy='12' r='10' />
          <path d='m9 12 2 2 4-4' />
        </svg>
      </span>
    </div>
  )
}

/**        <>

<ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
    <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
        <div className="flex items-center ps-3">
            <input id="vue-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label htmlFor="vue-checkbox" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default checkbox</label>
        </div>
    </li>
    <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
    <div className="flex items-center">
        <label 
            className="relative flex items-center p-3 rounded-full cursor-pointer" 
            htmlFor="purple">
            <input 
                type="checkbox" 
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border-2 border-purple-500/100 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-purple-500 checked:bg-purple-500 checked:before:bg-purple-500 hover:before:opacity-0"
                id="purple"/>
                
                <span
                className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                    {/*This is checked icon*0/}
                    <svg xmlns="http://www.w3.org/2000/svg" 
                        className="h-3.5 w-3.5" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                        stroke="currentColor" 
                        stroke-width="1">
                        <path fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd">
                        </path>
                    </svg>
                </span>
        </label>
        <label>Keren's purple checkbox</label> 
        </div>
        </li>
    </ul>
    </> */
