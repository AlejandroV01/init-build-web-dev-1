import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { useReduxSignOut } from '@/functions/reduxSignOut'
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
      <div className='flex gap-5 items-center'>
        {user.id ? (
          <Popover>
            <PopoverTrigger>
              {/* href={`/profile/${user.id}`} */}
              <Avatar firstName={user.first_name} lastName={user.last_name} size={45} />
            </PopoverTrigger>
            <PopoverContent className='w-fit flex flex-col items-start gap-2 pr-10'>
              <div className='font-semibold hover:underline cursor-pointer text-foreground/90'>My Profile</div>
              <div className='font-semibold hover:underline cursor-pointer text-foreground/90' onClick={useReduxSignOut}>
                Sign Out
              </div>
            </PopoverContent>
          </Popover>
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
    </div>
  )
}

export default Nav
