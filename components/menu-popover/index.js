import { useState, useCallback } from 'react'
import Router, { useRouter } from 'next/router'
import cn from 'classnames'
import Link from 'components/link'
import { HotelLogo } from 'components/icons'
import * as PopOver from './popover-menu'
import PopOverLink from './popover-link'
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
            {list.map(({ title, hotel }, index) => (
              <PopOver.Item key={index} active={pathname === `/hotels/${hotel}`}>
                <Link href={`/hotels/${hotel}`} hotel={hotel}>
                  {title}
                  <HotelLogo hotel={hotel} small />
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
  title,
  primaryList,
  primaryTitle,
  // secondaryTitle,
  // secondaryList,
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

  const rootClassName = cn(styles.menu, { [styles['is-active']]: isOpen }, className)

  return (
    <span className={rootClassName} onMouseEnter={open} onMouseLeave={close}>
      {title}
      <PopOverLink
        isOpen={isOpen}
        to={
          <PopOver.Menu>
            <div className={styles.wrapper}>
              {primaryList && <MenuItems list={primaryList} title={primaryTitle} />}
              {/* {secondaryList && <MenuItems list={secondaryList} title={secondaryTitle} />} */}
            </div>
          </PopOver.Menu>
        }
      />
    </span>
  )
}
