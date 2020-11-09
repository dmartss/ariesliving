import { memo } from 'react'
import cn from 'classnames'
import { useRouter } from 'next/router'
import Banner from './banner'
import Nav from './navbar'
import { useNav } from 'lib/nav-context'
import useOnScroll from 'lib/use-on-scroll'
import { root, mobileShown, stick, fill, showBorder } from './header.module.css'

const Header = ({ sticky = true }) => {
  const { pathname } = useRouter()
  const { mobileNavShown } = useNav()
  const { headerLock, secondHeaderLock } = useOnScroll()
  const fillBg = pathname.includes('/hotels')

  const rootClassName = cn(root, {
    [mobileShown]: mobileNavShown,
    [stick]: sticky,
    [fill]: fillBg,
    [showBorder]: fillBg ? headerLock && secondHeaderLock : headerLock
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
