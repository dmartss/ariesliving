import SectionHeader from 'components/section-header'
import { NAME_LONG, TEXT } from 'lib/constants'
import Container from 'components/container'
import Page from 'components/page'

export default function Home() {
  return (
    <Page title="Home">
      <Container role="main" wide dotBackground aria-labelledby="welcome">
        <Container center padding>
          <SectionHeader id="welcome" title={NAME_LONG} description={TEXT} />
        </Container>
      </Container>
    </Page>
  )
}
