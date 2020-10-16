import { useState, useCallback } from 'react'
import Router, { useRouter } from 'next/router'
import cn from 'classnames'
import * as PopOver from './popover-menu'
import PopOverLink from './popover-link'
import Link from 'components/link'
import styles from './menu-popover.module.css'

export default function MenuPopOver({
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
      className={cn(className, styles.menu, { [styles['is-active']]: isOpen })}
      onMouseEnter={clickable ? undefined : open}
      onMouseLeave={clickable ? undefined : close}
      onClick={clickable && open}
    >
      {title}
      <PopOverLink
        withArrow
        hideOnClick={clickable}
        isOpen={clickable ? undefined : isOpen}
        offsetLeft={offsetLeft}
        offsetTop={0}
        onOpen={onPopOverOpen}
        to={
          <PopOver.Menu tipOffset={60} noPadding width={180}>
            <div className={styles.wrapper}>
              {primaryList && (
                <div>
                  {primaryTitle && (
                    <div className={styles.header}>
                      <h5 className="fp fw4">{primaryTitle}</h5>
                    </div>
                  )}
                  <div className={styles.content}>
                    {primaryList.map(({ url, title, logo, hotel }, index) => (
                      <PopOver.Item key={index} noPadding fullWidth active={pathname === url}>
                        <Link href={url} as={url} hotel={hotel}>
                          {title}
                          {logo && logo}
                        </Link>
                        {index !== primaryList.length - 1 && <PopOver.Divider />}
                      </PopOver.Item>
                    ))}
                  </div>
                  {secondaryList && (
                    <>
                      {secondaryTitle && (
                        <div className={styles.header}>
                          <h5 className="fp fw4">{secondaryTitle}</h5>
                        </div>
                      )}
                      <div className={styles.content}>
                        {secondaryList.map(({ url, title, logo }, index) => (
                          <PopOver.Item key={index} noPadding fullWidth active={pathname === url}>
                            <Link href={url} as={url}>
                              {title}
                              {logo && logo}
                            </Link>
                          </PopOver.Item>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          </PopOver.Menu>
        }
      />
    </span>
  )
}
