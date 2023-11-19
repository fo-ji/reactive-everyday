'use client'

import { useNotificationStore } from '@/stores/notifications'

export interface CreateContactDTO {
  data: { name: string; title: string; email: string; message: string }
}

export const useCreateContact = () => {
  const { addNotification } = useNotificationStore()

  const createContact = async ({ data }: CreateContactDTO) => {
    try {
      const res = await fetch('/api/mails/send', {
        body: JSON.stringify(data),
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        method: 'POST'
      })

      if (!res.ok) {
        throw new Error(res.statusText)
      }

      addNotification({
        title: '送信しました',
        type: 'success'
      })
    } catch (error) {
      addNotification({
        title: '送信が失敗しました',
        message: '恐れ入りますが、時間をおいて再度お試しください',
        type: 'error'
      })
    }
  }
  return { createContact }
}
