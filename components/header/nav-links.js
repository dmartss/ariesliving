import { useCallback } from 'react'
import cn from 'classnames'
import MenuPopOver from 'components/menu-popover'
import Link from 'components/link'
import sUtils from 'styles/utils/utils.module.css'

export default function HomeLinks({ desktop, mobile, home }) {
  const classes = useCallback(
    number => {
      if (desktop && !home) return cn(sUtils.appear, sUtils[number])
      return null
    },
    [desktop, home]
  )

  const displayHotelLinks = useCallback(() => {
    if (mobile && home) return true
    if (mobile && !home) return true
    if (desktop && home) return false
    if (desktop && !home) return true
  }, [mobile, home, desktop])

  return (
    <>
      {home && (
        <>
          {desktop && (
            <MenuPopOver
              className={classes('third')}
              title="Hotels"
              primaryList={[
                {
                  title: 'Villa Paradiso',
                  hotel: 'villa-paradiso'
                },
                {
                  title: 'Ithaca',
                  hotel: 'ithaca-south-beach'
                },
                {
                  title: 'Treehouse',
                  hotel: 'treehouse'
                }
              ]}
            />
          )}

          <Link href="#about" className={classes('fourth')} title="About">
            About
          </Link>
          <Link href="#portfolio" className={classes('fifth')} title="Portfolio">
            Portfolio
          </Link>
          <Link href="#investors" className={classes('sixth')} title="Investors">
            Investors
          </Link>
          <Link href="#team" className={classes('seventh')} title="Team">
            Team
          </Link>
        </>
      )}

      {displayHotelLinks() && (
        <>
          <Link
            href="/hotels/villa-paradiso"
            hotel="villa-paradiso"
            className={classes('third')}
            title="Villa Paradiso"
          >
            Villa Paradiso
          </Link>
          <Link
            href="/hotels/ithaca-south-beach"
            hotel="ithaca-south-beach"
            className={classes('fourth')}
            title="Ithaca of South Beach"
          >
            Ithaca
          </Link>
          <Link
            href="/hotels/treehouse"
            hotel="treehouse"
            className={classes('fifth')}
            title="Treehouse"
          >
            Treehouse
          </Link>
        </>
      )}
    </>
  )
}
