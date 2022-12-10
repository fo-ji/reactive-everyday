import type { GetServerSideProps, NextPage } from 'next'

import { Card } from '@/components/Elements/Card'
import { Link } from '@/components/Elements/Link'
import { ContentLayout } from '@/components/Layout'
import { getPages } from '@/features/articles/api'
import type { Page } from '@/features/articles/types'
import { formatCover, formatDate, formatMultiSelect, formatText } from '@/utils'

export const getServerSideProps: GetServerSideProps = async () => {
  const { results = [] } = await getPages({})

  return {
    props: {
      pages: results
    }
  }
}

interface ArticlesListProps {
  pages: Page[]
}

const ArticlesList: NextPage<ArticlesListProps> = ({ pages }) => (
  <ContentLayout>
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
  </ContentLayout>
)

export default ArticlesList
