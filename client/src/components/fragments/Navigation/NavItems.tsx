import { cn } from '@/lib/utils'
import { Link } from 'react-router-dom'

type Props = {
  children: React.ReactNode
  to: string
}

const NavItems = ({ children, to }: Props) => {
  return (
    <li className={cn('link-items')}>
      <Link to={to}>{children}</Link>
    </li>
  )
}

export default NavItems
