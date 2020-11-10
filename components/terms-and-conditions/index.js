import Text from 'components/text'
import Container from 'components/container'

export default function TermsContent({ hotel, header, content }) {
  return (
    <Container padding small hotel={hotel}>
      <Text variant="heading">Terms & Conditions</Text>
      <Text variant="heading" color="fp" size="f0">
        {header}
      </Text>
      {content?.map((terms, i) => (
        <Text key={i}>{terms}</Text>
      ))}
    </Container>
  )
}
