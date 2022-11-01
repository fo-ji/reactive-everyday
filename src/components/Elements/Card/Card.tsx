import Image from 'next/image'

import { Tag } from '@/components/Elements/Tag'
import { formatDiffDate } from '@/utils/format'

interface CardProps {
  title: string
  cover: string
  date: string
  tags: string[]
}

export const Card: React.FC<CardProps> = ({ title, cover, date, tags }) => (
  <div className='h-40 border-b border-placeholder py-4 px-5'>
    <div className='flex gap-8'>
      <Image src={cover} width={128} height={128} alt='card' objectFit='contain' />
      <div className='flex w-[calc(100%_-_144px)] flex-col justify-between gap-4 tracking-wide'>
        <div className='flex justify-end gap-8 text-lg font-normal text-placeholder'>
          <div>{date}</div>
          <div>{formatDiffDate(date)}</div>
        </div>
        <div className='text-center text-xl font-semibold text-main'>{title}</div>
        <div className='flex justify-end gap-8'>
          {tags.map((tag, idx) => (
            <Tag key={idx}>{tag}</Tag>
          ))}
        </div>
      </div>
    </div>
  </div>
)
