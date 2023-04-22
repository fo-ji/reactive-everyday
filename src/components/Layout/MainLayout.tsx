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
      <ul className='m-auto -mb-px flex max-w-4xl justify-between border-b border-placeholder text-lg tracking-wide sm:text-3xl'>
        {routes.map((route, idx) => (
          <li key={idx}>
            <Link
              href={route.path}
              className={
                router.pathname.startsWith(route.path)
                  ? 'inline-block border-b-4 border-link p-1 text-link hover:opacity-60'
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

const Logo: React.FC = () => (
  <Link href='/articles'>
    <Image src='/logo.png' width={240} height={40} alt='logo' className='h-auto w-auto' />
  </Link>
)

const Header: React.FC = () => (
  <header>
    <div className='flex justify-center'>
      <Logo />
    </div>
    <Navigation />
  </header>
)

const Footer: React.FC = () => (
  <footer>
    <div className='text-center'>
      <span>© 2022 フォージテック</span>
    </div>
  </footer>
)

export const MainLayout: React.FC<PropsWithChildren> = ({ children }) => (
  <div className='min-h-screen bg-background p-8'>
    <Header />
    <main className='min-h-[calc(100vh_-_200px)] py-8'>{children}</main>
    <Footer />
  </div>
)
