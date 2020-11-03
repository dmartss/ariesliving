import { memo } from 'react'
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

export const Item = ({ children }) => <div className={s.item}>{children}</div>

export const Divider = () => <div className={s.line} />
