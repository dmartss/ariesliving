import { memo } from 'react'
import cn from 'classnames'
import { Triangle } from 'components/icons'
import s from './popover-menu.module.css'

export const Menu = memo(({ children, innerRef }) => (
  <div className={s.popover} ref={innerRef}>
    <div className={s.triangle}>
      <Triangle />
    </div>
    <div className={s.menu}>{children}</div>
  </div>
))

export const Item = memo(({ active, children }) => (
  <div className={cn(s.item, 'f5', { [s.active]: active })}>{children}</div>
))

export const Divider = () => <div className={s.line} />
