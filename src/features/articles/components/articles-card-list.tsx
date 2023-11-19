import { Card } from '@/components/elements/card'
import { Link } from '@/components/elements/link'
import { formatCover, formatDate, formatMultiSelect, formatText } from '@/utils'

import type { Page } from '../types'

type ArticlesCardListProps = {
  pages?: Page[]
}
export const ArticlesCardList = ({ pages }: ArticlesCardListProps) => {
  return (
    <>
      {pages?.map(({ cover, properties }, idx) => (
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
  )
}
