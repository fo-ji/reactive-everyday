import type { UseFormRegisterReturn } from 'react-hook-form'

import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper'

interface TextAreaFieldProps extends FieldWrapperPassThroughProps {
  placeholder?: string
  registration: Partial<UseFormRegisterReturn>
}

export const TextAreaField: React.FC<TextAreaFieldProps> = ({
  error,
  label,
  placeholder,
  registration
}) => (
  <FieldWrapper label={label} error={error}>
    <textarea
      className='mt-1 block w-full rounded-md border-gray-300 text-paragraph shadow-sm placeholder:text-placeholder placeholder:text-opacity-50'
      rows={3}
      placeholder={placeholder}
      {...registration}
    />
  </FieldWrapper>
)
