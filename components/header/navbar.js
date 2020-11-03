import { memo, useCallback } from 'react'
import { SkipNavLink } from '@reach/skip-nav'
import cn from 'classnames'
import Container from 'components/container'
import HeaderFeedback from 'components/feedback'
import Logo, { Hamburger, ThemeIcon } from 'components/icons'
import Link from 'components/link'
import NavLinks from './nav-links'
import { useNav } from 'lib/nav-context'
import { useRouter } from 'next/router'
import s from './navbar.module.css'
import sUtils from 'styles/utils/utils.module.css'

function Navbar() {
  const { mobileNavShown, toggle } = useNav()

  const { pathname } = useRouter()
  const home = pathname === '/'

  const classes = useCallback(
    number => {
      if (!home) return cn(sUtils.appear, sUtils[number])
      return null
    },
    [home]
  )

  return (
    <Container>
      <SkipNavLink tabIndex="0" />
      <h1 className="visually-hidden" aria-hidden="true">
        Aries Living
      </h1>

      <nav className={cn(s.desktopNav)}>
        <div className={s.links}>
          <Link
            href="/"
            className={cn(s.logo, classes('first'), { [s['not-home']]: !home })}
            title="Go to the homepage"
          >
            <Logo />
          </Link>

          <div className={s['not-logo']}>
            <div className={cn(s.feedback, classes('second'))}>
              <HeaderFeedback email />
            </div>
            <NavLinks desktop home={home} />
          </div>

          <span className={cn(sUtils['theme-icon'], classes('sixth'), s.absolute, s.right)}>
            <ThemeIcon />
          </span>

          <span className={cn(s.toggle, s.absolute, s.left)} onClick={toggle}>
            <Hamburger mobileNavShown={mobileNavShown} />
          </span>
        </div>
      </nav>

      <nav className={cn(s.mobileNav, { [s.active]: mobileNavShown })}>
        <NavLinks mobile home={home} />
      </nav>
    </Container>
  )
}

Navbar.displayName = 'NavBar'
export default memo(Navbar)
