import Container from './container'
import SectionHeader from './section-header'
import Image from './image'
import { TEAM } from 'lib/constants'
import styles from './team.module.css'

export default function Team() {
  return (
    <Container wide gray>
      <Container center padding>
        <SectionHeader
          id="team"
          title="Team"
          description="The Aries Living Team has decades of experience in all facets of hospitality, technology, and real estate. This experience is applied with youthful energy, drawing up creative solutions to move the accommodations industry forward and to create more value for our assets."
        />
        <div className={styles['wrapper']}>
          {TEAM.map(({ name, position, img }) => (
            <div key={name} className={styles['team-member']}>
              <Image avatar shadow width={100} height={100} margin={5} src={img} alt={name} />
              <p className="fp">{name}</p>
              <p className="fs">{position}</p>
            </div>
          ))}
        </div>
      </Container>
    </Container>
  )
}
