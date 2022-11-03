import { NextPage } from 'next'

import { ContentLayout } from '@/components/Layout'
import { CreateContact } from '@/features/contact/components'

const Contact: NextPage = () => (
  <ContentLayout>
    <div className='text-center'>
      {/* <p>当ブログ、お仕事に関するお問い合わせは以下のフォームより承っております。</p> */}
      <p className='text-placeholder'>
        ※2022/11/03現在、開発中の為ご利用いただけませんのでご了承ください。
      </p>
    </div>
    <div className='p-5 sm:p-10'>
      <CreateContact />
    </div>
  </ContentLayout>
)

export default Contact
