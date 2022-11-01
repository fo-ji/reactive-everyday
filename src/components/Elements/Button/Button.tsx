import { ButtonHTMLAttributes, PropsWithChildren } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, PropsWithChildren {}

export const Button: React.FC<ButtonProps> = ({
  children,
  className = 'rounded bg-main py-2 px-4 font-bold text-white hover:opacity-75',
  type = 'button',
  ...props
}) => (
  <button className={className} type={type} {...props}>
    {children}
  </button>
)
