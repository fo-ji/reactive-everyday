import '@/styles/globals.css'

import type { AppProps } from 'next/app'

import { MainLayout } from '@/components/Layout'
import { AppProvider } from '@/providers/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </AppProvider>
  )
}

export default MyApp
