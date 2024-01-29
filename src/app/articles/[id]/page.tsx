import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getBlocks, getPage } from '@/features/articles/api'
import { Blocks, PageBackButton } from '@/features/articles/components'
import { formatDate, formatDiffDate, formatText } from '@/utils/format'

type ArticlePageProps = {
  params: { id: string }
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata | void> {
  const page: any = await getPage({ pageId: params.id })
  if (page) return { title: formatText(page.properties.name.title) }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const page: any = await getPage({ pageId: params.id })

  if (!page) notFound()

  const { results: blocks } = await getBlocks(params.id)

  return (
    <section>
      <article className='w-full'>
        <Header
          title={formatText(page.properties.name.title)}
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

type HeaderProps = {
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
