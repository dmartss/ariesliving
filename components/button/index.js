import { memo } from 'react'
import Link from 'next/link'
import cn from 'classnames'
import LoadingDots from '../loading-dots'
import cachedStyles from './button-styles'

export default memo(function Button({
  children,
  invert,
  outline,
  small,
  href,
  className,
  amp,
  loading,
  ...props
}) {
  const cachedClassNames = cn(className, 'btn', 'fw4 no-drag', { outline, invert, small, loading })

  if (href) {
    const isExternal = href && href.startsWith('http')
    const a = (
      <a className={cachedClassNames} href={href} {...props}>
        {children}
        <style jsx>{cachedStyles}</style>
      </a>
    )

    return amp || isExternal ? (
      a
    ) : (
      <Link href={href} passHref>
        {a}
      </Link>
    )
  }

  return (
    <button type="button" className={cachedClassNames} {...props}>
      <span className="text">{children}</span>
      {loading && (
        <span className="loading-dots">
          <LoadingDots size={4} />
        </span>
      )}
      <style jsx>{cachedStyles}</style>
    </button>
  )
})
