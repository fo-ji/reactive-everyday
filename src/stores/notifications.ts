import { nanoid } from 'nanoid'
import create from 'zustand'

interface Notification {
  id: string
  title: string
  message?: string
  type: 'info' | 'warning' | 'success' | 'error'
}

interface NotificationsStore {
  addNotification: (notification: Omit<Notification, 'id'>) => void
  dismissNotification: (id: string) => void
  notifications: Notification[]
}

export const useNotificationStore = create<NotificationsStore>((set) => ({
  addNotification: (notification) =>
    set((state) => ({
      notifications: [...state.notifications, { id: nanoid(), ...notification }]
    })),
  dismissNotification: (id) =>
    set((state) => ({
      notifications: state.notifications.filter((notification) => notification.id !== id)
    })),
  notifications: []
}))
