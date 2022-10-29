import * as z from 'zod'

import { Form, InputField, TextAreaField } from '@/components/Form'

interface CreateContactDTO {
  data: { name: string; title: string; email: string; message: string }
}

const schema = z.object({
  name: z
    .string()
    .min(1, { message: '必須項目です' })
    .max(50, { message: '50文字以内で入力してください' }),
  title: z
    .optional(z.string().max(100, { message: '100文字以内に入力してください' }))
    .or(z.literal('')),
  email: z
    .string()
    .min(1, { message: '必須項目です' })
    .email({ message: 'メールアドレスの形式で入力してください' }),
  message: z
    .string()
    .min(1, { message: '必須項目です' })
    .max(1000, { message: '1000文字以内に入力してください' })
})

export const CreateContact: React.FC = () => {
  return (
    <Form<CreateContactDTO['data'], typeof schema>
      onSubmit={(values) => {
        console.log({ values })
      }}
      schema={schema}
    >
      {({ formState, register }) => (
        <>
          <InputField
            label='Name'
            error={formState.errors['name']}
            registration={register('name')}
            placeholder='山田 太郎'
          />
          <InputField
            label='Email'
            error={formState.errors['email']}
            registration={register('email')}
            placeholder='taro@example.com'
          />
          <InputField
            label='Title'
            error={formState.errors['title']}
            registration={register('title')}
            placeholder='taro@example.com'
          />
          <TextAreaField
            label='Message'
            error={formState.errors['message']}
            registration={register('message')}
            placeholder='〇〇の記事の中で・・・'
          />
          <button
            className='rounded bg-main py-2 px-4 font-bold text-white hover:opacity-75'
            type='submit'
          >
            Submit
          </button>
        </>
      )}
    </Form>
  )
}
