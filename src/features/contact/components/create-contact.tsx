'use client'

import * as z from 'zod'

import { Button } from '@/components/Elements/Button'
import { Form, InputField, TextAreaField } from '@/components/Form'

import type { CreateContactDTO } from '../api/create-contact'
import { useCreateContact } from '../api/create-contact'

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
  const { createContact } = useCreateContact()

  return (
    <Form<CreateContactDTO['data'], typeof schema>
      onSubmit={async (values) => {
        await createContact({
          data: values
        })
      }}
      schema={schema}
    >
      {({ formState, register }) => (
        <>
          <InputField
            label='Name'
            error={formState.errors['name']}
            registration={register('name')}
            placeholder='例）山田 太郎'
          />
          <InputField
            label='Email'
            error={formState.errors['email']}
            registration={register('email')}
            placeholder='例）taro@example.com'
          />
          <InputField
            label='Title'
            error={formState.errors['title']}
            registration={register('title')}
            placeholder='例）〇〇月〇〇日の記事について'
          />
          <TextAreaField
            label='Message'
            error={formState.errors['message']}
            registration={register('message')}
            placeholder='例）〇〇の記事の中で・・・'
          />
          <div className='text-center'>
            <Button type='submit'>Submit</Button>
          </div>
        </>
      )}
    </Form>
  )
}
