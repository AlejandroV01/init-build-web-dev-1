interface ButtonProps {
  variant: 'primary' | 'secondary' | 'success' | 'destructive'
  disabled?: boolean
  onClick?: () => void
}

const Button = ({ variant, disabled = false, onClick }: ButtonProps) => {
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
    <button disabled={disabled} className={`${checkButtonVariance()} px-3 py-1.5 text-white rounded font-medium w-fit`} onClick={onClick}>
      text
    </button>
  )
}
export default Button
