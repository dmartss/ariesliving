import { useState, useCallback } from 'react'
import Router from 'next/router'
import cn from 'classnames'
import Link from 'components/link'
import { HotelLogo } from 'components/icons'
import * as PopOver from './popover-menu'
import PopOverLink from './popover-link'
import s from './menu-popover.module.css'

function MenuItems({ list, title }) {
  return (
    <>
      {list && (
        <>
          {title && (
            <div className={s.header}>
              <h5 className="fp fw4">{title}</h5>
            </div>
          )}
          <div className={s.content}>
            {list.map(({ title, hotel }, i) => (
              <PopOver.Item key={i}>
                <Link href={`/hotels/${hotel}`} hotel={hotel}>
                  {title}
                  <HotelLogo hotel={hotel} small />
                </Link>
                {i !== list.length - 1 && <PopOver.Divider />}
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

  const onPopOverOpen = useCallback(() => {
    Router.prefetch('/hotels/villa-paradiso')
    Router.prefetch('/hotels/ithaca-south-beach')
    Router.prefetch('/hotels/treehouse')
  }, [])

  const rootClassName = cn(s.menu, { [s['is-active']]: isOpen }, className)

  return (
    <span className={rootClassName} onMouseEnter={open} onMouseLeave={close}>
      {title}
      <PopOverLink
        isOpen={isOpen}
        onOpen={onPopOverOpen}
        to={
          <PopOver.Menu>
            <div className={s.wrapper}>
              {primaryList && <MenuItems list={primaryList} title={primaryTitle} />}
              {/* {secondaryList && <MenuItems list={secondaryList} title={secondaryTitle} />} */}
            </div>
          </PopOver.Menu>
        }
      />
    </span>
  )
}
