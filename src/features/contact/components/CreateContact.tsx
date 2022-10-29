import { yupResolver } from '@hookform/resolvers/yup'
import { SyntheticEvent } from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import type { InferType } from 'yup'
import * as yup from 'yup'

const regFormSchema = yup.object({
  name: yup.string().max(50, '50文字以内に入力してください').required('必須項目です'),
  title: yup.string().max(100, '100文字以内に入力してください'),
  email: yup.string().email('メールアドレスの形式で入力してください').required('必須項目です'),
  message: yup.string().max(1000, '1000文字以内に入力してください').required('必須項目です')
})

type RegFormSchema = InferType<typeof regFormSchema>

export const CreateContact: React.FC = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset
  } = useForm<RegFormSchema>({
    defaultValues: {
      name: '',
      title: '',
      email: '',
      message: ''
    },
    resolver: yupResolver(regFormSchema)
  })

  const onSubmit: SubmitHandler<RegFormSchema> = (data) => {
    console.log({ data })
  }

  const onReset = (e: SyntheticEvent) => {
    e.stopPropagation()
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label className='block'>
          <span className='text-placeholder'>Name</span>
          <input
            type='text'
            className='mt-1 block w-full rounded-md border-gray-300 text-paragraph shadow-sm placeholder:text-placeholder placeholder:text-opacity-50'
            placeholder='山田 太郎'
            {...register('name')}
          />
        </label>
        <div role='alert' className='h-8 py-2 text-right text-sm font-semibold text-red-500'>
          {errors.name?.message}
        </div>
      </div>
      <div>
        <label className='block'>
          <span className='text-placeholder'>Email</span>
          <input
            type='email'
            className='mt-1 block w-full rounded-md border-gray-300 text-paragraph shadow-sm placeholder:text-placeholder placeholder:text-opacity-50'
            placeholder='taro@example.com'
            {...register('email')}
          />
        </label>
        <div role='alert' className='h-8 py-2 text-right text-sm font-semibold text-red-500'>
          {errors.email?.message}
        </div>
      </div>
      <div>
        <label className='block'>
          <span className='text-placeholder'>Title</span>
          <input
            type='text'
            className='mt-1 block w-full rounded-md border-gray-300 text-paragraph shadow-sm placeholder:text-placeholder placeholder:text-opacity-50'
            placeholder='〇月〇日の記事について'
            {...register('title')}
          />
        </label>
        <div role='alert' className='h-8 py-2 text-right text-sm font-semibold text-red-500'>
          {errors.title?.message}
        </div>
      </div>
      <div>
        <label className='block'>
          <span className='text-placeholder'>Message</span>
          <textarea
            className='mt-1 block w-full rounded-md border-gray-300 text-paragraph shadow-sm placeholder:text-placeholder placeholder:text-opacity-50'
            rows={3}
            placeholder='〇〇の記事の中で・・・'
            {...register('message')}
          ></textarea>
        </label>
        <div role='alert' className='h-8 py-2 text-right text-sm font-semibold text-red-500'>
          {errors.message?.message}
        </div>
      </div>
      <button
        className='rounded bg-main py-2 px-4 font-bold text-white hover:opacity-75'
        type='submit'
      >
        Submit
      </button>
    </form>
  )
}
