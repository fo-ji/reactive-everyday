import type { GetServerSideProps, NextPage } from 'next'

import { Card } from '@/components/Elements/Card'
import { Link } from '@/components/Elements/Link'
import { ContentLayout } from '@/components/Layout'
import { getPages } from '@/features/articles/api'
import type { Page, Params } from '@/features/articles/types'
import { CurrentTag, Tags } from '@/features/tags/components'
import { formatCover, formatDate, formatMultiSelect, formatTags, formatText } from '@/utils'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { tag } = ctx.params as Params
  const { results: tagPages = [] } = await getPages({ tag })
  const { results: allPages = [] }: { results: Record<string, any>[] } = await getPages({})
  const tags = formatTags(allPages)

  return {
    props: {
      pages: tagPages,
      tag,
      tags
    }
  }
}

interface TagListProps {
  pages: Page[]
  tag: string
  tags: string[]
}

const TagList: NextPage<TagListProps> = ({ pages, tag, tags }) => (
  <ContentLayout>
    <div className='flex flex-col gap-8'>
      <Tags tags={tags} />
      <CurrentTag tag={tag} />
      <div>
        {pages.map(({ cover, properties }, idx) => (
          <Link href={`/articles/${formatText(properties.slug.rich_text)}`} key={idx}>
            <Card
              title={formatText(properties.name.title)}
              cover={formatCover(cover)}
              date={formatDate(properties.releasedAt.date)}
              tags={formatMultiSelect(properties.tags.multi_select)}
            />
          </Link>
        ))}
      </div>
    </div>
  </ContentLayout>
)

export default TagList
