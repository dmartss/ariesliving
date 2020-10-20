import HeaderFeedback from 'components/feedback'
import cn from 'classnames'
import Link from 'components/link'
import styleUtils from 'styles/utils/utils.module.css'
import styles from './navbar.module.css'

export default function HotelLinks({ desktop }) {
  const classes = number => (desktop ? cn(styleUtils.appear, styleUtils[number]) : null)
  return (
    <>
      {desktop && (
        <div className={cn(styles.feedback, styleUtils.appear, styleUtils.second)}>
          <HeaderFeedback email />
        </div>
      )}

      <Link
        href="/hotels/[hotel]"
        as="/hotels/villa-paradiso"
        hotel="villa-paradiso"
        className={classes('third')}
        title="Villa Paradiso"
      >
        Villa Paradiso
      </Link>
      <Link
        href="/hotels/[hotel]"
        as="/hotels/ithaca-south-beach"
        hotel="ithaca-south-beach"
        className={classes('fourth')}
        title="Ithaca of South Beach"
      >
        Ithaca
      </Link>
      <Link
        href="/hotels/[hotel]"
        as="/hotels/treehouse"
        hotel="treehouse"
        className={classes('fifth')}
        title="Treehouse"
      >
        Treehouse
      </Link>
    </>
  )
}
