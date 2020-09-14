import Image from 'components/image'
import Container from 'components/container'
import Section from 'components/section'
import Page from 'components/page'
import SectionHeader from 'components/section-header'
import LinesGallery from 'components/lines-gallery'
import Newsletter from 'components/newsletter'
import Portfolio from 'components/portfolio'

export default function Home() {
  return (
    <Page title="Home">
      <Container role="main" wide aria-labelledby="welcome">
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
          <Section
            id="about"
            title="About"
            description="Aries Living is a quickly growing independent owner and operator of design forward, select service hotels. We cater to a new type of traveler; those who prefers fresh, modern accommodations delivered with simplicity and independence. It’s our belief that luxury isn’t defined by being expensive, but rather it’s considered."
            reverse={false}
            alt="treehouse"
            src="/showcase/treehouse/back/1.jpg"
            width={3000 / 6}
            height={2000 / 6}
          />
          <Portfolio
            title="Our Portfolio"
            id="portfolio"
            description="The Aries Living Portfolio consists of select service hotels in Eastern United States concentrated in the Miami Area. Our growth strategy is to increase our footprint with similar style accommodations properties on the East Coast both North and South."
            width={3000 / 10}
            height={2000 / 10}
          />
          <Section
            id="investors"
            title="Investors"
            description="Aries Living is well positioned for quick, disciplined, growth in the hospitality space and is seeking partners for joint ventures and management contracts in diverse markets and for a wide range of property types. To speak with our team about new opportunities please contact us at info@ariesliving.com or +1 (813) 575-4532"
            reverse={true}
            alt="ithaca"
            src="/showcase/ithaca/entrance/1.jpg"
            width={3000 / 6}
            height={2000 / 6}
          />
          <LinesGallery />
          <SectionHeader
            title="Team"
            id="team"
            description="The Aires Living Team has decades of experience in all facets of hospitality, technology, and real estate. This experience is applied with youthful energy, drawing up creative solutions to move the accommodations industry forward and to create more value for our assets."
          />
          <Newsletter />
        </Container>
      </Container>
    </Page>
  )
}
