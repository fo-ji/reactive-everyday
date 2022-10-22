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
