import { useRouter } from 'next/router'
import Error from 'next/error'
import Page from 'components/utils/page'
import termsAndConditions from 'lib/terms-and-conditions'
import TermsContent from 'components/terms-and-conditions'
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
      <TermsContent hotel={hotel} header={header} content={content} />
    </Page>
  )
}
