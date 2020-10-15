import React from 'react'
import NextLink from 'next/link'
import canPrefetch from 'lib/can-prefetch'
import cn from 'classnames'
import styles from './link.module.css'

import { IconAnchor, IconExternal } from 'components/icons'

const External = props => {
  const { href, icon, color, underline, tab = true, children, ...restProps } = props

  delete restProps.external

  return (
    <a
      href={href}
      target={tab ? '_blank' : undefined}
      rel={tab ? 'noopener noreferrer' : undefined}
      className={cn(styles.external, { [styles.color]: color, [styles.underline]: underline })}
      {...restProps}
    >
      {children}

      {icon && (
        <i>
          <IconExternal size="1em" />
        </i>
      )}
    </a>
  )
}

const Internal = props => {
  const { as, href, passHref, shallow, color, underline, children, ...restProps } = props
  let { prefetch = true } = props

  if (href && !href.startsWith('/')) prefetch = false

  const a = (
    <a
      {...restProps}
      className={cn(styles.internal, { [styles.color]: color, [styles.underline]: underline })}
    >
      {children}
    </a>
  )

  if (!href) return a

  return (
    <NextLink
      href={href}
      passHref={passHref}
      as={as}
      shallow={shallow}
      prefetch={prefetch ? undefined : false}
    >
      {a}
    </NextLink>
  )
}

const Anchor = props => {
  const { as, href, passHref, shallow, icon, color, underline, children, ...restProps } = props

  return (
    <NextLink href={href} passHref={passHref} as={as} shallow={shallow}>
      <a
        className={cn(styles.anchor, { [styles.color]: color, [styles.underline]: underline })}
        {...restProps}
      >
        {icon && (
          <i>
            <IconAnchor size="1em" />
          </i>
        )}

        {children}
      </a>
    </NextLink>
  )
}

const Link = props => {
  const { external = false, anchor = false, ...restProps } = props

  // We use restProps.href instead of destructuring href
  // so that it's easier to pass along the rest of the props
  // without applying 'external' and 'anchor' props to the DOM
  if (!restProps.href && !restProps.onClick) {
    throw new Error('Links must include an href or onClick prop.')
  }

  if (external) {
    return <External color {...restProps} />
  } else if (restProps.href && !canPrefetch(restProps.href)) {
    // If we cannot prefetch this href, it should be external
    return <External color {...restProps} tab={restProps.tab || false} />
  }

  // If the link begins with # but is not a no-op link, it is an anchor link
  if (anchor || (restProps.href && restProps.href.startsWith('#') && restProps.href !== '#')) {
    return <Anchor color {...restProps} />
  }

  return <Internal color {...restProps} />
}

export default Link
