import SectionHeader from 'components/section-header'
import { NAME_LONG, TEXT } from 'lib/constants'
import Container from 'components/container'
import Page from 'components/page'

export default function Contact() {
  return (
    <Page title="Contact">
      <Container role="main" wide dotBackground aria-labelledby="contact">
        <Container center padding>
          <SectionHeader id="contact" title={NAME_LONG} description={TEXT} />
        </Container>
      </Container>
    </Page>
  )
}
