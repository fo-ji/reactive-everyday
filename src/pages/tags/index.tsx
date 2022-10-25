import { NextPage } from 'next'

import { ContentLayout } from '@/components/Layout'
import { Tags } from '@/features/tags/components'

const TagsList: NextPage = () => {
  return (
    <ContentLayout>
      <Tags />
      <h1>TagsList</h1>
    </ContentLayout>
  )
}

export default TagsList
