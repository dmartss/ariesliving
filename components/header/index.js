import { memo } from 'react'
import cn from 'classnames'
import Banner from './banner'
import Nav from './navbar'
import { useNav } from 'lib/nav-context'
import useOnScroll from 'lib/use-on-scroll'
import styles from './header.module.css'

const Header = ({ sticky = true, fillBg }) => {
  const { mobileNavShown } = useNav()
  const { headerLock, secondHeaderLock } = useOnScroll()

  const rootClassName = cn(styles.root, {
    [styles.mobileNavShown]: mobileNavShown,
    [styles.sticky]: sticky,
    [styles.fillBg]: fillBg,
    [styles.showBorder]: fillBg ? headerLock && secondHeaderLock : headerLock
  })

  return (
    <>
      <Banner />

      <header className={rootClassName}>
        <Nav />
      </header>
    </>
  )
}
Header.displayName = 'Header'

export default memo(Header)
