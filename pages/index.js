import { CONTENT, TEAM } from 'lib/constants'
import Image from 'components/image'
import Container from 'components/container'
import Section from 'components/section'
import Page from 'components/page'
import SectionHeader from 'components/section-header'

export default function Home() {
  return (
    <Page title="Home">
      <Container role="main" wide dotBackground aria-labelledby="welcome">
        <Container center padding>
          <Image
            shadow
            className="no-drag"
            oversize={false}
            alt="Room 1"
            src="/showcase/ithaca/entrance/1.jpg"
            width={3000 / 2}
            height={2000 / 2}
          />
          {CONTENT.map(({ title, description, src }, i) => (
            <Section
              id={title}
              key={i}
              title={title}
              description={description}
              reverse={i % 2}
              alt="Room 2"
              src={src}
              width={3000 / 6}
              height={2000 / 6}
            />
          ))}
          <SectionHeader title={TEAM.title} description={TEAM.description} id={TEAM.title} />
        </Container>
      </Container>
    </Page>
  )
}
