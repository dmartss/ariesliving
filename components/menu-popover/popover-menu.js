import { memo } from 'react'
import cn from 'classnames'
import { Triangle } from 'components/icons'
import styles from './popover-menu.module.css'

export const Menu = memo(({ children, innerRef }) => (
  <div className={styles.popover} ref={innerRef}>
    <div className={styles.triangle}>
      <Triangle />
    </div>
    <div className={styles.menu}>{children}</div>
  </div>
))

export const Item = memo(({ active, children }) => (
  <div className={cn(styles.item, 'f5', { [styles.active]: active })}>{children}</div>
))

export const Divider = () => <div className={styles.line} />
