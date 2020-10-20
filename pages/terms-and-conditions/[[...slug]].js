import Container from 'components/container'
import PageContainer from 'components/page-container'
import termsAndConditions from 'lib/terms-and-conditions'
import { useRouter } from 'next/router'
import getTerms from 'lib/get-terms'

export const getStaticPaths = () => ({
  paths: [
    { params: { slug: ['villa-paradiso'] } },
    { params: { slug: ['ithaca-south-beach'] } },
    { params: { slug: ['treehouse'] } }
  ],
  fallback: true
})

export const getStaticProps = ({ params }) => {
  const hotel = params.slug?.toString()
  const { name, email } = getTerms(hotel)
  return { props: { name, email } }
}

export default function TermsAndConditions({ name, email }) {
  const { asPath } = useRouter()

  return (
    <PageContainer
      title="Aries Living | Terms & Conditions"
      description="Aries Living - Terms & Conditions"
      keywords="Terms & Conditions"
      suffix={asPath}
    >
      <Container padding small>
        <h1>Terms & Conditions</h1>
        {termsAndConditions(name, email).map((terms, i) => (
          <p key={i}>{terms}</p>
        ))}
      </Container>
    </PageContainer>
  )
}
