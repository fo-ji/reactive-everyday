import { Card } from '@/components/elements/card'
import { Link } from '@/components/elements/link'
import { getServerPages } from '@/features/articles/api'
import type { Page } from '@/features/articles/types'
import { CurrentTag, Tags } from '@/features/tags/components'
import { formatCover, formatDate, formatMultiSelect, formatTags, formatText } from '@/utils'

type TagListPageProps = {
  params: { tag: string }
}

export default async function TagListPage({ params }: TagListPageProps) {
  const { tag } = params
  const { results: pages = [] } = await getServerPages({ page_size: 100, tag })
  const { results: allPages = [] }: { results: Record<string, any>[] } = await getServerPages({
    page_size: 100
  })
  const tags = formatTags(allPages)

  return (
    <section>
      <div className='flex flex-col gap-8'>
        <Tags tags={tags} />
        <CurrentTag tag={tag} />
        <div className='text-center'>
          <p className='font-bold text-placeholder'>{pages.length}件</p>
        </div>
        <div>
          {(pages as unknown as Page[]).map(({ cover, properties }, idx) => (
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
    </section>
  )
}
