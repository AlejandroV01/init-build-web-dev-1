import Button from '@/components/Button'
import Input from '@/components/Input'
import fetchProfileByEmail from '@/database/profiles/fetchProfileByEmail'
import supabase from '@/lib/supabaseClient'
import { addProfile, addProfileUuid } from '@/store/auth/auth.slice'
import { useAppDispatch } from '@/store/hooks'
import React, { useState } from 'react'
import Logo from './Logo'

export const LoginCard = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [validCredentials, setValidCredentials] = useState<boolean | null>(null)
  const dispatch = useAppDispatch()

  const handleSignIn = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    console.log('AuthComponent SignIn Data: ', data, error)
    if (data.user && data.user.email) {
      setValidCredentials(true)
      dispatch(addProfileUuid(data.user.id))
      const profile = await fetchProfileByEmail(data.user.email)
      if (profile) {
        dispatch(addProfile(profile))
      } else {
        console.error('Error fetching profile')
      }
    } else {
      setValidCredentials(false)
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!email || !password) return setValidCredentials(false)
    handleSignIn()
  }
  return (
    <div className='flex flex-col items-center mt-14 w-full '>
      <h1 className='font-bold text-4xl mb-4 text-center'>Log Into Your Account</h1>
      <p className='text-foreground/80 text-center'>Log back into your account here!</p>
      <div className='border-2 border-foreground/40 p-5 rounded-lg shadow-lg mt-8 w-full sm:w-[500px] dark:border-foreground/20'>
        <div className='w-full flex justify-center my-2'>
          <Logo />
        </div>
        <form action='' className='flex flex-col gap-3' onSubmit={handleSubmit}>
          <InputCombo val={email} setVal={setEmail} label='Email' placeholder='Enter your email address' />
          <InputCombo val={password} setVal={setPassword} label='Password' inputType='password' placeholder='Enter your password' />
          <div className='w-full flex justify-center'>
            {validCredentials === false && <p className='text-red-500 text-sm text-center'>Invalid credentials. Please try again.</p>}
          </div>
          <Button variant='primary' className='w-full' type='submit'>
            Log In
          </Button>
          <p>
            Don't have an account? Sign Up{' '}
            <a className='text-primary cursor-pointer underline' href='/auth?login=false'>
              here
            </a>
          </p>
        </form>
        {/* Potential to add other login providers here */}
      </div>
    </div>
  )
}

export const SignUpCard = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passwordMatch, setPasswordMatch] = useState<boolean | null>(null)
  const [passwordLength, setPasswordLength] = useState<boolean | null>(null)
  const [validCredentials, setValidCredentials] = useState<boolean | null>(null)
  const [showConfirmEmail, setShowConfirmEmail] = useState<boolean>(false)
  const signUpUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setValidCredentials(true)
    setPasswordMatch(true)
    setPasswordLength(true)
    if (!email || !password || !confirmPassword) return setValidCredentials(false)
    if (password.length < 6) return setPasswordLength(false)
    if (password !== confirmPassword) return setPasswordMatch(false)
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })
    console.log('AuthComponent SignUp Data: ', data, error)
    if (data) {
      console.log('User created successfully, showing confirm email popup')
      setPasswordMatch(true)
    } else {
      setPasswordMatch(false)
    }
  }
  return (
    <div className='flex flex-col items-center mt-14 w-full'>
      <h1 className='font-bold text-4xl mb-4 text-center'>Create Your Account</h1>
      <p className='text-foreground/80 text-center'>Create your free account here!</p>
      <div className='border-2 border-foreground/40 p-5 rounded-lg shadow-lg mt-8 w-full sm:w-[500px] dark:border-foreground/20'>
        <div className='w-full flex justify-center my-2'>
          <Logo />
        </div>
        <form action='' className='flex flex-col gap-3' onSubmit={signUpUser}>
          <InputCombo val={email} setVal={setEmail} label='Email' placeholder='Enter your email address' />
          <InputCombo val={password} setVal={setPassword} label='Password' inputType='password' placeholder='Enter your password' />
          <InputCombo
            val={confirmPassword}
            setVal={setConfirmPassword}
            label='Confirm Password'
            inputType='password'
            placeholder='Confirm your password'
          />
          <p className='text-sm text-foreground/60'>Must be at least 6 characters.</p>
          <div className='w-full flex justify-center'>
            {passwordMatch === false && <p className='text-red-500 text-sm text-center'>Passwords do not match. Please try again.</p>}
            {passwordLength === false && (
              <p className='text-red-500 text-sm text-center'>Password must be longer than 5 characters. Please try again.</p>
            )}
            {validCredentials === false && <p className='text-red-500 text-sm text-center'>Missing Fields. Please try again.</p>}
          </div>
          <Button variant='primary' className='w-full' type='submit'>
            Create Account
          </Button>
          <p>
            Already have an account? Login{' '}
            <a className='text-primary cursor-pointer underline' href='/auth?login=true'>
              here
            </a>
          </p>
        </form>
        {/* Potential to add other login providers here */}
      </div>
    </div>
  )
}

const InputCombo = ({
  val,
  setVal,
  label,
  className,
  inputType = 'text',
  placeholder = '',
}: {
  val: string
  setVal: (value: React.SetStateAction<string>) => void
  label: string
  className?: string
  inputType?: string
  placeholder?: string
}) => {
  return (
    <div className={`flex flex-col items-start gap-1 ${className}`}>
      <label htmlFor='password' className='text-sm'>
        {label}
      </label>
      <Input type={inputType} value={val} onChange={e => setVal(e.target.value)} className='w-full' placeholder={placeholder} />
    </div>
  )
}
