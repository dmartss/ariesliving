import { HotelLogo } from 'components/icons'
import styles from './hotel.module.css'

export default function Header({ hotel, name }) {
  return (
    <header className={styles.header}>
      <aside className={styles.left}>
        <HotelLogo hotel={hotel} />
        <h3 className="fw4">{name} by Aries Living</h3>
      </aside>
      <nav className={styles.links}>
        <a href="#about">About</a>
        <a href="#rooms">Rooms</a>
      </nav>
    </header>
  )
}
