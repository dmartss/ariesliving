import Section from 'components/section'
import Page from 'components/page'
import Team from 'components/team'
import LinesGallery from 'components/lines-gallery'
import Newsletter from 'components/newsletter'
import Portfolio from 'components/portfolio'
import Image from 'components/image'
import { randomImage } from 'lib/constants'

export default function Home() {
  return (
    <Page title="Home">
      <Image
        shadow
        layout="responsive"
        noBorder
        margin={0}
        oversize={false}
        alt="Hero Image"
        src={randomImage[0]}
        width={3000 / 2}
        height={2000 / 2}
      />
      <Section
        id="about"
        title="About"
        description="Aries Living is a quickly growing independent owner and operator of design forward, select service hotels. We cater to a new type of traveler; those who prefers fresh, modern accommodations delivered with simplicity and independence. It’s our belief that luxury isn’t defined by being expensive, but rather it’s considered."
        reverse={false}
        alt="Aries Hotel"
        src={randomImage[1]}
        width={3000 / 6}
        height={2000 / 6}
      />
      <Portfolio
        title="Our Collection"
        id="portfolio"
        description="The Aries Living Portfolio consists of select service hotels in Eastern United States concentrated in the Miami Area. Our growth strategy is to increase our footprint with similar style accommodations properties on the East Coast both North and South."
        width={375}
        height={234.375}
      />
      <Section
        id="investors"
        title="Investors"
        description="Aries Living is well positioned for quick, disciplined, growth in the hospitality space and is seeking partners for joint ventures and management contracts in diverse markets and for a wide range of property types. To speak with our team about new opportunities please contact us at info@ariesliving.com or +1 (813) 575-4532"
        reverse={true}
        alt="Aries Hotel"
        src={randomImage[2]}
        width={3000 / 6}
        height={2000 / 6}
      />
      <Team />
      <Newsletter />
      <LinesGallery />
    </Page>
  )
}
