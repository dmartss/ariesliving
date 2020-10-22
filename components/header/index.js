import { memo } from 'react'
import cn from 'classnames'
import Banner from './banner'
import Nav from './navbar'
import { useNav } from 'lib/nav-context'
import styles from './header.module.css'

const Header = ({ sticky = true, hideBorder }) => {
  const { mobileNavShown } = useNav()
  return (
    <>
      <Banner />

      <header
        className={cn(styles.header, {
          [styles.shown]: mobileNavShown,
          [styles.sticky]: sticky,
          [styles.hideBorder]: hideBorder
        })}
      >
        <Nav />
      </header>
    </>
  )
}
Header.displayName = 'Header'

export default memo(Header)
