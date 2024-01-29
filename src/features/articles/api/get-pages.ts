import type { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints'
import useSWR from 'swr'

import { DATABASE_ID } from '@/config'
import { notion } from '@/lib'

import type { Page } from '../types'

interface GetPagesProps {
  page_size?: number
  start_cursor?: string
  tag?: string
}

export interface GetPagesResponse extends Omit<QueryDatabaseResponse, 'results'> {
  results: Page[]
}

export const getServerPages = async ({ page_size = 10, start_cursor, tag }: GetPagesProps) => {
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

export const getClientPages = async ({
  start_cursor,
  tag
}: GetPagesProps): Promise<GetPagesResponse | void> => {
  let url = '/api/articles'
  const params: Record<string, string> = {}
  if (start_cursor) {
    params.start_cursor = start_cursor
  }
  if (tag) {
    params.tag = tag
  }
  if (Object.keys(params).length) {
    const query = new URLSearchParams(params).toString()
    url = `${url}?${query}`
  }
  try {
    const res = await fetch(url, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'GET'
    })

    if (!res.ok) {
      throw new Error(res.statusText)
    }

    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export const useGetArticles = ({ start_cursor, tag }: GetPagesProps) => {
  return useSWR(['/api/articles', start_cursor, tag], ([_, start_cursor, tag]) =>
    getClientPages({ start_cursor, tag })
  )
}
