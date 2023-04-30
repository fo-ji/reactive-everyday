import type { FC } from 'react'

import type { UsePaginationReturn } from '@/hooks/usePagination'

import { Button } from '../Button'

interface PaginationProps extends UsePaginationReturn {
  has_more?: boolean
  next_cursor?: string
}

export const Pagination: FC<PaginationProps> = ({
  back,
  has_more,
  next,
  next_cursor,
  start_cursor
}) => (
  <div className='flex gap-10'>
    <div className='w-24 text-center'>
      {start_cursor && (
        <Button className='inline-block text-link hover:opacity-60' onClick={back}>
          <div className='flex gap-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
            </svg>
            Prev
          </div>
        </Button>
      )}
    </div>
    <div className='w-24 text-center'>
      {has_more && (
        <Button
          className='inline-block text-link hover:opacity-60'
          onClick={() => next(next_cursor)}
        >
          <div className='flex gap-2'>
            Next
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
            </svg>
          </div>
        </Button>
      )}
    </div>
  </div>
)
