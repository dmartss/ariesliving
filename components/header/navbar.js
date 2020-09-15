import { useRouter } from 'next/router'
import { memo } from 'react'
import Link from 'next/link'
import cn from 'classnames'
import styles from './navbar.module.css'
import Logo from 'components/icons/logo'
import Container from 'components/container'

function Navbar() {
  const { route } = useRouter()

  return (
    <Container center>
      <nav className={cn(styles['nav'], 'f-reset')}>
        <div className={styles['links']}>
          <Link href="/">
            <a className={styles['logo']} title="Go to the homepage">
              <Logo />
            </a>
          </Link>

          <Link href="#about">
            <a
              className={cn('fp', { [styles.selected]: route.startsWith('/about') })}
              title="About"
            >
              About
            </a>
          </Link>
          <Link href="#portfolio">
            <a
              className={cn('fp', { [styles.selected]: route.startsWith('/portfolio') })}
              title="Portfolio"
            >
              Portfolio
            </a>
          </Link>
          <Link href="#investors">
            <a
              className={cn('fp', { [styles.selected]: route.startsWith('/investors') })}
              title="Investors"
            >
              Investors
            </a>
          </Link>
          <Link href="#team">
            <a className={cn('fp', { [styles.selected]: route.startsWith('/team') })} title="Team">
              Team
            </a>
          </Link>
        </div>
      </nav>
    </Container>
  )
}

export default memo(Navbar)
