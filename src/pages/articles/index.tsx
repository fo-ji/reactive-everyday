import { GetStaticProps, NextPage } from 'next'

import { Card } from '@/components/Elements/Card'
import { Link } from '@/components/Elements/Link'
import { getPages } from '@/features/articles/api'
import { Page } from '@/features/articles/types'
import { formatCover, formatDate, formatMultiSelect, formatText } from '@/utils'

export const getStaticProps: GetStaticProps = async () => {
  const { results = [] } = await getPages({})
  return {
    props: {
      pages: results
    },
    revalidate: 10
  }
}

interface ArticlesListProps {
  pages: Page[]
}

const ArticlesList: NextPage<ArticlesListProps> = ({ pages }) => {
  console.log({ pages })

  return (
    <div>
      {pages.map(({ cover, properties }, idx) => (
        <Link href='/' key={idx}>
          <Card
            title={formatText(properties.name.title)}
            cover={formatCover(cover)}
            date={formatDate(properties.releasedAt.date)}
            tags={formatMultiSelect(properties.tags.multi_select)}
          />
        </Link>
      ))}
    </div>
  )
}

export default ArticlesList