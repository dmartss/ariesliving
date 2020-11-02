import { memo } from 'react'
import Link from 'next/link'
import cn from 'classnames'
import LoadingDots from '../loading-dots'
import styles from './button.module.css'

function Button({ children, invert, outline, small, href, className, loading, ...props }) {
  const rootClassName = cn(
    styles.root,
    'fw4 no-drag',
    {
      [styles.outline]: outline,
      [styles.invert]: invert,
      [styles.small]: small,
      [styles.loading]: loading
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
      <span className={styles.text}>{children}</span>
      {loading && (
        <span className={styles['loading-dots']}>
          <LoadingDots size={4} />
        </span>
      )}
    </button>
  )
}

Button.displayName = 'Button'
export default memo(Button)
