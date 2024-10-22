import { Card } from '@/components/elements/card'
import { Link } from '@/components/elements/link'
import { getPagesServer } from '@/features/articles/api/get-pages-server'
import type { Page } from '@/features/articles/types'
import { getTags } from '@/features/tags/api'
import { CurrentTag, Tags } from '@/features/tags/components'
import { formatCover, formatDate, formatMultiSelect, formatText } from '@/utils'

type TagListPageProps = {
  params: Promise<{ tag: string }>
}

export default async function TagListPage({ params }: TagListPageProps) {
  const { tag } = await params
  const { results: pages = [] } = await getPagesServer({ page_size: 100, tag })
  const tags = await getTags()

  return (
    <section>
      <div className='flex flex-col gap-8'>
        {tags && <Tags tags={tags} />}
        <CurrentTag tag={tag} />
        <div className='text-center'>
          <p className='font-bold text-placeholder'>{pages.length}件</p>
        </div>
        <div>
          {(pages as unknown as Page[]).map(({ id, cover, properties }) => (
            <Link href={`/articles/${id}`} key={id}>
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
    </section>
  )
}
