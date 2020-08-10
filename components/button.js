import Link from 'next/link'
import cn from 'classnames'
import css from 'styled-jsx/css'
import withPure from 'components/hoc/pure'

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
    background-color: var(--accents-1);
    box-shadow: 0 4px 14px 0 rgba(0, 154, 148, 0.39);
    color: white;
  }
  .btn.invert:hover {
    background: var(--accents-1);
    box-shadow: 0 6px 20px rgba(0, 154, 148, 0.23);
  }
  .btn.invert:active {
    background: var(--accents-2);
  }
  .btn.invert.outline {
    background: var(--white);
    color: #696969;
    box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.1);
  }
  .btn.invert.outline:hover {
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 6px 20px rgba(93, 93, 93, 0.23);
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

export default withPure(function Button({
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
      <a className={cachedClassNames} href={href} {...props}>
        {children}
        <style jsx>{cachedStyles}</style>
      </a>
    )

    return isExternal ? (
      a
    ) : (
      <Link href={href} as={as} passHref>
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
