import { memo } from 'react'
import { SkipNavLink } from '@reach/skip-nav'
import Link from 'components/link'
import cn from 'classnames'
import Logo, { Hamburger, ThemeIcon, HotelLogo } from 'components/icons'
import Container from 'components/container'
import HeaderFeedback from 'components/feedback'
import MenuPopOver from 'components/menu-popover'
import styleUtils from 'styles/utils/utils.module.css'
import styles from './navbar.module.css'
import useMounted from 'lib/use-mounted'
import { useNav } from 'lib/nav-context'

function Navbar({ home }) {
  const mounted = useMounted()
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
            {home ? (
              <>
                <div
                  className={cn(styles['header-feedback'], styleUtils.appear, styleUtils.second)}
                >
                  <HeaderFeedback email />
                </div>

                <MenuPopOver
                  className={cn(styleUtils.appear, styleUtils.third)}
                  title="Hotels"
                  // primaryTitle="Florida"
                  primaryList={[
                    {
                      title: 'Villa Paradiso',
                      hotel: 'villa-paradiso',
                      url: '/hotels/villa-paradiso',
                      logo: <HotelLogo hotel="villa-paradiso" small />
                    },
                    {
                      title: 'Ithaca',
                      hotel: 'ithaca-south-beach',
                      url: '/hotels/ithaca-south-beach',
                      logo: <HotelLogo hotel="ithaca-south-beach" small />
                    },
                    {
                      title: 'Treehouse',
                      hotel: 'treehouse',
                      url: '/hotels/treehouse',
                      logo: <HotelLogo hotel="treehouse" small />
                    }
                  ]}
                  // secondaryTitle="Massachusetts"
                  // secondaryList={[
                  //   {
                  //     title: 'Apple Tree Inn',
                  //     url: '/hotels/apple-tree'
                  //   }
                  // ]}
                />

                <Link
                  href="#about"
                  className={cn(styleUtils.appear, styleUtils.fourth)}
                  title="About"
                >
                  About
                </Link>
                <Link
                  href="#portfolio"
                  className={cn(styleUtils.appear, styleUtils.fifth)}
                  title="Portfolio"
                >
                  Portfolio
                </Link>
                <Link
                  href="#investors"
                  className={cn(styleUtils.appear, styleUtils.sixth)}
                  title="Investors"
                >
                  Investors
                </Link>
                <Link
                  href="#team"
                  className={cn(styleUtils.appear, styleUtils.seventh)}
                  title="Team"
                >
                  Team
                </Link>
              </>
            ) : (
              <>
                <div
                  className={cn(styles['header-feedback'], styleUtils.appear, styleUtils.second)}
                >
                  <HeaderFeedback email />
                </div>

                <Link
                  href="/hotels/villa-paradiso"
                  hotel="villa-paradiso"
                  className={cn(styleUtils.appear, styleUtils.third)}
                  title="Villa Paradiso"
                >
                  Villa Paradiso
                </Link>
                <Link
                  href="/hotels/ithaca-south-beach"
                  hotel="ithaca-south-beach"
                  className={cn(styleUtils.appear, styleUtils.fourth)}
                  title="Ithaca of South Beach"
                >
                  Ithaca
                </Link>
                <Link
                  href="/hotels/treehouse"
                  hotel="treehouse"
                  className={cn(styleUtils.appear, styleUtils.fifth)}
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
              { [styleUtils.appear]: !mounted, [styleUtils.eighth]: !mounted },
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
        {home && (
          <>
            <Link href="#about" title="About">
              About
            </Link>
            <Link href="#portfolio" title="Portfolio">
              Portfolio
            </Link>
            <Link href="#investors" title="Investors">
              Investors
            </Link>
            <Link href="#team" title="Team">
              Team
            </Link>
          </>
        )}
        <>
          <Link href="/hotels/villa-paradiso" hotel="villa-paradiso" title="Villa Paradiso">
            Villa Paradiso
          </Link>
          <Link
            href="/hotels/ithaca-south-beach"
            hotel="ithaca-south-beach"
            title="Ithaca of South Beach"
          >
            Ithaca
          </Link>
          <Link href="/hotels/treehouse" hotel="treehouse" title="Treehouse">
            Treehouse
          </Link>
        </>
      </nav>
    </Container>
  )
}

Navbar.displayName = 'NavBar'
export default memo(Navbar)
