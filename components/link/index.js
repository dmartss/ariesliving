import { memo } from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import cn from 'classnames'

import styles from './link.module.css'

function canPrefetch(href) {
  if (!href || !href.startsWith('/')) return false
  return true
}

const Link = ({
  external,
  href,
  as,
  passHref,
  children,
  className,
  hotel,

  underline,
  gray,
  ...props
}) => {
  const { asPath } = useRouter()

  const c = cn(
    className,
    styles.reset,
    {
      [styles.selected]: asPath.includes(hotel),
      [styles.gray]: gray,
      [styles.underline]: underline
    },
    hotel
  )

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={c} {...props}>
        {children}
      </a>
    )
  }

  return (
    <>
      <NextLink
        href={href}
        as={as}
        prefetch={canPrefetch(href) ? undefined : false}
        passHref={passHref}
      >
        {passHref ? (
          children
        ) : (
          <a className={c} {...props}>
            {children}
          </a>
        )}
      </NextLink>
    </>
  )
}

Link.displayName = 'Link'
export default memo(Link)
