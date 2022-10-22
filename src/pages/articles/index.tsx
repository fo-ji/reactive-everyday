import { GetStaticProps, NextPage } from 'next'

import { Card } from '@/components/Elements/Card'
import { getPages } from '@/features/articles/api'
import { Page } from '@/features/articles/types'

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
    <>
      <Card />
    </>
  )
}

export default ArticlesList
