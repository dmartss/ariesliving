import { Provider } from 'lib/feedback-context'
import { SkipNavContent } from '@reach/skip-nav'
import Newsletter from 'components/newsletter'
import Portfolio from 'components/portfolio'
import Section from 'components/section'
import Image from 'next/image'
import Page from 'components/utils/page'
import Team from 'components/team'
import Container from 'components/container'

export default function Home() {
  return (
    <Provider value={{ label: 'Home' }}>
      <Page title="Aries Living - Home">
        <SkipNavContent />
        <Container>
          <Image
            src="/showcase/hero.jpg"
            alt="Hero Image"
            className="image shadow"
            width={1090}
            height={727}
            priority
          />
        </Container>
        <Section
          id="about"
          title="About"
          description="Aries Living is a quickly growing independent owner and operator of design forward, select service hotels. We cater to a new type of traveler; those who prefers fresh, modern accommodations delivered with simplicity and independence. It’s our belief that luxury isn’t defined by being expensive, but rather it’s considered."
        />
        <Portfolio
          id="portfolio"
          title="Our Collection"
          description="The Aries Living Portfolio consists of select service hotels in Eastern United States concentrated in the Miami Area. Our growth strategy is to increase our footprint with similar style accommodations properties on the East Coast."
        />
        <Section
          id="investors"
          title="Investors"
          description="Aries Living is well positioned for quick, disciplined, growth in the hospitality space and is seeking partners for joint ventures and management contracts in diverse markets and for a wide range of property types. To speak with our team about new opportunities please contact us at info@ariesliving.com or +1 (813) 575-4532."
        />
        <Team />
        <Newsletter />
      </Page>
    </Provider>
  )
}
