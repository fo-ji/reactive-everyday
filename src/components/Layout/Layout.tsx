import { Header } from './Header'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='min-h-screen bg-background p-12'>
      <Header />
      <main>{children}</main>
    </div>
  )
}
