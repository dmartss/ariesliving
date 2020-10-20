import HeaderFeedback from 'components/feedback'
import MenuPopOver from 'components/menu-popover'
import { HotelLogo } from 'components/icons'
import cn from 'classnames'
import Link from 'components/link'
import styleUtils from 'styles/utils/utils.module.css'
import styles from './navbar.module.css'

export default function HomeLinks({ desktop }) {
  const classes = number => (desktop ? cn(styleUtils.appear, styleUtils[number]) : null)
  return (
    <>
      {desktop && (
        <>
          <div className={cn(styles.feedback, styleUtils.appear, styleUtils.second)}>
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
        </>
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
  )
}
