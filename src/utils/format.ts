import type { Page, RichText } from '@/features/articles/types'

export const formatText = (richTexts: RichText[]) => {
  try {
    const texts = richTexts.map((richText) => richText.plain_text)

    return texts.join('')
  } catch (err) {
    console.log({ err })

    return ''
  }
}

export const formatCover = (cover: Page['cover']) => {
  if (cover && cover.file) return cover.file.url

  if (cover && cover.external) return cover.external.url

  return '/no_image.png'
}

export const formatDate = (date: { start: string }) => {
  try {
    return date.start
  } catch (err) {
    console.log({ err })

    return '-'
  }
}

export const formatMultiSelect = (multiSelects: { name: string }[]) => {
  try {
    return multiSelects.map((tag) => tag.name)
  } catch (err) {
    console.log({ err })

    return []
  }
}

export const formatDiffDate = (date: string) => {
  const diff = new Date().getTime() - new Date(date).getTime()
  const progress = new Date(diff)

  if (progress.getUTCFullYear() - 1970) {
    if (progress.getUTCFullYear() - 1970 === 1) return 'a year ago'

    return `${progress.getUTCFullYear() - 1970} years ago`
  } else if (progress.getUTCMonth()) {
    if (progress.getUTCMonth() === 1) return 'a month ago'

    return `${progress.getUTCMonth()} months ago`
  } else if (progress.getUTCDate() - 1) {
    if (progress.getUTCDate() - 1 === 1) return 'a day ago'

    return `${progress.getUTCDate() - 1} days ago`
  } else {
    return 'today'
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const formatTags = (results: Record<string, any>[]) => {
  const tags = new Set<string>()
  for (const page of results) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
    for (const tag of formatMultiSelect(page.properties.tags.multi_select)) {
      tags.add(tag)
    }
  }

  return [...tags]
}
