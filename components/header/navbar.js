import { memo } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import cn from 'classnames'

import Logo from 'components/icons/logo'
import Container from 'components/container'

function Navbar() {
  const { route } = useRouter()

  return (
    <Container>
      <nav className="f-reset">
        <div className="links">
          <Link href="/">
            <a className="logo" title="Go to the homepage">
              <Logo />
            </a>
          </Link>

          <Link href="#About">
            <a className={cn('fp', { selected: route.startsWith('/about') })} title="About">
              About
            </a>
          </Link>
          <Link href="#Portfolio">
            <a className={cn('fp', { selected: route.startsWith('/portfolio') })} title="Portfolio">
              Portfolio
            </a>
          </Link>
          <Link href="#Investors">
            <a className={cn('fp', { selected: route.startsWith('/investors') })} title="Investors">
              Investors
            </a>
          </Link>
          <Link href="#Team">
            <a className={cn('fp', { selected: route.startsWith('/team') })} title="Team">
              Team
            </a>
          </Link>
        </div>
      </nav>

      <style jsx>{`
        nav {
          position: relative;
          flex: 1;
          height: var(--header-height);
          display: flex;
          align-items: center;
        }

        .links {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          z-index: 1;
        }

        .links a {
          text-decoration: none;
          transition: color 0.2s ease;
          margin: 1rem;
        }

        .links a:hover {
          color: var(--accents-1);
        }

        .links a.selected {
          color: var(--accents-1);
          text-shadow: 0px 0px 1px #0070f3;
        }

        .links a:first-child {
          display: flex;
          margin: 0;
        }

        /* Mobile */

        @media (max-width: 640px) {
          nav a,
          nav p {
            font-size: 14px;
          }
        }
      `}</style>
    </Container>
  )
}

export default memo(Navbar)
