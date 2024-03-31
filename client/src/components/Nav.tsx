import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { useReduxSignOut } from '@/functions/reduxSignOut'
import supabase from '@/lib/supabaseClient'
import { removeProfile } from '@/store/auth/auth.slice'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { useNavigate } from 'react-router-dom'
import Avatar from './Avatar'
import Button from './Button'
import { ModeToggle } from './mode-toggle'
const Nav = () => {
  const user = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const handleSignOut = async () => {
    dispatch(removeProfile())
    const { error } = await supabase.auth.signOut()
    if (error) {
      console.error('Error signing out:', error.message)
      return
    }
    navigate('/')
  }
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
        {user.profile_id ? (
          <Popover>
            <PopoverTrigger>
              {/* href={`/profile/${user.id}`} */}
              <Avatar firstName={user.first_name} lastName={user.last_name} size={45} />
            </PopoverTrigger>
            <PopoverContent className='w-fit flex flex-col items-start gap-2 pr-10'>
              <a className='font-semibold hover:underline cursor-pointer text-foreground/90' href='/dashboard'>
                My Profile
              </a>
              <div className='font-semibold hover:underline cursor-pointer text-foreground/90' onClick={handleSignOut}>
                Sign Out
              </div>
            </PopoverContent>
          </Popover>
        ) : (
          <div className='items-center flex gap-5'>
            <a href='/auth?login=true'>
              <Button variant='secondary'>Log in</Button>
            </a>
            <a href='/auth?login=false'>
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
