import { Page, RichText } from '@/features/articles/types'

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
  if (!cover) return '/no_image.png'
  if (cover.file) return cover.file.url
  if (cover.external) return cover.external.url
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
