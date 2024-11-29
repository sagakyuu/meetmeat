import Buttons from '@/components/fragments/Buttons'
import NavItems from '@/components/fragments/Navigation/NavItems'
import { cn } from '@/lib/utils'

type BaseProps = {
  children?: React.ReactNode
  styles?: string
}

const Base = ({ children, styles }: BaseProps) => {
  return (
    <div className={cn('min-h-screen w-full')}>
      <header
        className={cn(
          'flex items-center justify-between px-4 py-2',
          'border-b-2 border-gray-200'
        )}
      >
        <div className="">
          <h1>MeetMeat</h1>
        </div>
        <nav>
          <ul className={cn('flex gap-10')}>
            <NavItems to="/">Home</NavItems>
            <NavItems to="/">Produk</NavItems>
            <NavItems to="/">Tentang Kami</NavItems>
            <NavItems to="/">Hubungi Kami</NavItems>
          </ul>
        </nav>
        <div>
          <Buttons>Akun</Buttons>
        </div>
      </header>
      <main className={styles}>{children}</main>
    </div>
  )
}

export default Base
