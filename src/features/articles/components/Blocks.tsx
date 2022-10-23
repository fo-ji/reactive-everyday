import NotionBlocks, { BlockType } from 'notion-block-renderer'

interface BlocksProps {
  blocks: BlockType[]
}

export const Blocks: React.FC<BlocksProps> = ({ blocks }) => {
  return <NotionBlocks blocks={blocks} isCodeHighlighter />
}
