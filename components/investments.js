import Container from 'components/container'
import SectionHeader from 'components/section-header'
import { NAME_LONG, TEXT } from 'lib/constants'

export default function Investments() {
  return (
    <Container role="main" wide dotBackground aria-labelledby="welcome">
      <Container center padding>
        <SectionHeader id="welcome" title={NAME_LONG} description={TEXT} />
      </Container>
    </Container>
  )
}
