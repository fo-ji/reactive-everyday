import type { UseFormRegisterReturn } from 'react-hook-form'

import { FieldWrapper, FieldWrapperPassThroughProps } from './field-wrapper'

interface TextAreaFieldProps extends FieldWrapperPassThroughProps {
  placeholder?: string
  registration: Partial<UseFormRegisterReturn>
}

export const TextAreaField = ({ error, label, placeholder, registration }: TextAreaFieldProps) => (
  <FieldWrapper label={label} error={error}>
    <textarea
      className='mt-1 block w-full rounded-md border-gray-300 text-paragraph shadow-sm placeholder:text-placeholder placeholder:text-opacity-50'
      rows={3}
      placeholder={placeholder}
      {...registration}
    />
  </FieldWrapper>
)
