import { GetStaticProps, NextPage } from 'next'

import { ContentLayout } from '@/components/Layout'
import { getPages } from '@/features/articles/api'
import { Tags } from '@/features/tags/components'
import { formatTags } from '@/utils'

export const getStaticProps: GetStaticProps = async () => {
  const { results }: { results: Record<string, any>[] } = await getPages({})
  const tags = formatTags(results)

  return {
    props: {
      tags
    },
    revalidate: 10
  }
}

interface TagsListProps {
  tags: string[]
}

const TagsList: NextPage<TagsListProps> = ({ tags }) => (
  <ContentLayout>
    <Tags tags={tags} />
  </ContentLayout>
)

export default TagsList
