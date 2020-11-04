import { memo } from 'react'
import { Triangle } from 'components/icons'
import { popover, triangle, menu, item, line } from './popover-menu.module.css'

export const Menu = memo(({ children, innerRef }) => (
  <div className={popover} ref={innerRef}>
    <div className={triangle}>
      <Triangle />
    </div>
    <div className={menu}>{children}</div>
  </div>
))

export const Item = ({ children }) => <div className={item}>{children}</div>

export const Divider = () => <div className={line} />
