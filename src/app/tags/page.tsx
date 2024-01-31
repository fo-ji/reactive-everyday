import { getTags } from '@/features/tags/api'
import { Tags } from '@/features/tags/components'

export default async function TagsListPage() {
  const tags = await getTags()

  if (!tags) return null

  return (
    <section>
      <Tags tags={tags} />
    </section>
  )
}
