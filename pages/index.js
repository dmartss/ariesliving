import { Provider } from 'lib/feedback-context'
import { SkipNavContent } from '@reach/skip-nav'
import Newsletter from 'components/newsletter'
import Portfolio from 'components/portfolio'
import { SECTIONS } from 'lib/sections'
import Section from 'components/section'
import Image from 'next/image'
import Page from 'components/page'
import Team from 'components/team'
import Container from 'components/container'

export default function Home() {
  return (
    <Provider value={{ label: 'home' }}>
      <Page title="Aries Living - Home">
        <SkipNavContent />
        <Container>
          <Image
            className="image shadow"
            src="/showcase/hero.jpg"
            alt="Hero Image"
            width={3000 / 2.75}
            height={2000 / 2.75}
          />
        </Container>
        <Section
          id={SECTIONS.about.id}
          title={SECTIONS.about.title}
          description={SECTIONS.about.description}
          src={SECTIONS.about.src}
          alt="Aries Hotel"
          width={3000 / 1.25}
          height={2000 / 1.25}
        />
        <Portfolio
          id={SECTIONS.portfolio.id}
          title={SECTIONS.portfolio.title}
          description={SECTIONS.portfolio.description}
          width={300}
          height={200}
        />
        <Section
          id={SECTIONS.investors.id}
          title={SECTIONS.investors.title}
          description={SECTIONS.investors.description}
          src={SECTIONS.investors.src}
          alt="Aries Hotel"
          width={3000 / 1.5}
          height={2000 / 1.5}
          reverse
        />
        <Team />
        <Newsletter />
      </Page>
    </Provider>
  )
}
