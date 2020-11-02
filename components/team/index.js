import Container from 'components/container'
import SectionHeader from 'components/section/section-header'
import Image from 'next/image'
import styles from './team.module.css'

const TEAM = {
  'Max Khaghan': 'CEO',
  'James Khaghan': 'CFO',
  'Dan Martin': ' ',
  'Jordan Goldman': ' '
}

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
          {Object.entries(TEAM).map(([key, value]) => (
            <div key={key} className={styles['team-member']}>
              <Image
                className="image shadow avatar"
                width={100}
                height={100}
                src="/team/dan.jpg"
                alt={key}
              />
              <p className="fp">{key}</p>
              <p className="fs">{value}</p>
            </div>
          ))}
        </div>
      </Container>
    </Container>
  )
}
