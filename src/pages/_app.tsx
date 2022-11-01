import '@/styles/globals.css'

import type { AppProps } from 'next/app'

import { MainLayout } from '@/components/Layout'
import { Notifications } from '@/components/Notifications/Notifications'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Notifications />
      <Component {...pageProps} />
    </MainLayout>
  )
}

export default MyApp
