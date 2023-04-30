import type { NextApiRequest, NextApiResponse } from 'next'

import { getServerPages } from '@/features/articles/api'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { slug, start_cursor, tag }
  } = req

  try {
    const response = await getServerPages({
      slug: slug?.toString(),
      start_cursor: start_cursor?.toString(),
      tag: tag?.toString()
    })
    res.status(200).json(response)
  } catch (err) {
    res.status(500).json(err)
  }
}
