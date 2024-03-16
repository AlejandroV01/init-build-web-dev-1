interface ButtonProps {
  variant: 'primary' | 'secondary' | 'success' | 'destructive'
  disabled?: boolean
  onClick?: () => void
  children: string
  className?: string
}

const Button = ({ variant, disabled = false, onClick, children, className }: ButtonProps) => {
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
    >
      {children}
    </button>
  )
}

export default Button
