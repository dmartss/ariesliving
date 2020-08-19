import SectionHeader from 'components/section-header'
import { NAME, TEXT } from 'lib/constants'
import Container from 'components/container'
import Page from 'components/page'

export default function Investments() {
  return (
    <Page title="Investments">
      <Container role="main" wide dotBackground aria-labelledby="investments">
        <Container center padding>
          <SectionHeader id="investments" title={NAME} description={TEXT} />
        </Container>
      </Container>
    </Page>
  )
}
