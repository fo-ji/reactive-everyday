import { NextPage } from 'next'

import { ContentLayout } from '@/components/Layout'
import { CreateContact } from '@/features/contact/components'

const Contact: NextPage = () => (
  <ContentLayout>
    <div className='text-center'>
      <p>当ブログ、お仕事に関するお問い合わせは以下のフォームより承っております。</p>
    </div>
    <div className='p-10'>
      <CreateContact />
    </div>
  </ContentLayout>
)

export default Contact
