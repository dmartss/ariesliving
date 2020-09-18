import Section from 'components/section'
import Page from 'components/page'
import Team from 'components/team'
import LinesGallery from 'components/lines-gallery'
import Newsletter from 'components/newsletter'
import Portfolio from 'components/portfolio'
import { randomImage, IMAGES } from 'lib/images'
import { SECTIONS } from 'lib/constants'
import Slider from 'components/slider'

export default function Home() {
  return (
    <Page title="Home">
      <Slider slides={IMAGES} autoPlay={5} />
      <Section
        id={SECTIONS[0].id}
        title={SECTIONS[0].title}
        description={SECTIONS[0].description}
        alt="Aries Hotel"
        src={randomImage[1]}
        width={3000 / 6}
        height={2000 / 6}
      />
      <Portfolio
        id={SECTIONS[1].id}
        title={SECTIONS[1].title}
        description={SECTIONS[1].description}
        width={3000 / 9}
        height={2000 / 9}
      />
      <Section
        id={SECTIONS[2].id}
        title={SECTIONS[2].title}
        description={SECTIONS[2].description}
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
