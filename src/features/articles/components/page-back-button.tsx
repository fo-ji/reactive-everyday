'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/elements/button'

export const PageBackButton = () => {
  const router = useRouter()

  return (
    <Button className='inline-block text-link hover:opacity-60' onClick={() => router.back()}>
      <div className='flex gap-2'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='size-6'
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
        </svg>
        Back
      </div>
    </Button>
  )
}
