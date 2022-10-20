export interface Page {
  id: string
  cover: Document | null
  properties: Property
}

interface Document {
  external?: { url: string }
  file?: { url: string }
}

interface Property {
  name: { title: RichText[] }
  createdBy: { rich_text: RichText[] }
  isReleased: { checkbox: boolean }
  releasedAt: { date: { start: string } }
  slug: { rich_text: RichText[] }
  tags: { multi_select: [{ name: string }] }
}

interface RichText {
  annotations: Annotation
  href: string | null
  plain_text: string
}

interface Annotation {
  bold: boolean
  code: boolean
  color: string
  italic: boolean
  strikethrough: boolean
  underline: boolean
}
