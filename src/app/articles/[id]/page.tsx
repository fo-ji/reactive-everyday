import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getBlocks, getPage } from '@/features/articles/api'
import { Blocks, PageBackButton } from '@/features/articles/components'
import { formatDate, formatDiffDate, formatText } from '@/utils/format'

interface ArticlePageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata | void> {
  const { id } = await params
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const page: any = await getPage({ pageId: id })

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
  if (page) return { title: formatText(page.properties.name.title) }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { id } = await params
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const page: any = await getPage({ pageId: id })

  if (!page) notFound()

  const { results: blocks } = await getBlocks(id)

  return (
    <section>
      <article className='w-full'>
        <Header
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
          title={formatText(page.properties.name.title)}
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
          date={formatDate(page.properties.releasedAt.date)}
        />
        <div className='mt-10'>
          <Blocks blocks={blocks} />
        </div>
      </article>
      <div className='mt-5 text-center'>
        <PageBackButton />
      </div>
    </section>
  )
}

interface HeaderProps {
  title: string
  date: string
}

const Header = ({ title, date }: HeaderProps) => (
  <div className='flex flex-col justify-between gap-8'>
    <h1>
      <span>{title}</span>
    </h1>
    <div className='flex justify-end gap-16 text-base font-normal tracking-normal text-placeholder'>
      <div>{date}</div>
      <div>{formatDiffDate(date)}</div>
    </div>
  </div>
)
