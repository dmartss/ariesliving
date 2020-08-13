import { memo } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import cn from 'classnames'
import { EMAIL, PHONE, NAME_LONG } from 'lib/constants'

import Logo from 'components/icons/logo'
import Container from 'components/container'
import Button from 'components/button'

function Navbar() {
  const { route } = useRouter()

  return (
    <Container>
      <nav className="f-reset">
        <div className="mobile-top">
          <Link href="/">
            <a className="mobile-logo" title="Go to the homepage">
              <Logo />
            </a>
          </Link>

          <div className="book">
            <Button href="/">Book</Button>
          </div>
        </div>

        <div className="links">
          <Link href="/">
            <a className="logo" title="Go to the homepage">
              <Logo />
            </a>
          </Link>

          <Link href="/about">
            <a className={cn('mute', { selected: route.startsWith('/about') })} title="About">
              About
            </a>
          </Link>
          <Link href="/portfolio">
            <a
              className={cn('mute', { selected: route.startsWith('/portfolio') })}
              title="Portfolio"
            >
              Portfolio
            </a>
          </Link>
          <Link href="/investments">
            <a
              className={cn('mute', { selected: route.startsWith('/investments') })}
              title="Investments"
            >
              Investments
            </a>
          </Link>
          <Link href="/contact">
            <a className={cn('mute', { selected: route.startsWith('/contact') })} title="Contact">
              Contact
            </a>
          </Link>
          <div className="icon">
            <p className="subtitle">{PHONE}</p>
            <a className="subtitle" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
          </div>
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
          margin-left: 1rem;
        }

        .links a:hover {
          color: #000;
        }

        .links a.selected {
          color: #0070f3;
          text-shadow: 0px 0px 1px #0070f3;
        }

        .links a:first-child {
          display: flex;
          margin: 0;
        }

        .logo,
        .icon,
        .icon > :global(div.container) {
          /* Remove additional space from SVG */
          display: inline-flex;
          justify-content: center;
        }

        .icon > :global(div.container) {
          overflow: visible;
        }

        .mobile-logo,
        .mobile-top {
          display: none;
        }

         {
          /* .book :global(a) {
          background-color: rgba(0, 118, 255, 0.9);
          color: #fff;
          border: 1px solid rgba(0, 118, 255, 0.9);
          padding: 0.25rem 1rem;
          margin: 0;
        }
        .book :global(a:focus),
        .book :global(a:hover) {
          background-color: transparent;
          color: rgba(0, 118, 255, 0.9);
        } */
        }

        .icon {
          text-align: right;
          display: flex;
          flex-direction: column;
          justify-content: center;
          line-height: 0.5;
          color: var(--accents-1);
          margin: 0 0 var(--gap) var(--gap);
        }

        /* Mobile */

        @media (max-width: 960px) {
          .links .logo {
            padding-left: var(--gap);
          }
        }

        @media (max-width: 640px) {
          .mobile-logo {
            display: block;
          }

          nav {
            height: unset;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            padding: var(--gap) 0;
          }

          nav .links .logo,
          nav .links .hotel,
          nav .links .book {
            display: none;
          }

          nav a,
          nav p {
            font-size: 14px;
          }
          nav .links a:nth-child(2) {
            margin: 0;
          }

          .mobile-top {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: var(--gap-half);
          }

          .book {
            margin-left: var(--gap-half);
          }
        }
      `}</style>
    </Container>
  )
}

export default memo(Navbar)
