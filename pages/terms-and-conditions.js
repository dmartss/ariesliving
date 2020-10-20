import Container from 'components/container'
import PageContainer from 'components/page-container'
import termsAndConditions from 'lib/terms-and-conditions'
import { useRouter } from 'next/router'

export default function TermsAndConditions() {
  const { query } = useRouter()
  const hotelName = query.utm_source

  return (
    <PageContainer
      title="Aries Living | Terms & Conditions"
      description="Aries Living - Terms & Conditions"
      suffix="/terms-and-conditions"
      keywords="Terms & Conditions"
    >
      <Container padding small>
        <h1>Terms & Conditions</h1>
        {termsAndConditions(hotelName).map((terms, i) => (
          <p key={i}>{terms}</p>
        ))}
      </Container>
    </PageContainer>
  )
}
