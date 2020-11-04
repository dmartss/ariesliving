import Image from 'next/image'
import SectionHeader from 'components/section/section-header'
import Container from 'components/container'
import Text from 'components/text'
import { root, person } from './team.module.css'

const TEAM = Object.entries({
  'Max Khaghan': 'CEO',
  'James Khaghan': 'CFO',
  'Dan Martin': ' ',
  'Jordan Goldman': ' '
})

export default function Team() {
  return (
    <Container wide fade withAnchor="team">
      <Container center padding>
        <SectionHeader
          teamSection
          title="Team"
          description="The Aries Living Team has decades of experience in all facets of hospitality, technology, and real estate. This experience is applied with youthful energy, drawing up creative solutions to move the accommodations industry forward and to create more value for our assets."
        />
        <div className={root}>
          {TEAM.map(([key, value]) => (
            <div key={key} className={person}>
              <Image
                className="image shadow avatar"
                width={100}
                height={100}
                src="/team/dan.jpg"
                alt={key}
              />
              <Text color="fp">{key}</Text>
              <Text color="fs">{value}</Text>
            </div>
          ))}
        </div>
      </Container>
    </Container>
  )
}
