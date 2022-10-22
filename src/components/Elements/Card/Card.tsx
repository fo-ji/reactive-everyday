import Image from 'next/image'

import { Tag } from '@/components/Elements/Tag'

export const Card: React.FC = () => {
  return (
    <div className='h-80 border-b border-placeholder py-8 px-10'>
      <div className='flex gap-16'>
        {/* Image */}
        <Image src='/no_image.png' width={256} height={256} alt='card' />
        {/* Description */}
        <div className='flex w-[calc(100%_-_256px)] flex-col justify-between gap-12 '>
          {/* When */}
          <div className='flex justify-end gap-16 text-3xl font-normal text-placeholder'>
            {/* Date */}
            <div>2022/10/01</div>
            {/* today */}
            <div>today</div>
          </div>
          {/* Title */}
          <div className='text-4xl font-normal text-main'>
            Reactでサーバーサイドページネーションを実装してみた
          </div>
          {/* Tags */}
          <div className='flex gap-16'>
            {/* Tag */}
            <Tag>React.js</Tag>
          </div>
        </div>
      </div>
    </div>
  )
}
