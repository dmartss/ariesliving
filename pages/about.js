import SectionHeader from 'components/section-header'
import { NAME, TEXT } from 'lib/constants'
import Container from 'components/container'
import Page from 'components/page'

export default function About() {
  return (
    <Page title="About">
      <Container role="main" wide dotBackground aria-labelledby="about">
        <Container center padding>
          <SectionHeader id="about" title={NAME} description={TEXT} />
        </Container>
      </Container>
    </Page>
  )
}
