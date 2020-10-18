import { SkipNavContent } from '@reach/skip-nav'
import Error from 'next/error'
import { useRouter } from 'next/router'
import FeedbackContext from 'components/feedback/feedback-context'
import Skeleton from 'components/skeleton'
import Container from 'components/container'
import Hotel from 'components/hotel'
import Page from 'components/page'
import hotels from 'hotels'
import styles from 'styles/pages/hotel.module.css'

export const getStaticPaths = () => ({
  paths: hotels.map(({ hotel }) => ({ params: { hotel } })),
  fallback: false
})
export const getStaticProps = ({ params }) => {
  return { props: { id: { ...hotels.find(e => e.hotel === params.hotel) } } }
}

export default function HotelPage({ id }) {
  const router = useRouter()
  const { asPath, isFallback } = router

  if (!id && !isFallback) {
    return <Error statusCode={404} />
  }

  return (
    <FeedbackContext.Provider value={{ label: id.hotel }}>
      <div className={id.hotel}>
        <Page
          title={id.titleShort}
          description={id.descriptionShort}
          image={id.defaultOgImage}
          keywords={id.name}
          url={asPath}
        >
          <SkipNavContent />
          {id ? (
            <Hotel id={id} />
          ) : (
            <Container>
              <div className={styles.container}>
                <Skeleton style={{ height: 'calc(100% - 5.5rem)' }} />
              </div>
            </Container>
          )}
        </Page>
      </div>
    </FeedbackContext.Provider>
  )
}
