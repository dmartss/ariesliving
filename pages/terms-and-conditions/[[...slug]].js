import Container from 'components/container'
import Error from 'next/error'
import PageContainer from 'components/page-container'
import termsAndConditions from 'lib/terms-and-conditions'
import { useRouter } from 'next/router'
import hotels from 'hotels'

export const getStaticPaths = () => ({
  paths: hotels.map(({ hotel }) => ({ params: { slug: [hotel] } })),
  fallback: true
})

export const getStaticProps = ({ params }) => {
  const {
    name,
    hotel,
    details: { email }
  } = {
    ...(hotels.find(e => e.hotel === params.slug?.toString()) || {
      name: 'Aries Living',
      hotel: 'aries-living',
      details: { email: 'info@ariesliving.com' }
    })
  }

  const content = termsAndConditions(name, email)

  return { props: { name, hotel, content } }
}

export default function TermsAndConditions({ hotel, name, content }) {
  const { asPath, isFallback } = useRouter()

  if (!hotel && !isFallback) {
    return <Error statusCode={404} />
  }
  const header = name || 'Aries Living'
  const title = hotel && `${header} | Terms & Conditions`

  return (
    <PageContainer title={title} description={title} keywords="Terms & Conditions" suffix={asPath}>
      <Container padding small className={hotel}>
        <h1>Terms & Conditions</h1>
        <h1 className="fp f1">{header}</h1>
        {content?.map((terms, i) => (
          <p key={i}>{terms}</p>
        ))}
      </Container>
    </PageContainer>
  )
}
