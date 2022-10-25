import { GetStaticProps, NextPage } from 'next'

import { ContentLayout } from '@/components/Layout'
import { getPages } from '@/features/articles/api'
import { Tags } from '@/features/tags/components'
import { formatMultiSelect } from '@/utils'

export const getStaticProps: GetStaticProps = async () => {
  const { results }: { results: Record<string, any>[] } = await getPages({})
  const tags: Set<string> = new Set()
  for (const page of results) {
    for (const tag of formatMultiSelect(page.properties.tags.multi_select)) {
      tags.add(tag)
    }
  }

  return {
    props: {
      tags: [...tags]
    },
    revalidate: 10
  }
}

interface TagsListProps {
  tags: string[]
}

const TagsList: NextPage<TagsListProps> = ({ tags }) => {
  return (
    <ContentLayout>
      <Tags tags={tags} />
    </ContentLayout>
  )
}

export default TagsList
