import { HotelLogo } from 'components/icons'
import styles from './hotel.module.css'
import styleUtils from 'components/utils.module.css'

export default function Header({ hotel, name }) {
  return (
    <header className={styles.header}>
      <aside className={styles.left}>
        <HotelLogo hotel={hotel} />
        <h3 className="fw4">{name} by Aries Living</h3>
      </aside>
      <nav className={styles.links}>
        <a className={styleUtils.hvrUnderline} href="#about">
          About
        </a>
        <a className={styleUtils.hvrUnderline} href="#rooms">
          Rooms
        </a>
      </nav>
    </header>
  )
}
