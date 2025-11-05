'use client'

import React, { type ReactNode } from 'react'
import ReactDOM from 'react-dom'
import Script from 'next/script'
import { SWRConfig } from 'swr'
import { GA_ID } from '@/config'

interface AppProviderProps {
  children: ReactNode
}

if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-require-imports
  const axe = require('@axe-core/react')
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  axe(React, ReactDOM, 1000)
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <SWRConfig
      value={{
        keepPreviousData: true,
        revalidateOnFocus: false
      }}
    >
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
      {children}
    </SWRConfig>
  )
}
