import { SkipNavContent } from '@reach/skip-nav'
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
  const id = { ...(hotels.find(e => e.hotel === getSlug(slug)) || hotels[0]) }

  return {
    props: {
      id
    }
  }
}

export default function HotelPage({ id }) {
  const { asPath, isFallback } = useRouter()

  if (!id) id = hotels[0]
  if (!id && !isFallback) return <Error statusCode={404} />

  return (
    <FeedbackContext.Provider value={{ label: id.hotel }}>
      <div className={id.hotel}>
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
      </div>
    </FeedbackContext.Provider>
  )
}
