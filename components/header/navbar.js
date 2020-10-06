import { memo, useState, useEffect } from 'react'
import { SkipNavLink } from '@reach/skip-nav'
import Link from 'next/link'
import cn from 'classnames'
import styles from './navbar.module.css'
import styleUtils from '../utils.module.css'
import Logo, { Hamburger } from 'components/icons'
import Container from 'components/container'
import HeaderFeedback from 'components/feedback'
import Router from 'next/router'

function Navbar({ errorPage }) {
  const [mobileNavShown, setMobileNavShown] = useState(false)

  const toggle = () => setMobileNavShown(!mobileNavShown)
  const done = () => setMobileNavShown(false)

  useEffect(() => {
    Router.events.on('hashChangeComplete', done)

    return () => {
      Router.events.off('hashChangeComplete', done)
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
          <Link href="/">
            <a
              className={cn(styles.logo, styleUtils.appear, styleUtils['appear-first'], {
                [styles.error]: errorPage
              })}
              title="Go to the homepage"
            >
              <Logo />
            </a>
          </Link>

          {!errorPage && (
            <div className={styles['not-logo']}>
              <div
                className={cn(
                  styles['header-feedback'],
                  styleUtils.appear,
                  styleUtils['appear-second']
                )}
              >
                <HeaderFeedback email />
              </div>

              <Link href="#about">
                <a
                  className={cn('fp', styleUtils.appear, styleUtils['appear-third'])}
                  title="About"
                >
                  About
                </a>
              </Link>
              <Link href="#portfolio">
                <a
                  className={cn('fp', styleUtils.appear, styleUtils['appear-fourth'])}
                  title="Portfolio"
                >
                  Portfolio
                </a>
              </Link>
              <Link href="#investors">
                <a
                  className={cn('fp', styleUtils.appear, styleUtils['appear-fifth'])}
                  title="Investors"
                >
                  Investors
                </a>
              </Link>
              <Link href="#team">
                <a className={cn('fp', styleUtils.appear, styleUtils['appear-sixth'])} title="Team">
                  Team
                </a>
              </Link>
            </div>
          )}

          <span className={styles.toggle} onClick={toggle}>
            <Hamburger className="fp" mobileNavShown={mobileNavShown} />
          </span>
        </div>
      </nav>

      <nav className={cn(styles.mobileNav, { [styles.active]: mobileNavShown })}>
        <Link href="#about">
          <a className="fp" title="About">
            About
          </a>
        </Link>
        <Link href="#portfolio">
          <a className="fp" title="Portfolio">
            Portfolio
          </a>
        </Link>
        <Link href="#investors">
          <a className="fp" title="Investors">
            Investors
          </a>
        </Link>
        <Link href="#team">
          <a className="fp" title="Team">
            Team
          </a>
        </Link>
      </nav>
    </Container>
  )
}

export default memo(Navbar)
