import { useEffect } from 'react'
import Container from 'components/container'
import Skeleton from 'components/skeleton'
import Error from 'next/error'
import { useRouter } from 'next/router'
import { getSlug } from 'lib/utils'
import { FeedbackProvider } from 'lib/feedback-context'
import { HotelProvider } from 'lib/hotel-context'
import Hotel from 'components/hotel'
import hotels from 'hotels'

export const getStaticPaths = () => ({
  paths: hotels.map(({ hotel }) => ({ params: { slug: [hotel] } })),
  fallback: true
})

export const getStaticProps = ({ params: { slug } }) => {
  const randomHotel = hotels[Math.floor(Math.random() * hotels.length)]
  const id = { ...(hotels.find(e => e.hotel === getSlug(slug)) || randomHotel) }

  return {
    props: {
      id,
      randomHotel
    }
  }
}

export default function Hotels({ id }) {
  const router = useRouter()
  const { asPath, isFallback } = router

  if (!id && !isFallback) return <Error statusCode={404} />

  useEffect(() => {
    if (asPath.endsWith('/hotels')) {
      if (id) {
        router.replace(`/hotels/${id.hotel}`)
      }
    }
  }, [id, asPath])

  return id ? (
    <FeedbackProvider value={{ label: id.hotel }}>
      <HotelProvider value={{ id }}>
        <Hotel suffix={asPath} />
      </HotelProvider>
    </FeedbackProvider>
  ) : (
    <Container padding>
      <Skeleton style={{ height: '100%' }} />
    </Container>
  )
}
