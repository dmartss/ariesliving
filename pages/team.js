import SectionHeader from 'components/section-header'
import { NAME } from 'lib/constants'
import Container from 'components/container'
import Page from 'components/page'

export default function Team() {
  return (
    <Page title="Team">
      <Container role="main" wide dotBackground aria-labelledby="team">
        <Container center padding>
          <SectionHeader id="team" title={NAME} description="" />
        </Container>
      </Container>
    </Page>
  )
}
