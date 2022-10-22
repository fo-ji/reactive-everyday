import Image from 'next/image'

import { Tag } from '@/components/Elements/Tag'

interface CardProps {
  title: string
  cover: string
  date: string
  tags: string[]
}

export const Card: React.FC<CardProps> = ({ title, cover, date, tags }) => {
  return (
    <div className='h-80 border-b border-placeholder py-8 px-10'>
      <div className='flex gap-16'>
        <Image src={cover} width={256} height={256} alt='card' objectFit='contain' />
        <div className='flex w-[calc(100%_-_256px)] flex-col justify-between gap-12 '>
          <div className='flex justify-end gap-16 text-3xl font-normal text-placeholder'>
            <div>{date}</div>
            {/* TODO: dateから計算して出力 */}
            <div>today</div>
          </div>
          <div className='text-4xl font-normal text-main'>{title}</div>
          <div className='flex gap-16'>
            {tags.map((tag, idx) => (
              <Tag key={idx}>{tag}</Tag>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
