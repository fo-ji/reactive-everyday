import { DATABASE_ID } from '@/config'
import { notion } from '@/lib'

interface GetPagesServerProps {
  page_size?: number
  start_cursor?: string
  tag?: string
}

export const getPagesServer = async ({
  page_size = 10,
  start_cursor,
  tag
}: GetPagesServerProps) => {
  const baseFilter = [
    {
      checkbox: {
        equals: true
      },
      property: 'isReleased'
    }
  ] as const

  const tagFilter = tag
    ? [
        {
          multi_select: {
            contains: tag
          },
          property: 'tags' as const
        }
      ]
    : []

  return await notion.databases.query({
    database_id: DATABASE_ID,
    filter: {
      and: [...baseFilter, ...tagFilter]
    },
    page_size,
    sorts: [
      {
        direction: 'descending',
        property: 'releasedAt'
      }
    ],
    start_cursor
  })
}
