import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
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
    const error =
      err instanceof Error ? err : new Error(typeof err === 'string' ? err : 'Unknown error')

    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
