'use client'

import type { QueryDataSourceResponse } from '@notionhq/client/build/src/api-endpoints'
import useSWR from 'swr'
import type { Page } from '../types'

interface GetPagesClientProps {
  page_size?: number
  start_cursor?: string
  tag?: string
}

interface GetPagesResponse extends Omit<QueryDataSourceResponse, 'results'> {
  results: Page[]
}

export const getPagesClient = async ({
  start_cursor,
  tag
}: GetPagesClientProps): Promise<GetPagesResponse | void> => {
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

    return res.json() as Promise<GetPagesResponse>
  } catch (error) {
    console.log(error)
  }
}

export const useGetArticles = ({ start_cursor, tag }: GetPagesClientProps) => {
  return useSWR(['/api/articles', start_cursor, tag], ([_, start_cursor, tag]) =>
    getPagesClient({ start_cursor, tag })
  )
}
