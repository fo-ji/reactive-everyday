import { notion } from '@/lib'

export const getBlocks = async (pageId: string) => {
  const blocks = []
  let cursor
  while (true) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { next_cursor, results }: any = await notion.blocks.children.list({
      block_id: pageId,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      start_cursor: cursor
    })

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    blocks.push(...results)

    if (!next_cursor) break
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    cursor = next_cursor
  }

  return { results: blocks }
}
