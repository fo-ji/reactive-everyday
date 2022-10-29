import { PropsWithChildren } from 'react'
import type { FieldError } from 'react-hook-form'

export interface FieldWrapperPassThroughProps {
  error?: FieldError | undefined
  label?: string
}

interface FieldWrapperProps extends FieldWrapperPassThroughProps, PropsWithChildren {}

export const FieldWrapper: React.FC<FieldWrapperProps> = ({ children, error, label }) => {
  return (
    <div>
      <label className='block'>
        <span className='text-placeholder'>{label}</span>
        {children}
      </label>
      <div role='alert' className='h-8 py-2 text-right text-sm font-semibold text-red-500'>
        {error?.message}
      </div>
    </div>
  )
}
