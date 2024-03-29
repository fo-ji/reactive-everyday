import { CreateContact } from '@/features/contact/components'

export default function ContactPage() {
  return (
    <section>
      <div className='text-center'>
        <h1 className='text-sm font-normal tracking-wide text-paragraph sm:text-base'>
          当ブログ、お仕事に関するお問い合わせは以下のフォームより承っております。
        </h1>
      </div>
      <div className='p-5 sm:p-10'>
        <CreateContact />
      </div>
    </section>
  )
}
