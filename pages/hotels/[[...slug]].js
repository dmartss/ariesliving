import { SkipNavContent } from '@reach/skip-nav'
import Container from 'components/container'
import Skeleton from 'components/skeleton'
import Error from 'next/error'
import { useRouter } from 'next/router'
import { getSlug } from 'lib/utils'
import FeedbackContext from 'components/feedback/feedback-context'
import Hotel from 'components/hotel'
import Page from 'components/page'
import hotels from 'hotels'

export const getStaticPaths = () => ({
  paths: hotels.map(({ hotel }) => ({ params: { slug: [hotel] } })),
  fallback: true
})

export const getStaticProps = ({ params: { slug } }) => {
  const randomHotel = hotels[Math.floor(Math.random() * hotels.length)]
  const id = {
    ...(hotels.find(e => e.hotel === getSlug(slug)) || randomHotel)
  }

  return {
    props: {
      id
    }
  }
}

export default function HotelPage({ id }) {
  const { asPath, isFallback } = useRouter()

  if (!id && !isFallback) return <Error statusCode={404} />

  return id ? (
    <FeedbackContext.Provider value={{ label: id.hotel }}>
      <div className={id.hotel}>
        <Page
          title={id.title}
          description={id.descriptionShort}
          image={id.defaultOgImage}
          keywords={id.name}
          hotel={id.hotel}
          suffix={asPath}
          hideBorder
        >
          <SkipNavContent />
          <Hotel id={id} />
        </Page>
      </div>
    </FeedbackContext.Provider>
  ) : (
    <Container padding>
      <div className="skeleton-container">
        <Skeleton style={{ height: 'calc(100%)' }} />
      </div>
    </Container>
  )
}
