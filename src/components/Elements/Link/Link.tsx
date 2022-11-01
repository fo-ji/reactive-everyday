import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { PropsWithChildren } from 'react'

interface LinkProps extends NextLinkProps, PropsWithChildren {
  className?: string
  target?: string
}

export const Link: React.FC<LinkProps> = ({
  children,
  className = 'hover:opacity-40',
  target = '_self',
  ...props
}) => (
  <NextLink {...props}>
    <a className={className} target={target} rel='noopener noreferrer'>
      {children}
    </a>
  </NextLink>
)
