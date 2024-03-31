import { LoginCard, SignUpCard } from '@/components/AuthComponents'
import { useSearchParams } from 'react-router-dom'
const Auth = () => {
  const [params] = useSearchParams()
  const isLogin = params.get('login')

  return <div className='flex flex-col items-center container '>{isLogin === 'true' ? <LoginCard /> : <SignUpCard />}</div>
}

export default Auth
