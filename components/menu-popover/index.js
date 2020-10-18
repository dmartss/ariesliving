import { useState, useCallback } from 'react'
import Router, { useRouter } from 'next/router'
import cn from 'classnames'
import * as PopOver from './popover-menu'
import PopOverLink from './popover-link'
import Link from 'components/link'
import styles from './menu-popover.module.css'

function MenuItems({ list, title }) {
  const { pathname } = useRouter()
  return (
    <>
      {list && (
        <>
          {title && (
            <div className={styles.header}>
              <h5 className="fp fw4">{title}</h5>
            </div>
          )}
          <div className={styles.content}>
            {list.map(({ url, title, logo, hotel }, index) => (
              <PopOver.Item key={index} active={pathname === url}>
                <Link href={url} as={url} hotel={hotel}>
                  {title}
                  {logo && logo}
                </Link>
                {index !== list.length - 1 && <PopOver.Divider />}
              </PopOver.Item>
            ))}
          </div>
        </>
      )}
    </>
  )
}
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
        hideOnClick={clickable}
        isOpen={clickable ? undefined : isOpen}
        offsetLeft={offsetLeft}
        offsetTop={0}
        onOpen={onPopOverOpen}
        to={
          <PopOver.Menu>
            <div className={styles.wrapper}>
              {primaryList && <MenuItems list={primaryList} title={primaryTitle} />}
              {secondaryList && <MenuItems list={secondaryList} title={secondaryTitle} />}
            </div>
          </PopOver.Menu>
        }
      />
    </span>
  )
}
