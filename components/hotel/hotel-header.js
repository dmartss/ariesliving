import { HotelLogo } from 'components/icons'
import { header, left, links } from './hotel-header.module.css'
import { underline } from 'styles/utils/hover.module.css'
import { bg, fg } from 'styles/utils/gradient.module.css'
import Text from 'components/text'

export default function HotelHeader({ hotel, name }) {
  return (
    <header className={header}>
      <aside className={left}>
        <HotelLogo hotel={hotel} />
        <Text variant="h3" aria-label={`${name} by Aries Living`} weight="fw4" align="tr">
          <span className={bg}>
            <span className={fg}>{name}</span>
          </span>
          <span className={fg}>by Aries Living</span>
        </Text>
      </aside>
      <nav className={links}>
        <a className={underline} href="#about">
          About
        </a>
        <a className={underline} href="#rooms">
          Rooms
        </a>
      </nav>
    </header>
  )
}
