import Image from 'next/image'

import { Navigation } from '@/components/Elements'

export const Header = () => {
  return (
    <header>
      <div className='text-center'>
        <Image src='/logo.png' width={320} height={64} alt='header-logo' />
      </div>
      <Navigation />
    </header>
  )
}
