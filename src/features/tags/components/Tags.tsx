import { Link } from '@/components/Elements/Link'
import { Tag } from '@/components/Elements/Tag'

interface TagsProps {
  tags: string[]
}

export const Tags: React.FC<TagsProps> = ({ tags }) => (
  <div className='flex flex-wrap justify-start gap-4 rounded-xl bg-white p-4 sm:gap-8 sm:p-6'>
    {tags.map((tag, idx) => (
      <Link href={`/tags/${tag}`} key={idx}>
        <Tag className='text-sm font-normal tracking-wide text-link sm:text-lg'>{tag}</Tag>
      </Link>
    ))}
  </div>
)
