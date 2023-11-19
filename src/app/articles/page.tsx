'use client'

import { CardSkeltonList } from '@/components/elements/card'
import { Pagination } from '@/components/elements/pagination'
import { useGetArticles } from '@/features/articles/api'
import { ArticlesCardList } from '@/features/articles/components'
import { usePagination } from '@/hooks/use-pagination'

export default function ArticlesListPage() {
  const { start_cursor, ...pagination } = usePagination()
  const { data, isLoading } = useGetArticles({ start_cursor })

  return (
    <section>
      <div className='flex justify-center py-8'>
        <Pagination
          has_more={data?.has_more}
          next_cursor={data?.next_cursor ?? undefined}
          start_cursor={start_cursor}
          {...pagination}
        />
      </div>
      {isLoading ? <CardSkeltonList /> : <ArticlesCardList pages={data?.results} />}
      <div className='flex justify-center py-8'>
        <Pagination
          has_more={data?.has_more}
          next_cursor={data?.next_cursor ?? undefined}
          start_cursor={start_cursor}
          {...pagination}
        />
      </div>
    </section>
  )
}
