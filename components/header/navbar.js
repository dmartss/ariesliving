import { memo } from 'react'
import { SkipNavLink } from '@reach/skip-nav'
import Link from 'components/link'
import cn from 'classnames'
import Logo, { Hamburger, ThemeIcon } from 'components/icons'
import Container from 'components/container'
import styleUtils from 'styles/utils/utils.module.css'
import styles from './navbar.module.css'
import { useNav } from 'lib/nav-context'
import NavLinks from './nav-links'
import HeaderFeedback from 'components/feedback'

function Navbar({ home }) {
  const { mobileNavShown, toggle } = useNav()

  return (
    <Container center>
      <SkipNavLink tabIndex="0" />
      <h1 className="visually-hidden" aria-hidden="true">
        Aries Living
      </h1>

      <nav className={cn(styles.desktopNav, 'f-reset')}>
        <div className={styles.links}>
          <Link
            href="/"
            className={cn(styles.logo, styleUtils.appear, styleUtils.first, {
              [styles['not-home']]: !home
            })}
            title="Go to the homepage"
          >
            <Logo />
          </Link>

          <div className={styles['not-logo']}>
            <div className={cn(styles.feedback, styleUtils.appear, styleUtils.second)}>
              <HeaderFeedback email />
            </div>
            <NavLinks desktop home={home} />
          </div>

          <ThemeIcon
            color="var(--aries-fg)"
            className={cn(
              styleUtils['theme-icon'],
              styleUtils.appear,
              { [styleUtils.eighth]: home, [styleUtils.sixth]: !home },
              styles['mobile-absolute'],
              styles.right
            )}
          />

          <span
            className={cn(styles.toggle, styles['mobile-absolute'], styles.left)}
            onClick={toggle}
          >
            <Hamburger mobileNavShown={mobileNavShown} />
          </span>
        </div>
      </nav>

      <nav className={cn(styles.mobileNav, { [styles.active]: mobileNavShown })}>
        <NavLinks mobile home={home} />
      </nav>
    </Container>
  )
}

Navbar.displayName = 'NavBar'
export default memo(Navbar)
