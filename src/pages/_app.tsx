import '@/styles/globals.css'

import type { AppProps } from 'next/app'
import Script from 'next/script'
import React from 'react'
import ReactDOM from 'react-dom'
import { SWRConfig } from 'swr'

import { MainLayout } from '@/components/Layout'
import { Notifications } from '@/components/Notifications/Notifications'
import { GA_ID } from '@/config'

if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') {
  const axe = require('@axe-core/react')
  axe(React, ReactDOM, 1000)
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy='afterInteractive'
      />
      <Script id='google-analytics' strategy='afterInteractive'>
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', ${JSON.stringify(GA_ID)});
        `}
      </Script>
      <SWRConfig
        value={{
          keepPreviousData: true,
          revalidateOnFocus: false
        }}
      >
        <Notifications />
        <Component {...pageProps} />
      </SWRConfig>
    </MainLayout>
  )
}

export default MyApp
