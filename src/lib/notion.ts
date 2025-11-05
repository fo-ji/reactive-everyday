import { Client } from '@notionhq/client'
import { CLIENT_KEY } from '@/config'

export const notion = new Client({ auth: CLIENT_KEY })
