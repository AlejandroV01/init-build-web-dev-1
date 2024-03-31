import { LoginCard, SignUpCard } from '@/components/AuthComponents'
import { useAppSelector } from '@/store/hooks'
import { useNavigate, useSearchParams } from 'react-router-dom'
const Auth = () => {
  const [params] = useSearchParams()
  const isLogin = params.get('login')
  const user = useAppSelector(state => state.auth)
  const navigate = useNavigate()
  if (user.profile_id) {
    return navigate('/')
  }
  return <div className='flex flex-col items-center container '>{isLogin === 'true' ? <LoginCard /> : <SignUpCard />}</div>
}

export default Auth
