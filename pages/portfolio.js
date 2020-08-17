import SectionHeader from 'components/section-header'
import { NAME_LONG, TEXT } from 'lib/constants'
import Container from 'components/container'
import Page from 'components/page'

export default function Portfolio() {
  return (
    <Page title="Portfolio">
      <Container role="main" wide dotBackground aria-labelledby="portfolio">
        <Container center padding>
          <SectionHeader id="portfolio" title={NAME_LONG} description={TEXT} />
        </Container>
      </Container>
    </Page>
  )
}
