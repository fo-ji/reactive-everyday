import { NextPage } from 'next'

import { ContentLayout } from '@/components/Layout/ContentLayout'

const Custom404: NextPage = () => (
  <ContentLayout>
    <div className='flex h-[calc(100vh_-_260px)] items-center justify-center'>
      <h1>404 Not Found</h1>
    </div>
  </ContentLayout>
)

export default Custom404
