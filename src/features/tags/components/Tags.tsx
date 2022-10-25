import { Link } from '@/components/Elements/Link'
import { Tag } from '@/components/Elements/Tag'

const TAGS = [
  'React.js',
  'Next.js',
  'Docker',
  'JavaScript',
  'TypeScript',
  'AWS',
  'GraphQL',
  'MongoDB',
  'Firebase'
]

export const Tags: React.FC = () => {
  return (
    <div className='flex flex-wrap justify-between gap-5 rounded-xl bg-white p-6'>
      {TAGS.map((tag, idx) => (
        <Link href='/tags' key={idx}>
          <Tag className='text-lg font-normal tracking-wide text-link'>{tag}</Tag>
        </Link>
      ))}
    </div>
  )
}
