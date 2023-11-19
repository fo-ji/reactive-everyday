import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { PropsWithChildren } from 'react'

interface LinkProps extends NextLinkProps, PropsWithChildren {
  className?: string
  target?: string
}

export const Link = ({
  children,
  className = 'hover:opacity-40',
  target = '_self',
  ...props
}: LinkProps) => (
  <NextLink className={className} target={target} rel='noopener noreferrer' {...props}>
    {children}
  </NextLink>
)
