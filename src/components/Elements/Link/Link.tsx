import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { PropsWithChildren } from 'react'

interface LinkProps extends NextLinkProps, PropsWithChildren {
  className?: string
}

export const Link: React.FC<LinkProps> = ({
  children,
  className = 'hover:opacity-40',
  ...props
}) => {
  return (
    <NextLink {...props}>
      <a className={className}>{children}</a>
    </NextLink>
  )
}
