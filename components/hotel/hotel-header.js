import { HotelLogo } from 'components/icons'
import s from './hotel-header.module.css'
import sHover from 'styles/utils/hover.module.css'
import sGradient from 'styles/utils/gradient.module.css'

export default function HotelHeader({ hotel, name }) {
  return (
    <header className={s.header}>
      <aside className={s.left}>
        <HotelLogo hotel={hotel} />
        <h3 aria-label={`${name} by Aries Living`} className="fw4 tr">
          <span className={sGradient.bg}>
            <span className={sGradient.fg}>{name}</span>
          </span>
          <span className={sGradient.fg}>by Aries Living</span>
        </h3>
      </aside>
      <nav className={s.links}>
        <a className={sHover.underline} href="#about">
          About
        </a>
        <a className={sHover.underline} href="#rooms">
          Rooms
        </a>
      </nav>
    </header>
  )
}
