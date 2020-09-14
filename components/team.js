import Container from './container'
import SectionHeader from './section-header'
import Image from './image'
import { TEAM } from 'lib/constants'

export default function Team() {
  return (
    <Container wide gray>
      <Container center padding>
        <SectionHeader
          title="Team"
          id="team"
          description="The Aires Living Team has decades of experience in all facets of hospitality, technology, and real estate. This experience is applied with youthful energy, drawing up creative solutions to move the accommodations industry forward and to create more value for our assets."
        />
        <div>
          {TEAM.map(({ name, position, description, img }) => (
            <div key={name}>
              <h2>{name}</h2>
              <h4>{position}</h4>
              <p>{description}</p>
              <Image />
            </div>
          ))}
        </div>
      </Container>
    </Container>
  )
}
