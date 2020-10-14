import { memo, useState, useEffect } from 'react'
import { SkipNavLink } from '@reach/skip-nav'
import Link from 'components/link'
import cn from 'classnames'
import styleUtils from 'components/utils.module.css'
import Logo, { Hamburger, ThemeIcon } from 'components/icons'
import Container from 'components/container'
import HeaderFeedback from 'components/feedback'
import Router from 'next/router'
import styles from './navbar.module.css'

function Navbar({ home }) {
  const [mobileNavShown, setMobileNavShown] = useState(false)

  const toggle = () => setMobileNavShown(!mobileNavShown)
  const done = () => setMobileNavShown(false)

  useEffect(() => {
    Router.events.on('hashChangeComplete', done)
    Router.events.on('routeChangeComplete', done)

    return () => {
      Router.events.off('hashChangeComplete', done)
      Router.events.off('routeChangeComplete', done)
    }
  }, [])

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
            className={cn(styles.logo, styleUtils.appear, styleUtils['appear-first'], {
              [styles['not-home']]: !home
            })}
            title="Go to the homepage"
          >
            <Logo />
          </Link>

          <div className={styles['not-logo']}>
            {home ? (
              <>
                <div
                  className={cn(
                    styles['header-feedback'],
                    styleUtils.appear,
                    styleUtils['appear-second']
                  )}
                >
                  <HeaderFeedback email />
                </div>

                <Link
                  href="#about"
                  className={cn('fp', styleUtils.appear, styleUtils['appear-third'])}
                  title="About"
                >
                  About
                </Link>
                <Link
                  href="#portfolio"
                  className={cn('fp', styleUtils.appear, styleUtils['appear-fourth'])}
                  title="Portfolio"
                >
                  Portfolio
                </Link>
                <Link
                  href="#investors"
                  className={cn('fp', styleUtils.appear, styleUtils['appear-fifth'])}
                  title="Investors"
                >
                  Investors
                </Link>
                <Link
                  href="#team"
                  className={cn('fp', styleUtils.appear, styleUtils['appear-sixth'])}
                  title="Team"
                >
                  Team
                </Link>
              </>
            ) : (
              <>
                <div
                  className={cn(
                    styles['header-feedback'],
                    styleUtils.appear,
                    styleUtils['appear-second']
                  )}
                >
                  <HeaderFeedback email />
                </div>

                <Link
                  href="/hotels/villa-paradiso"
                  hotel="villa-paradiso"
                  className={cn('fp', styleUtils.appear, styleUtils['appear-third'])}
                  title="Villa Paradiso"
                >
                  Villa Paradiso
                </Link>
                <Link
                  href="/hotels/ithaca"
                  hotel="ithaca"
                  className={cn('fp', styleUtils.appear, styleUtils['appear-fourth'])}
                  title="Ithaca"
                >
                  Ithaca
                </Link>
                <Link
                  href="/hotels/treehouse"
                  hotel="treehouse"
                  className={cn('fp', styleUtils.appear, styleUtils['appear-fifth'])}
                  title="Treehouse"
                >
                  Treehouse
                </Link>
              </>
            )}
          </div>

          <ThemeIcon
            color="var(--aries-fg)"
            className={cn(
              styleUtils['theme-icon'],
              styleUtils.appear,
              styleUtils['appear-first'],
              styles['mobile-absolute'],
              styles.right
            )}
          />

          <span
            className={cn(styles.toggle, styles['mobile-absolute'], styles.left)}
            onClick={toggle}
          >
            <Hamburger className="fp" mobileNavShown={mobileNavShown} />
          </span>
        </div>
      </nav>

      <nav className={cn(styles.mobileNav, { [styles.active]: mobileNavShown })}>
        {home ? (
          <>
            <Link href="#about" className="fp" title="About">
              About
            </Link>
            <Link href="#portfolio" className="fp" title="Portfolio">
              Portfolio
            </Link>
            <Link href="#investors" className="fp" title="Investors">
              Investors
            </Link>
            <Link href="#team" className="fp" title="Team">
              Team
            </Link>
          </>
        ) : (
          <>
            <Link href="/hotels/ithaca" hotel="ithaca" className="fp" title="Ithaca">
              Ithaca
            </Link>

            <Link href="/hotels/treehouse" hotel="treehouse" className="fp" title="Treehouse">
              Treehouse
            </Link>
            <Link
              href="/hotels/villa-paradiso"
              hotel="villa-paradiso"
              className="fp"
              title="Villa Paradiso"
            >
              Villa Paradiso
            </Link>
          </>
        )}
      </nav>
    </Container>
  )
}

Navbar.displayName = 'NavBar'
export default memo(Navbar)
