import { getServerPages } from '@/features/articles/api'
import { Tags } from '@/features/tags/components'
import { formatTags } from '@/utils'

export default async function TagsListPage() {
  const { results }: { results: Record<string, any>[] } = await getServerPages({ page_size: 100 })
  const tags = formatTags(results)

  return (
    <section>
      <Tags tags={tags} />
    </section>
  )
}
