import { useNotificationStore } from '@/stores/notifications'

import { Notification } from './notification'

export const Notifications = () => {
  const { dismissNotification, notifications } = useNotificationStore()

  return (
    <div className='pointer-events-none fixed inset-x-0 bottom-0 z-50 flex flex-col items-end space-y-4 px-4 py-6 sm:items-start sm:p-6'>
      {notifications.map((notification) => (
        <Notification
          key={notification.id}
          notification={notification}
          onDismiss={dismissNotification}
        />
      ))}
    </div>
  )
}
