import { memo } from 'react'
import Link from 'next/link'
import cn from 'classnames'
import LoadingDots from './loading-dots'
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
    color: var(--aries-1);
    background-color: transparent;
    border: none;
    font-size: inherit;
    line-height: inherit;
    transition: background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
    outline: none;
  }
  .btn:hover {
    color: var(--aries-1);
    background: rgba(0, 154, 148, 0.1);
  }
  .btn.invert {
    margin: 0;
    padding: 0 3.5rem;
    height: 2.81rem;
    line-height: 2.8rem;
    border: none;
    background: var(--aries-bg);
    color: var(--accents-8);
    box-shadow: var(--shadow-small);
  }
  .btn.invert:hover {
    box-shadow: var(--shadow-medium);
    color: var(--aries-1);
  }
  .btn.invert:active {
    background: var(--aries-bg);
  }
  .btn.invert.outline {
    background-color: var(--accents-8);
    box-shadow: var(--shadow-small);
    border: 1px solid var(--accents-8);
    color: var(--aries-bg);
  }
  .btn.invert.outline:hover {
    background-color: transparent;
    outline: none;
    border-color: var(--aries-1);
    color: var(--aries-1);
  }
  .btn.small {
    font-size: 0.875rem;
    height: 1.5rem;
    padding: 0 0.75rem;
    line-height: inherit;
    border-radius: 5px;
  }
  .btn.loading {
    background: #fafafa;
    color: #888888;
    border: 1px solid #000;
    border-color: #eaeaea;
    box-shadow: none;
    cursor: default;
    pointer-events: none;
  }
  .btn.loading > .text {
    visibility: hidden;
  }
  .btn > .loading-dots {
    position: absolute;
  }
`

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
