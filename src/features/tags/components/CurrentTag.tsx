import { Tag } from '@/components/Elements/Tag'

interface TagProps {
  tag: string
}

export const CurrentTag: React.FC<TagProps> = ({ tag }) => (
  <div className='flex w-fit gap-6 rounded-xl bg-white p-6 text-lg font-normal tracking-wide text-placeholder'>
    <div>selected: </div>
    <Tag>{tag}</Tag>
  </div>
)
