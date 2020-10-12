import { SkipNavContent } from '@reach/skip-nav'
import { useRouter } from 'next/router'
import { hotels } from 'lib/hotels'
import Image from 'components/image'
import Page from 'components/page'

export async function getStaticPaths() {
  return {
    paths: Object.keys(hotels).map(key => ({ params: { hotel: key } })),
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  return { props: { hotel: hotels[params.hotel || 'ithaca'] } }
}

export default function Home({ hotel }) {
  const router = useRouter()
  const { asPath } = router

  return (
    <Page
      title={`${hotel.titleShort} by Aries Living`}
      description={hotel.description}
      image={hotel.defaultOgImage}
      url={asPath}
    >
      <SkipNavContent />
      <Image
        src={hotel.src}
        shadow
        margin={0}
        noBorder
        oversize={false}
        layout="responsive"
        width={3000 / 2.75}
        height={2000 / 2.75}
        alt={`${hotel.title} Image`}
      />
    </Page>
  )
}
