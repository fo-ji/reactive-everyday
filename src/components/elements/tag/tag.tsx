import type { PropsWithChildren } from 'react'

interface TagProps extends PropsWithChildren {
  className?: string
}

export const Tag = ({
  children,
  className = 'text-sm sm:text-lg font-normal tracking-wide text-placeholder'
}: TagProps) => (
  <div className={className}>
    <span className='mr-1'>#</span>
    <span>{children}</span>
  </div>
)
