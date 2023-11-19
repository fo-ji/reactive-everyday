import { NextRequest, NextResponse } from 'next/server'

import { getServerPages } from '@/features/articles/api'

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams
  const slug = searchParams.get('slug') ?? undefined
  const start_cursor = searchParams.get('start_cursor') ?? undefined
  const tag = searchParams.get('tag') ?? undefined

  try {
    const response = await getServerPages({
      slug,
      start_cursor,
      tag
    })
    return NextResponse.json(response)
  } catch (err) {
    return Promise.reject(err)
  }
}
