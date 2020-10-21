import { SkipNavContent } from '@reach/skip-nav'
import Error from 'next/error'
import { useRouter } from 'next/router'
import FeedbackContext from 'components/feedback/feedback-context'
import Hotel from 'components/hotel'
import Page from 'components/page'
import hotels from 'hotels'

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
      <Page
        title={id.title}
        description={id.descriptionShort}
        image={id.defaultOgImage}
        keywords={id.name}
        hotel={id.hotel}
        suffix={asPath}
      >
        <SkipNavContent />
        <Hotel id={id} />
      </Page>
    </FeedbackContext.Provider>
  )
}
