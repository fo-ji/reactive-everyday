import '@/styles/globals.css'

import type { Metadata } from 'next'
import type { ReactNode } from 'react'

import { AppLayout } from '@/components/Layout/app-layout'
import { AppProvider } from '@/providers/app'

export const metadata: Metadata = {
  title: 'reactな日常',
  description:
    'ReactやNextなどフロントエンドを中心に日々のキャッチアップを綴っています。バックエンドはNestJSにとても興味があって更新頻度高めになりそうです。サンプルなどで実装する環境は基本的にはDockerで構築しています。'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='ja'>
      <body>
        <AppProvider>
          <AppLayout>{children}</AppLayout>
        </AppProvider>
      </body>
    </html>
  )
}
