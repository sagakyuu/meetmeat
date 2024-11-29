import { cn } from '@/lib/utils'

type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'default' | 'denger' | 'success'
}

const Buttons = ({ children, onClick, variant = 'default' }: ButtonProps) => {
  return (
    <button onClick={onClick} className={cn(`button button-${variant}`)}>
      {children}
    </button>
  )
}

export default Buttons
