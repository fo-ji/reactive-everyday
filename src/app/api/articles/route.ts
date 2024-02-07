import { NextRequest, NextResponse } from 'next/server'

import { getPagesServer } from '@/features/articles/api'

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams
  const start_cursor = searchParams.get('start_cursor') ?? undefined
  const tag = searchParams.get('tag') ?? undefined

  try {
    const response = await getPagesServer({
      start_cursor,
      tag
    })
    return NextResponse.json(response)
  } catch (err) {
    return Promise.reject(err)
  }
}
