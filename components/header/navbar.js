import { memo, useContext, useState, useCallback } from 'react'
import { SkipNavLink } from '@reach/skip-nav'
import Link from 'next/link'
import cn from 'classnames'
import { useAmp } from 'next/amp'
import styles from './navbar.module.css'
import styleUtils from '../utils.module.css'
import Logo, { Hamburger } from 'components/icons'
import Container from 'components/container'
import HeaderFeedback from 'components/header-feedback'
import FeedbackContext from 'components/feedback-context'

const LINKS = [
  { src: 'about', title: 'About', index: 'second' },
  { src: 'portfolio', title: 'Portfolio', index: 'third' },
  { src: 'investors', title: 'Investors', index: 'fourth' },
  { src: 'team', title: 'Team', index: 'fifth' }
]

function Navbar() {
  const isAmp = useAmp()
  const [open, setOpen] = useState(false)
  const feedback = useContext(FeedbackContext)

  const toggle = useCallback(() => setOpen(!open), [open])

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
              className={cn(styles.logo, styleUtils.appear, styleUtils['appear-first'])}
              title="Go to the homepage"
            >
              <Logo />
            </a>
          </Link>
          {!isAmp && feedback ? (
            <div
              className={cn(
                styles['header-feedback'],
                styleUtils.appear,
                styleUtils['appear-first']
              )}
            >
              <HeaderFeedback email />
            </div>
          ) : (
            <div className={styles['no-feedback']} />
          )}

          <div className={styles['not-logo']}>
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
              className={cn('fp', styleUtils.appear, styleUtils['appear-sixth'])}
              toggle={toggle}
              open={open}
            />
          </div>
        </div>
      </nav>
    </Container>
  )
}

export default memo(Navbar)
