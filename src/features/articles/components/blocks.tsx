'use client'

import { tomorrowNightEighties } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import type { BlockType } from 'notion-block-renderer'
import NotionBlocks from 'notion-block-renderer'

interface BlocksProps {
  blocks: BlockType[]
}

export const Blocks = ({ blocks }: BlocksProps) => (
  <NotionBlocks blocks={blocks} isCodeHighlighter syntaxHighlighterCSS={tomorrowNightEighties} />
)
