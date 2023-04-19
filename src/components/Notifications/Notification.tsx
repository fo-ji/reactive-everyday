import { Transition } from '@headlessui/react'
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
  XCircleIcon
} from '@heroicons/react/24/outline'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { Fragment } from 'react'

import { Button } from '../Elements/Button'

const icons = {
  error: <XCircleIcon className='h-6 w-6 text-red-500' />,
  info: <InformationCircleIcon className='h-6 w-6 text-blue-500' />,
  success: <CheckCircleIcon className='h-6 w-6 text-green-500' />,
  warning: <ExclamationCircleIcon className='h-6 w-6 text-yellow-500' />
}

interface NotificationProps {
  notification: {
    id: string
    title: string
    message?: string
    type: keyof typeof icons
  }
  onDismiss: (id: string) => void
}

export const Notification = ({
  notification: { id, title, message, type },
  onDismiss
}: NotificationProps) => (
  <div className='flex w-full flex-col items-center space-y-4 sm:items-end'>
    <Transition
      show
      as={Fragment}
      enter='transform ease-out duration-300 transition'
      enterFrom='translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2'
      enterTo='translate-y-0 opacity-100 sm:translate-x-0'
      leave='transition ease-in duration-100'
      leaveFrom='opacity-100'
      leaveTo='opacity-0'
    >
      <div className='pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5'>
        <div className='p-4' role='alert' aria-label={title}>
          <div className='flex items-start'>
            <div className='shrink-0'>{icons[type]}</div>
            <div className='ml-3 w-0 flex-1 pt-0.5'>
              <p className='text-sm font-medium text-main'>{title}</p>
              <p className='mt-1 text-sm text-placeholder'>{message}</p>
            </div>
            <div className='ml-4 flex shrink-0'>
              <Button
                onClick={() => {
                  onDismiss(id)
                }}
                className='inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
              >
                <XMarkIcon className='h-5 w-5' />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
)
