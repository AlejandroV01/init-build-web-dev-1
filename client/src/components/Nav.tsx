import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import supabase from "@/lib/supabaseClient";
import { removeProfile } from "@/store/auth/auth.slice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useLocation, useNavigate } from "react-router-dom";
import Avatar from "./Avatar";
import Button from "./Button";
import HamburgerMenu from "./HamburgerMenu";
import { ModeToggle } from "./mode-toggle";
const Nav = () => {
  const user = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const handleSignOut = async () => {
    dispatch(removeProfile());
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error signing out:", error.message);
      return;
    }
    navigate("/");
  };
  const items = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "Browse Ideas",
      route: "/ideas",
    },

    {
      name: "DevChats",
      route: "/devchats",
    },
  ];
  return (
    <div className="flex justify-between container items-center h-[60px] z-20">
      <a href="/">
        <h2 className="font-bold text-xl">Devbuds</h2>
      </a>
      {pathname !== "/user-setup" && (
        <ul className="gap-5 change [&>*]:hover:cursor-pointer font-medium hidden sm:flex">
          {items.map((item) => (
            <li key={item.route}>
              <a href={item.route}>{item.name}</a>
            </li>
          ))}
        </ul>
      )}
      {pathname !== '/user-setup' && (
        <div className='flex gap-5 items-center'>
          {user.profile_id ? (
            <div className='flex items-center gap-2'>
              <Popover>
                <PopoverTrigger>
                  <Avatar firstName={user.first_name} lastName={user.last_name} size={35} />
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
              <ModeToggle />
              <HamburgerMenu />
            </div>
          ) : (
            <>
              <NavAuthButtons className='hidden sm:flex' />
              <HamburgerMenu />
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Nav;

export const NavAuthButtons = ({ className }: { className?: string }) => {
  return (
    <div className={`items-center gap-3 ${className}`}>
      <a href="/auth?login=true">
        <Button variant="secondary">Log in</Button>
      </a>
      <a href="/auth?login=false">
        <Button variant="primary">Sign up</Button>
      </a>
      <ModeToggle />
    </div>
  );
};
