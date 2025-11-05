import Image from 'next/image'
import { Tag } from '@/components/elements/tag'
import { formatDiffDate } from '@/utils/format'

interface CardProps {
  title: string
  cover: string
  date: string
  tags: string[]
}

export const Card = ({ title, cover, date, tags }: CardProps) => (
  <div className='border-b border-placeholder px-3 py-2 sm:min-h-[160px] sm:px-5 sm:py-4'>
    <div className='flex flex-col gap-4 sm:flex-row sm:gap-8'>
      <div className='flex justify-center'>
        <div className='relative size-32'>
          <Image
            className='object-contain'
            fill
            sizes='100%'
            src={cover}
            alt='記事で扱うメイン技術のイメージ'
            unoptimized
          />
        </div>
      </div>
      <div className='flex flex-col justify-between gap-2 tracking-wide sm:w-[calc(100%_-_144px)] sm:gap-4'>
        <div className='flex justify-end gap-4 text-sm font-normal text-placeholder sm:gap-8 sm:text-lg'>
          <div>{date}</div>
          <div>{formatDiffDate(date)}</div>
        </div>
        <div className='text-base font-semibold text-main sm:text-xl'>{title}</div>
        <div className='flex flex-wrap justify-end gap-2 sm:gap-8'>
          {tags.map((tag, idx) => (
            <Tag key={idx}>{tag}</Tag>
          ))}
        </div>
      </div>
    </div>
  </div>
)
