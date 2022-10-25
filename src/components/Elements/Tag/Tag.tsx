import type { PropsWithChildren } from 'react'

export const Tag: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='text-lg font-normal text-placeholder'>
      <span>#</span>
      <span>{children}</span>
    </div>
  )
}
