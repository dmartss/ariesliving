import { SkipNavContent } from '@reach/skip-nav'
import Error from 'next/error'
import { useRouter } from 'next/router'
import FeedbackContext from 'components/feedback/feedback-context'
import Image from 'components/image'
import Page from 'components/page'
import hotels from 'hotels'

export const getStaticPaths = () => ({
  paths: hotels.map(({ hotel }) => ({ params: { hotel } })),
  fallback: false
})
export const getStaticProps = ({ params }) => {
  return { props: { hotel: { ...hotels.find(e => e.hotel === params.hotel) } } }
}

export default function Hotel({ hotel }) {
  const router = useRouter()
  const { asPath, isFallback } = router

  if (!hotel && !isFallback) {
    return <Error statusCode={404} />
  }

  return (
    <FeedbackContext.Provider value={{ label: hotel.hotel }}>
      <div className={hotel.hotel}>
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
      </div>
    </FeedbackContext.Provider>
  )
}
