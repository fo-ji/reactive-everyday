import { Tag } from '@/components/Elements/Tag'

interface TagProps {
  tag: string
}

export const CurrentTag: React.FC<TagProps> = ({ tag }) => (
  <div className='flex w-fit gap-3 rounded-xl bg-white p-3 text-sm font-normal tracking-wide text-placeholder sm:gap-6 sm:p-6 sm:text-lg'>
    <div>selected: </div>
    <Tag>{tag}</Tag>
  </div>
)
