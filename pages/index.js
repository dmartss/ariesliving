import { SkipNavContent } from '@reach/skip-nav'
import { randomImage } from 'lib/images'
import Image from 'components/image'
import Newsletter from 'components/newsletter'
import Portfolio from 'components/portfolio'
import { SECTIONS } from 'lib/constants'
import Section from 'components/section'
import Page from 'components/page'
import Team from 'components/team'

export default function Home() {
  return (
    <Page title="Home">
      <SkipNavContent />
      <Image
        src={randomImage[0]}
        shadow
        layout="responsive"
        noBorder
        margin={0}
        oversize={false}
        alt="Hero Image"
        width={3000 / 2}
        height={2000 / 2.2}
      />
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
    </Page>
  )
}
