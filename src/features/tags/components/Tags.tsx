import { Link } from '@/components/Elements/Link'
import { Tag } from '@/components/Elements/Tag'

interface TagsProps {
  tags: string[]
}

export const Tags: React.FC<TagsProps> = ({ tags }) => (
  <div className='flex flex-wrap justify-between gap-5 rounded-xl bg-white p-6'>
    {tags.map((tag, idx) => (
      <Link href={`/tags/${tag}`} key={idx}>
        <Tag className='text-lg font-normal tracking-wide text-link'>{tag}</Tag>
      </Link>
    ))}
  </div>
)
