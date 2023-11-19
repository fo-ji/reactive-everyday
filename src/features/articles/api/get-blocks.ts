import { notion } from '@/lib'

export const getBlocks = async (pageId: string) => {
  const blocks = []
  let cursor
  while (true) {
    const { next_cursor, results }: any = await notion.blocks.children.list({
      block_id: pageId,
      start_cursor: cursor
    })
    blocks.push(...results)
    if (!next_cursor) break
    cursor = next_cursor
  }
  return { results: blocks }
}
