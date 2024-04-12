import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import supabase from '@/lib/supabaseClient'
import { removeProfile } from '@/store/auth/auth.slice'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { Home, LayoutDashboard, Lightbulb, LogOut, LucideIcon, Menu } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'
import Logo from './Logo'
import { NavAuthButtons } from './Nav'
import { ModeToggle } from './mode-toggle'
const HamburgerMenu = () => {
  const navigate = useNavigate()
  const user = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()
  const items = [
    {
      icon: Home,
      name: 'Home',
      route: '/',
    },
    {
      icon: Lightbulb,
      name: 'Browse Ideas',
      route: '/ideas',
    },
    {
      icon: LayoutDashboard,
      name: 'Profile',
      route: '/dashboard',
    },
  ]
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
    <Sheet>
      <SheetTrigger className='sm:hidden h-[24px]'>
        <Menu />
      </SheetTrigger>
      <SheetContent className='flex flex-col gap-10'>
        <SheetHeader className='flex flex-col items-center gap-3'>
          <SheetTitle>
            <Logo />
          </SheetTitle>
          {user.profile_id ? <ModeToggle /> : <NavAuthButtons className='flex' />}
        </SheetHeader>
        <div className='flex flex-col justify-between h-full'>
          <div className='flex flex-col gap-2'>
            {items.map(item => {
              return <NavbarRouteButton key={item.name} icon={item.icon} name={item.name} route={item.route} />
            })}
          </div>
          {user.profile_id && (
            <div className={`flex p-3 w-full gap-3 rounded-lg cursor-pointer mt-auto`} onClick={handleSignOut}>
              <LogOut />
              <p className='font-medium'>Logout</p>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default HamburgerMenu

const NavbarRouteButton = ({ icon: Icon, name, route }: { icon: LucideIcon; name: string; selected?: string; route: string }) => {
  const { pathname } = useLocation()
  return (
    <a
      href={route}
      className={`flex p-3 w-full gap-3 
       ${pathname && pathname === route ? 'bg-primary text-white' : 'bg-transparent'} rounded-lg cursor-pointer`}
    >
      <Icon />
      <p className='font-medium'>{name}</p>
    </a>
  )
}
