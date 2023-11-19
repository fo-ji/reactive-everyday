import { Link } from '@/components/elements/link'
import { Tag } from '@/components/elements/tag'

interface TagsProps {
  tags: string[]
}

export const Tags = ({ tags }: TagsProps) => (
  <div className='flex flex-wrap justify-start gap-4 rounded-xl bg-white p-4 sm:gap-8 sm:p-6'>
    {tags.map((tag, idx) => (
      <Link href={`/tags/${tag}`} key={idx}>
        <Tag className='text-sm font-normal tracking-wide text-link sm:text-lg'>{tag}</Tag>
      </Link>
    ))}
  </div>
)
