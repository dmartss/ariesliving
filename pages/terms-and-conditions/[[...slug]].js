import Container from 'components/container'
import { useRouter } from 'next/router'
import Error from 'next/error'
import Page from 'components/page'
import termsAndConditions from 'lib/terms-and-conditions'
import { getSlug } from 'lib/utils'
import hotels from 'hotels'
import aries from 'aries'

export const getStaticPaths = () => ({
  paths: hotels.map(({ hotel }) => ({ params: { slug: [hotel] } })),
  fallback: true
})

export const getStaticProps = ({ params: { slug } }) => {
  const { name, hotel, emailPrefix } = {
    ...(hotels.find(e => e.hotel === getSlug(slug)) || aries)
  }

  const content = termsAndConditions(name, emailPrefix)

  return {
    props: {
      name,
      hotel,
      content
    }
  }
}

export default function TermsAndConditions({ hotel, name, content }) {
  const { asPath, isFallback } = useRouter()

  if (!hotel && !isFallback) return <Error statusCode={404} />

  const header = name || 'Aries Living'
  const title = hotel && `${header} | Terms & Conditions`

  return (
    <Page tAndC title={title} description={title} keywords="Terms & Conditions" suffix={asPath}>
      <Container padding small className={hotel}>
        <h1>Terms & Conditions</h1>
        <h1 className="fp f1">{header}</h1>
        {content?.map((terms, i) => (
          <p key={i}>{terms}</p>
        ))}
      </Container>
    </Page>
  )
}
