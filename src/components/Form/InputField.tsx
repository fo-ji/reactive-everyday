import type { UseFormRegisterReturn } from 'react-hook-form'

import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper'

interface InputFieldProps extends FieldWrapperPassThroughProps {
  placeholder?: string
  registration: Partial<UseFormRegisterReturn>
  type?: 'text' | 'email'
}

export const InputField: React.FC<InputFieldProps> = ({
  error,
  label,
  placeholder,
  registration,
  type = 'text'
}) => (
  <FieldWrapper label={label} error={error}>
    <input
      type={type}
      className='mt-1 block w-full rounded-md border-gray-300 text-paragraph shadow-sm placeholder:text-placeholder placeholder:text-opacity-50'
      placeholder={placeholder}
      {...registration}
    />
  </FieldWrapper>
)
