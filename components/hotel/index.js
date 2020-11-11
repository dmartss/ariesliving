import { SkipNavContent } from '@reach/skip-nav'
import Image from 'next/image'
import Page from 'components/utils/page'
import Container from 'components/container'
import StickyHeader from './sticky-header'
import HotelHeader from './hotel-header'
import HotelInfo from './hotel-info'
import { useHotel } from 'lib/hotel-context'

export default function Hotel({ suffix }) {
  const {
    id: { title, descriptionShort, defaultOgImage, name, hotel }
  } = useHotel()

  return (
    <Container clean hotel={hotel}>
      <Page
        title={title}
        description={descriptionShort}
        image={defaultOgImage}
        keywords={name}
        hotel={hotel}
        suffix={suffix}
      >
        <SkipNavContent />
        <Container wide overflow>
          <Container padding>
            <HotelHeader name={name} hotel={hotel} />
            <Image
              className="image radius"
              src={`/showcase/${hotel}.jpg`}
              alt={`${name} Image`}
              width={1090}
              height={727}
              priority
            />
            <StickyHeader />
            <HotelInfo />
          </Container>
        </Container>
      </Page>
    </Container>
  )
}
