import { notion } from '@/lib'

type GetPageProps = {
  pageId: string
}

export const getPage = async ({ pageId }: GetPageProps) => {
  try {
    return await notion.pages.retrieve({ page_id: pageId })
  } catch (error) {
    console.log({ error })
    return null
  }
}
