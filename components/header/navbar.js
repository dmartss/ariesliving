import { memo, useState, useCallback } from 'react'
import { SkipNavLink } from '@reach/skip-nav'
import Link from 'next/link'
import cn from 'classnames'
import { useAmp } from 'next/amp'
import styles from './navbar.module.css'
import styleUtils from '../utils.module.css'
import Logo, { Hamburger } from 'components/icons'
import Container from 'components/container'
import HeaderFeedback from 'components/feedback'
import { useFeedback } from 'components/feedback/feedback-context'

const LINKS = [
  { src: 'about', title: 'About', index: 'third' },
  { src: 'portfolio', title: 'Portfolio', index: 'fourth' },
  { src: 'investors', title: 'Investors', index: 'fifth' },
  { src: 'team', title: 'Team', index: 'sixth' }
]

function Navbar({ errorPage }) {
  const isAmp = useAmp()
  const [open, setOpen] = useState(false)
  const feedback = useFeedback()

  const toggle = useCallback(() => {
    setOpen(!open)
  }, [open])

  return (
    <Container center>
      <SkipNavLink tabIndex="0" />
      <h1 className="visually-hidden" aria-hidden="true">
        Aries Living
      </h1>
      <nav className={cn(styles.nav, 'f-reset')}>
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
              {!isAmp && feedback ? (
                <div
                  className={cn(
                    styles['header-feedback'],
                    styleUtils.appear,
                    styleUtils['appear-second']
                  )}
                >
                  <HeaderFeedback email />
                </div>
              ) : null}

              {LINKS.map(({ src, title, index }) => (
                <Link href={`#${src}`} key={src}>
                  <a
                    className={cn('fp', styleUtils.appear, styleUtils[`appear-${index}`])}
                    title={title}
                  >
                    {title}
                  </a>
                </Link>
              ))}
              <Hamburger
                className={cn('fp', styleUtils.appear, styleUtils['appear-seventh'])}
                toggle={toggle}
                open={open}
              />
            </div>
          )}
        </div>
      </nav>
    </Container>
  )
}

export default memo(Navbar)
