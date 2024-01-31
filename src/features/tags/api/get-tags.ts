import { DATABASE_ID } from '@/config'
import { notion } from '@/lib'
import { formatTags } from '@/utils'

export const getTags = async () => {
  try {
    const articles = []
    let cursor
    while (true) {
      const { next_cursor, results } = await notion.databases.query({
        database_id: DATABASE_ID,
        filter: {
          and: [
            {
              checkbox: {
                equals: true
              },
              property: 'isReleased'
            }
          ]
        },
        start_cursor: cursor
      })
      articles.push(...results)
      if (!next_cursor) break
      cursor = next_cursor
    }
    return formatTags(articles)
  } catch (error) {
    console.log({ error })
  }
}
