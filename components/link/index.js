import { memo } from 'react'
import NextLink from 'next/link'
import cn from 'classnames'
import { useRouter } from 'next/router'
import canPrefetch from 'lib/can-prefetch'
import { reset, selected } from './link.module.css'

const Link = ({
  external,
  href,
  passHref,
  children,
  className,
  hotel,

  ...props
}) => {
  const { asPath } = useRouter()

  const rootClassName = cn(
    hotel,
    {
      [reset]: !hotel,
      [selected]: asPath.includes(hotel)
    },
    className
  )

  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={rootClassName} {...props}>
      {children}
    </a>
  ) : (
    <>
      <NextLink href={href} prefetch={canPrefetch(href) ? undefined : false} passHref={passHref}>
        {passHref ? (
          children
        ) : (
          <a className={rootClassName} {...props}>
            {children}
          </a>
        )}
      </NextLink>
    </>
  )
}

Link.displayName = 'Link'
export default memo(Link)
