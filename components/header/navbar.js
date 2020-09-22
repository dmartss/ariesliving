import { useState, useCallback } from 'react'
import { SkipNavLink } from '@reach/skip-nav'
import { useRouter } from 'next/router'
import { memo } from 'react'
import Link from 'next/link'
import cn from 'classnames'
import styles from './navbar.module.css'
import styleUtils from '../utils.module.css'
import Logo, { Hamburger } from 'components/icons'
import Container from 'components/container'

function Navbar() {
  const { route } = useRouter()
  const [open, setOpen] = useState(false)

  const toggle = useCallback(() => setOpen(!open), [open])

  return (
    <Container center>
      <SkipNavLink tabIndex="0" />
      <h1 className="visually-hidden" aria-hidden="true">
        Aries Living
      </h1>
      <nav className={cn(styles['nav'], 'f-reset')}>
        <div className={styles['links']}>
          <Link href="/">
            <a
              className={cn(styles['logo'], styleUtils['appear'], styleUtils['appear-first'])}
              title="Go to the homepage"
            >
              <Logo />
            </a>
          </Link>

          <div className={styles['not-logo']}>
            <Link href="#about">
              <a
                className={cn('fp', styleUtils['appear'], styleUtils['appear-second'], {
                  [styles.selected]: route.startsWith('/about')
                })}
                title="About"
              >
                About
              </a>
            </Link>
            <Link href="#portfolio">
              <a
                className={cn('fp', styleUtils['appear'], styleUtils['appear-third'], {
                  [styles.selected]: route.startsWith('/portfolio')
                })}
                title="Portfolio"
              >
                Portfolio
              </a>
            </Link>
            <Link href="#investors">
              <a
                className={cn('fp', styleUtils['appear'], styleUtils['appear-fourth'], {
                  [styles.selected]: route.startsWith('/investors')
                })}
                title="Investors"
              >
                Investors
              </a>
            </Link>
            <Link href="#team">
              <a
                className={cn('fp', styleUtils['appear'], styleUtils['appear-fifth'], {
                  [styles.selected]: route.startsWith('/team')
                })}
                title="Team"
              >
                Team
              </a>
            </Link>
            <Hamburger
              className={cn('fp', styleUtils['appear'], styleUtils['appear-sixth'])}
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
