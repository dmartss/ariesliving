import { memo } from 'react'
import cn from 'classnames'
import Banner from './banner'
import Nav from './navbar'
import styles from './header.module.css'

const Header = ({ sticky = true, home }) => {
  return (
    <>
      <Banner />

      <header
        className={cn(styles.header, {
          [styles.sticky]: sticky,
          [styles.hideBorder]: !home
        })}
      >
        <Nav home={home} />
      </header>
    </>
  )
}
Header.displayName = 'Header'
export default memo(Header)
