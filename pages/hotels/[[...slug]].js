import { useEffect } from 'react'
import { SkipNavContent } from '@reach/skip-nav'
import Container from 'components/container'
import Skeleton from 'components/skeleton'
import Error from 'next/error'
import { useRouter } from 'next/router'
import { getSlug } from 'lib/utils'
import { Provider } from 'lib/feedback-context'
import Hotel from 'components/hotel'
import Page from 'components/page'
import hotels from 'hotels'

export const getStaticPaths = () => ({
  paths: hotels.slice(0, 3).map(({ hotel }) => ({ params: { slug: [hotel] } })),
  fallback: true
})

export const getStaticProps = ({ params: { slug } }) => {
  const randomHotel = hotels.slice(0, 3)[Math.floor(Math.random() * (hotels.length - 1))]
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
    <Provider value={{ label: id.hotel }}>
      <div className={id.hotel}>
        <Page
          title={id.title}
          description={id.descriptionShort}
          image={id.defaultOgImage}
          keywords={id.name}
          hotel={id.hotel}
          suffix={asPath}
          fillBg
        >
          <SkipNavContent />
          <Hotel id={id} />
        </Page>
      </div>
    </Provider>
  ) : (
    <Container padding>
      <div className="skeleton-container">
        <Skeleton style={{ height: 'calc(100%)' }} />
      </div>
    </Container>
  )
}
