import Image from 'next/image'
import { useRouter } from 'next/router'
import type { PropsWithChildren } from 'react'

import { Link } from '../Elements/Link'

const Navigation: React.FC = () => {
  const router = useRouter()

  const routes = [
    { name: 'articles', path: '/articles' },
    { name: 'tags', path: '/tags' },
    { name: 'about', path: '/about' },
    { name: 'contact', path: '/contact' }
  ]

  return (
    <div className='mt-4'>
      <ul className='m-auto -mb-px flex max-w-4xl justify-between border-b border-placeholder text-3xl tracking-wide'>
        {routes.map((route, idx) => (
          <li key={idx}>
            <Link
              href={route.path}
              className={
                router.pathname.startsWith(route.path)
                  ? 'pointer-events-none inline-block cursor-none border-b-4 border-link p-1 text-link'
                  : 'inline-block p-1 hover:opacity-40'
              }
            >
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

const Logo: React.FC = () => {
  return (
    <Link href='/articles'>
      <Image src='/logo.png' width={240} height={40} alt='logo' />
    </Link>
  )
}

const Header: React.FC = () => {
  return (
    <header>
      <div className='text-center'>
        <Logo />
      </div>
      <Navigation />
    </header>
  )
}

export const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='min-h-screen bg-background p-8'>
      <Header />
      <main className='py-8'>{children}</main>
    </div>
  )
}
