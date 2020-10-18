import Container from 'components/container'
import Header from './header'
import Image from 'components/image'

export default function Hotel({ id: { src, name, hotel, address, email } }) {
  return (
    <Container>
      <Header name={name} hotel={hotel} />
      <Image
        src={src}
        shadow
        margin={0}
        noBorder
        oversize={false}
        layout="responsive"
        width={3000 / 2.75}
        height={2000 / 2.75}
        alt={`${name} Image`}
      />
    </Container>
  )
}
