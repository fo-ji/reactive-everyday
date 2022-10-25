import type { PropsWithChildren } from 'react'

interface TagProps extends PropsWithChildren {
  className?: string
}

export const Tag: React.FC<TagProps> = ({
  children,
  className = 'text-lg font-normal tracking-wide text-placeholder'
}) => {
  return (
    <div className={className}>
      <span className='mr-1'>#</span>
      <span>{children}</span>
    </div>
  )
}
