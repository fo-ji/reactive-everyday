'use client'

import Script from 'next/script'
import React, { type ReactNode } from 'react'
import ReactDOM from 'react-dom'
import { SWRConfig } from 'swr'

import { Notifications } from '@/components/notifications'
import { GA_ID } from '@/config'

type AppProviderProps = {
  children: ReactNode
}

if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') {
  const axe = require('@axe-core/react')
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
      <Notifications />
      {children}
    </SWRConfig>
  )
}
