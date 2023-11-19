import { useCallback, useEffect, useState } from 'react'

export interface UsePaginationReturn {
  back: () => void
  next: (next_cursor?: string | null) => void
  start_cursor?: string
}

interface Cursor {
  prev?: string
  start?: string
}

const INITIAL_CURSOR = {
  prev: undefined,
  start: undefined
}

export const usePagination = () => {
  const [cursor, setCursor] = useState<Cursor>(INITIAL_CURSOR)
  const [cursors, setCursors] = useState<Cursor[]>([INITIAL_CURSOR])

  useEffect(() => {
    setCursors((prev) => {
      if (!prev.find((cur) => JSON.stringify(cur) === JSON.stringify(cursor)))
        return [...prev, cursor]
      return prev
    })
  }, [cursor])

  const back = useCallback(() => {
    setCursor((prev) => {
      const prevCursor = cursors.find((cursor) => cursor.start === prev.prev)
      return {
        prev: prevCursor?.prev,
        start: prev.prev
      }
    })
  }, [cursors])

  const next = useCallback((next_cursor?: string | null) => {
    setCursor((prev) => ({ prev: prev.start, start: next_cursor ?? undefined }))
  }, [])

  return {
    back,
    next,
    start_cursor: cursor.start
  }
}
