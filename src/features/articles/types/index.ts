import { BlockType } from 'notion-block-renderer'
import { ParsedUrlQuery } from 'querystring'

export interface Page {
  id: string
  cover: Document | null
  properties: Property
}

export interface RichText {
  annotations: Annotation
  href: string | null
  plain_text: string
}

export interface Params extends ParsedUrlQuery {
  slug: string
  tag: string
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

interface Annotation {
  bold: boolean
  code: boolean
  color: string
  italic: boolean
  strikethrough: boolean
  underline: boolean
}
