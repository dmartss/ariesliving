import SectionHeader from 'components/section-header'
import { NAME } from 'lib/constants'
import Container from 'components/container'
import Page from 'components/page'

export default function Investors() {
  return (
    <Page title="Investors">
      <Container role="main" wide dotBackground aria-labelledby="investors">
        <Container center padding>
          <SectionHeader id="investors" title={NAME} description="" />
        </Container>
      </Container>
    </Page>
  )
}
