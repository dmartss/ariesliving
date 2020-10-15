import { useState, useCallback } from 'react'
import cn from 'classnames'
import Router, { useRouter } from 'next/router'

import * as PopOver from './popover-menu'
import PopOverLink from './popover-link'
import Link from './link'

export default function MenuPopOver({
  dashboard,
  clickable,
  title,
  primaryTitle,
  secondaryTitle,
  primaryList,
  secondaryList,
  offsetLeft,
  className
}) {
  const { pathname } = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  let timer

  const open = () => {
    timer = setTimeout(() => setIsOpen(true), 100)
  }

  const close = () => {
    clearTimeout(timer)
    setIsOpen(false)
  }

  const onPopOverOpen = useCallback(() => {
    Router.prefetch('/hotels/villa-paradiso')
    Router.prefetch('/hotels/ithaca')
    Router.prefetch('/hotels/treehouse')
  }, [])

  return (
    <span
      className={cn(className, 'f-reset', { 'is-active': isOpen })}
      onMouseEnter={clickable ? undefined : open}
      onMouseLeave={clickable ? undefined : close}
      onClick={clickable && open}
    >
      {title}
      <PopOverLink
        withArrow={!dashboard}
        hideOnClick={clickable}
        isOpen={clickable ? undefined : isOpen}
        offsetLeft={offsetLeft}
        offsetTop={0}
        onOpen={onPopOverOpen}
        to={
          <PopOver.Menu tipOffset={60} noPadding width={180}>
            <div className="wrapper">
              {primaryList && (
                <aside className="left">
                  {primaryTitle && (
                    <div className="header">
                      <h5>{primaryTitle}</h5>
                    </div>
                  )}
                  <div className="content">
                    {primaryList.map((item, index) => (
                      <PopOver.Item
                        key={index}
                        noPadding
                        separated={item.separated}
                        fullWidth
                        active={pathname === item.url}
                      >
                        <Link href={item.href || item.url} as={item.url}>
                          {item.title}
                        </Link>
                      </PopOver.Item>
                    ))}
                  </div>
                </aside>
              )}

              {secondaryList && (
                <aside className="right">
                  {secondaryTitle && (
                    <div className="header">
                      <h5>{secondaryTitle}</h5>
                    </div>
                  )}
                  <div className="content">
                    {secondaryList.map((item, index) => {
                      return (
                        <PopOver.Item
                          key={index}
                          noPadding
                          fullWidth
                          active={pathname === item.url}
                        >
                          <Link href={item.url}>{item.title}</Link>
                        </PopOver.Item>
                      )
                    })}
                  </div>
                </aside>
              )}
            </div>
          </PopOver.Menu>
        }
      />
      <style jsx>{`
        span {
          display: none;
          visibility: hidden;
          user-select: none;
          border: 0;
          color: var(--aries-fg);
          padding: 0 10px;
          transition: all 200ms ease;
          cursor: pointer;
        }

        span:hover,
        span.is-active :global(.wrap .link .arrow),
        span.is-active {
          color: var(--aries-fg);
          fill: var(--aries-fg);
        }

        .wrapper {
          display: grid;
          grid-template-columns: ${primaryList && secondaryList ? '1fr 1fr' : '1fr'};
          grid-template-areas: 'left right' 'footer footer';
          border-radius: 5px;
          overflow: hidden;
        }

        .header h5 {
          margin: 0;
          color: var(--aries-fg);
          font-weight: 500;
        }

        .footer:hover .arrow {
          animation: arrowAnimation 1s cubic-bezier(0.42, 0, 0.58, 1) infinite;
        }

        @keyframes arrowAnimation {
          50% {
            transform: translateX(70%);
          }
          80%,
          100% {
            opacity: 0;
          }
        }

        .footer,
        .header + .content {
          border-top: 1px solid var(--accents-2);
        }

        .header,
        .content,
        .footer {
          padding: 19px;
        }

        .content :global(.item:first-child a) {
          padding-top: 0;
        }

        .content :global(.item:last-child a) {
          padding-bottom: 0;
        }

        .content :global(.badge) {
          margin-left: 8px;
          padding: 0 5px;
        }

        :global(.item.dark .badge) {
          background: #333;
          color: #999;
        }

        .wrapper .left {
          grid-area: left;
        }

        .wrapper .right {
          grid-area: right;
          background-color: var(--accents-1);
        }

        .footer {
          grid-area: footer;
          display: flex;
          align-items: center;
        }

        .footer span {
          color: var(--accents-5);
          padding: 0;
          vertical-align: middle;
          line-height: 20px;
          transition: color 200ms ease;
        }

        .footer:hover span {
          color: var(--aries-fg);
        }

        .footer .label,
        .footer .icon,
        .footer .arrow {
          display: flex;
        }

        .footer .icon {
          margin-right: 10px;
        }

        .footer .label,
        .footer .arrow {
          margin-left: 10px;
        }

        @media (min-width: 951px) {
          span {
            display: flex;
            visibility: visible;
            align-items: center;
          }
        }
      `}</style>
    </span>
  )
}
