import type { GetServerSideProps, NextPage } from 'next'

import { Card, CardSkelton } from '@/components/Elements/Card'
import { Link } from '@/components/Elements/Link'
import { Pagination } from '@/components/Elements/Pagination'
import { ContentLayout } from '@/components/Layout'
import { GetPagesResponse, getServerPages, useGetArticles } from '@/features/articles/api'
import { usePagination } from '@/hooks/usePagination'
import { formatCover, formatDate, formatMultiSelect, formatText } from '@/utils'

export const getServerSideProps: GetServerSideProps = async () => {
  const fallbackData = await getServerPages({})

  return {
    props: { fallbackData }
  }
}

interface ArticlesListProps {
  fallbackData: GetPagesResponse
}

const ArticlesList: NextPage<ArticlesListProps> = ({ fallbackData }) => {
  const { start_cursor, ...pagination } = usePagination()
  const { data, isLoading } = useGetArticles({ fallbackData, start_cursor })

  return (
    <ContentLayout>
      <div className='flex justify-center py-8'>
        <Pagination
          has_more={data?.has_more}
          next_cursor={data?.next_cursor ?? undefined}
          start_cursor={start_cursor}
          {...pagination}
        />
      </div>
      {isLoading ? (
        <>
          {Array(10)
            .fill('')
            .map((_, idx) => (
              <CardSkelton key={idx} />
            ))}
        </>
      ) : (
        <>
          {data?.results.map(({ cover, properties }, idx) => (
            <Link href={`/articles/${formatText(properties.slug.rich_text)}`} key={idx}>
              <Card
                title={formatText(properties.name.title)}
                cover={formatCover(cover)}
                date={formatDate(properties.releasedAt.date)}
                tags={formatMultiSelect(properties.tags.multi_select)}
              />
            </Link>
          ))}
        </>
      )}
      <div className='flex justify-center py-8'>
        <Pagination
          has_more={data?.has_more}
          next_cursor={data?.next_cursor ?? undefined}
          start_cursor={start_cursor}
          {...pagination}
        />
      </div>
    </ContentLayout>
  )
}

export default ArticlesList
