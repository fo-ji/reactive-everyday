import { DATABASE_ID } from '@/config'
import { notion } from '@/lib'

export const getPages = async ({ slug, tag }: { slug?: string; tag?: string }) => {
  const baseFilter = [
    {
      checkbox: {
        equals: true
      },
      property: 'isReleased'
    },
    {
      property: 'slug',
      rich_text: {
        is_not_empty: true
      }
    }
  ] as const

  const slugFilter = slug
    ? [
        {
          property: 'slug' as const,
          rich_text: {
            equals: slug
          }
        }
      ]
    : []

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
      and: [...baseFilter, ...slugFilter, ...tagFilter]
    },
    sorts: [
      {
        direction: 'descending',
        property: 'releasedAt'
      }
    ]
  })
}
