import { TEAM } from 'lib/sections'
import Container from 'components/container'
import SectionHeader from 'components/section/section-header'
import Image from 'next/image'
import styles from './team.module.css'

export default function Team() {
  return (
    <Container wide fade withAnchor id="team">
      <Container center padding>
        <SectionHeader
          team
          title="Team"
          description="The Aries Living Team has decades of experience in all facets of hospitality, technology, and real estate. This experience is applied with youthful energy, drawing up creative solutions to move the accommodations industry forward and to create more value for our assets."
        />
        <div className={styles.wrapper}>
          {TEAM.map(({ name, position, img }, i) => (
            <div key={i} className={styles['team-member']}>
              <Image
                className="image shadow avatar"
                width={100}
                height={100}
                src={`/team/${img}.jpg`}
                alt={name}
                unoptimized
              />
              <p className="fp">{name}</p>
              <p className="fs">{position}</p>
            </div>
          ))}
        </div>
      </Container>
    </Container>
  )
}
