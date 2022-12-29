import Head from 'next/head'
import { PropsWithChildren } from 'react'

interface ContentLayoutProps extends PropsWithChildren {
  title?: string
  description?: string
}

export const ContentLayout: React.FC<ContentLayoutProps> = ({
  title = 'reactな日常',
  children,
  description = 'ReactやNextなどフロントエンドを中心に日々のキャッチアップを綴っています。バックエンドはNestJSにとても興味があって更新頻度高めになりそうです。サンプルなどで実装する環境は基本的にはDockerで構築しています。'
}) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <link rel='icon' href='/favicon.png' />
    </Head>
    <div className='m-auto max-w-4xl'>{children}</div>
  </>
)
