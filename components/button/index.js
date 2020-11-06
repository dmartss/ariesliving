import { memo } from 'react'
import Link from 'next/link'
import cn from 'classnames'
import LoadingDots from 'components/loading-dots'
import s from './button.module.css'

function Button({
  children,
  invert,
  outline,
  subscribe,
  small,
  href,
  className,
  loading,
  ...props
}) {
  const rootClassName = cn(
    s.root,
    'no-drag',
    {
      [s.outline]: outline,
      [s.invert]: invert,
      [s.small]: small,
      [s.loading]: loading,
      [s.subscribe]: subscribe
    },
    className
  )

  if (href) {
    const isExternal = href && href.startsWith('http')
    const a = (
      <a className={rootClassName} href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    )

    return isExternal ? (
      a
    ) : (
      <Link href={href} passHref>
        {a}
      </Link>
    )
  }

  return (
    <button type="button" className={rootClassName} {...props}>
      <span className={s.text}>{children}</span>
      {loading && (
        <span className={s.loadingDots}>
          <LoadingDots size={4} />
        </span>
      )}
    </button>
  )
}

Button.displayName = 'Button'
export default memo(Button)
