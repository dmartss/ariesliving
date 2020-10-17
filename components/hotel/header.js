import { HotelLogo } from 'components/icons'
import styles from './hotel.module.css'
import styleHover from 'styles/utils/hover.module.css'
import cn from 'classnames'
import styleGradient from 'styles/utils/gradient.module.css'

export default function Header({ hotel, name }) {
  return (
    <header className={styles.header}>
      <aside className={styles.left}>
        <HotelLogo hotel={hotel} />
        <h3 aria-label={`${name} by Aries Living`} className="fw4 tr">
          <span className={styleGradient.bg}>
            <span className={styleGradient.fg}>{name}</span>
          </span>
          <span className={styleGradient.fg}>by Aries Living</span>
        </h3>
      </aside>
      <nav className={styles.links}>
        <a className={styleHover.underline} href="#about">
          About
        </a>
        <a className={styleHover.underline} href="#rooms">
          Rooms
        </a>
      </nav>
    </header>
  )
}
