import { useState, useCallback } from 'react'
import Router from 'next/router'
import cn from 'classnames'
import Text from 'components/text'
import Link from 'components/link'
import { HotelLogo } from 'components/icons'
import * as PopOver from './popover-menu'
import PopOverLink from './popover-link'
import { header, content, menu, wrapper, isActive } from './menu-popover.module.css'

function MenuItems({ list, title }) {
  return (
    <>
      {title && (
        <div className={header}>
          <Text variant="h5" color="fp" weight="fw4">
            {title}
          </Text>
        </div>
      )}
      <div className={content}>
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
    Router.prefetch('/hotels/eivissa')
  }, [])

  const rootClassName = cn(menu, { [isActive]: isOpen }, className)

  return (
    <span className={rootClassName} onMouseEnter={open} onMouseLeave={close}>
      {title}
      <PopOverLink
        isOpen={isOpen}
        onOpen={onPopOverOpen}
        to={
          <PopOver.Menu>
            <div className={wrapper}>
              {primaryList && <MenuItems list={primaryList} title={primaryTitle} />}
              {/* {secondaryList && <MenuItems list={secondaryList} title={secondaryTitle} />} */}
            </div>
          </PopOver.Menu>
        }
      />
    </span>
  )
}
