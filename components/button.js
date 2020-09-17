import { memo } from 'react'
import Link from 'next/link'
import cn from 'classnames'
import css from 'styled-jsx/css'

const cachedStyles = css`
  .btn {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-decoration: none;
    padding: var(--gap-quarter) var(--gap-half);
    margin: calc(-1 * var(--gap-quarter)) calc(-1 * var(--gap-half));
    border-radius: var(--radius);
    color: var(--accents-1);
    background-color: transparent;
    border: none;
    font-size: inherit;
    line-height: inherit;
    transition: background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
    outline: none;
  }
  .btn:hover {
    color: var(--accents-1);
    background: rgba(0, 154, 148, 0.1);
  }
  .btn.invert {
    margin: 0;
    padding: 0 3.5rem;
    height: 2.81rem;
    line-height: 2.8rem;
    border-radius: var(--radius);
    background-color: var(--black2);
    box-shadow: var(shadow-medium);
    color: var(--white);
  }
  .btn.invert:hover {
    background: var(--accents-2);
    box-shadow: var(--shadow-hover);
  }
  .btn.invert:active {
    background: var(--white);
  }
  .btn.invert.outline {
    background: var(--white);
    color: var(--black2);
    box-shadow: var(--shadow-small);
  }
  .btn.invert.outline:hover {
    box-shadow: var(--shadow-large);
  }

  .btn.vp.invert:hover {
    background: var(--vp);
  }
  .btn.ithaca.invert.outline:hover {
    background: var(--white);
    color: var(--ithaca);
  }
  .btn.ithaca.invert:hover {
    background: var(--ithaca);
  }
  .btn.vp.invert.outline:hover {
    background: var(--white);
    color: var(--vp);
  }
  .btn.treehouse.invert:hover {
    background: var(--treehouse);
  }
  .btn.treehouse.invert.outline:hover {
    background: var(--white);
    color: var(--treehouse);
  }
`

export default memo(function Button({
  children,
  invert,
  outline,
  small,
  href,
  as,
  className,
  loading,
  ...props
}) {
  const cachedClassNames = cn(className, 'btn', 'fw4 no-drag', {
    outline,
    invert,
    small,
    loading
  })

  if (href) {
    const isExternal = href && href.startsWith('http')
    const a = (
      <a
        className={cachedClassNames}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
        <style jsx>{cachedStyles}</style>
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
    <button type="button" className={cachedClassNames} {...props}>
      <span className="text">{children}</span>
      <style jsx>{cachedStyles}</style>
    </button>
  )
})
