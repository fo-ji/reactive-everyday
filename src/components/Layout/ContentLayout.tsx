import Head from 'next/head'
import { PropsWithChildren } from 'react'

interface ContentLayoutProps extends PropsWithChildren {
  title?: string
  description?: string
}

export const ContentLayout: React.FC<ContentLayoutProps> = ({
  title = 'reactな日常',
  children,
  description = ''
}) => {
  return (
    <div className='m-auto max-w-4xl'>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
      </Head>
      {children}
    </div>
  )
}
