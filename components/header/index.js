import { memo } from 'react'
import cn from 'classnames'
import Banner from './banner'
import Nav from './navbar'
import styles from './header.module.css'
import { useNav } from 'lib/nav-context'

const Header = ({ sticky = true, home }) => {
  const { mobileNavShown } = useNav()
  return (
    <>
      <Banner />

      <header
        className={cn(styles.header, { [styles.shown]: mobileNavShown, [styles.sticky]: sticky })}
      >
        <Nav home={home} />
      </header>
    </>
  )
}
Header.displayName = 'Header'
export default memo(Header)
