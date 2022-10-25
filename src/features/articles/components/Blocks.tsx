import NotionBlocks, { BlockType } from 'notion-block-renderer'
import { monokai } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

interface BlocksProps {
  blocks: BlockType[]
}

export const Blocks: React.FC<BlocksProps> = ({ blocks }) => {
  return <NotionBlocks blocks={blocks} isCodeHighlighter syntaxHighlighterCSS={monokai} />
}
