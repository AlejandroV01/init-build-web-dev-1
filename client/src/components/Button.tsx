interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'success' | 'destructive'
  disabled?: boolean
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  className?: string
  children: string | React.ReactNode
  type?: 'submit' | 'reset' | 'button'
}

const Button = ({ variant = 'primary', disabled = false, onClick, className, children, type }: ButtonProps) => {
  const checkButtonVariance = () => {
    switch (variant) {
      case 'primary':
        return 'bg-primary'
      case 'secondary':
        return 'bg-secondary'
      case 'destructive':
        return 'bg-destructive'
    }
  }
  return (
    <button
      disabled={disabled}
      className={`${checkButtonVariance()} px-3 py-1.5 text-white rounded font-medium w-fit ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}
export default Button
