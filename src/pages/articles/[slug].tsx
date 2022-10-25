import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { BlockType } from 'notion-block-renderer'

import { ContentLayout } from '@/components/Layout'
import { getBlocks, getPages } from '@/features/articles/api'
import { Blocks } from '@/features/articles/components'
import { Page, Params } from '@/features/articles/types'
import { formatDate, formatDiffDate, formatText } from '@/utils/format'

export const getStaticPaths: GetStaticPaths = async () => {
  const { results } = await getPages({})
  const paths = results.map(({ properties }: any) => {
    return {
      params: {
        slug: formatText(properties.slug.rich_text)
      }
    }
  })

  return {
    fallback: 'blocking',
    paths
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx.params as Params
  const { results } = await getPages({ slug })
  const page = results[0]
  const { results: blocks } = await getBlocks(page.id)

  return {
    props: {
      blocks,
      page
    },
    revalidate: 10
  }
}

interface HeaderProps {
  title: string
  date: string
}

const Header: React.FC<HeaderProps> = ({ title, date }) => {
  return (
    <div className='flex flex-col justify-between gap-8'>
      {/* TODO: 一覧へ戻る機能の実装 */}
      <div className='text-link'>← back</div>
      <h1>
        <span>{title}</span>
      </h1>
      <div className='flex justify-end gap-16 text-base font-normal tracking-normal text-placeholder'>
        <div>{date}</div>
        <div>{formatDiffDate(date)}</div>
      </div>
    </div>
  )
}

interface ArticleProps {
  blocks: BlockType[]
  page: Page
}

const Article: NextPage<ArticleProps> = ({ blocks, page }) => {
  console.log({ blocks, page })

  return (
    <ContentLayout title={formatText(page.properties.name.title)}>
      <article className='w-full'>
        <Header
          title={formatText(page.properties.name.title)}
          date={formatDate(page.properties.releasedAt.date)}
        />
        <div className='mt-10'>
          <Blocks blocks={blocks} />
        </div>
      </article>
    </ContentLayout>
  )
}

export default Article
