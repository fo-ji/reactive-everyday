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
    <div className='mt-6 border-b border-placeholder text-4xl'>
      <ul className='-mb-px flex justify-around'>
        {routes.map((route, idx) => (
          <li key={idx}>
            <Link
              href={route.path}
              className={
                router.pathname.startsWith(route.path)
                  ? 'pointer-events-none inline-block cursor-none border-b-4 border-link p-4 text-link'
                  : 'inline-block p-4 hover:opacity-40'
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
      <Image src='/logo.png' width={320} height={64} alt='logo' />
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

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='min-h-screen bg-background p-12'>
      <Header />
      <main className='py-8'>{children}</main>
    </div>
  )
}
