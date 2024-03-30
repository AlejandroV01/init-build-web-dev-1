import { useAppSelector } from '@/store/hooks'
import Avatar from './Avatar'
import Button from './Button'
import { ModeToggle } from './mode-toggle'
const Nav = () => {
  const user = useAppSelector(state => state.auth)
  return (
    <div className='flex justify-between container items-center h-[60px]'>
      <a href='/'>
        <h2 className='font-bold text-xl'>Devbuds</h2>
      </a>
      <ul className='flex gap-5 change [&>*]:hover:cursor-pointer font-medium'>
        <li>
          <a href='/projects'>Projects</a>
        </li>
        <li>
          <a href='/about'>About</a>
        </li>
      </ul>
      {user.id ? (
        <a href={`/profile/${user.id}`}>
          <Avatar firstName={user.first_name} lastName={user.last_name} size={45} />
        </a>
      ) : (
        <div className='items-center flex gap-5'>
          <a href='/login'>
            <Button variant='secondary'>Log in</Button>
          </a>
          <a href='/signup'>
            <Button variant='primary'>Sign up</Button>
          </a>
        </div>
      )}
      <ModeToggle />
    </div>
  )
}

export default Nav
