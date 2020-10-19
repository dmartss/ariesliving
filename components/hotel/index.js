import Container from 'components/container'
import Skeleton from 'components/skeleton'
// import Details from './details'
import Header from './header'
import Image from 'components/image'
import styles from './hotel.module.css'

export default function Hotel({ id: { src, name, hotel, address, email, phone } }) {
  return src ? (
    <Container role="main" aria-labelledby={hotel}>
      <Header name={name} hotel={hotel} />
      <Image
        src={src}
        shadow
        margin={0}
        oversize={false}
        layout="responsive"
        width={3000 / 2.75}
        height={2000 / 2.75}
        alt={`${name} Image`}
      />
      <Container padding id="about">
        <h2 className="fp fw5">About {name}</h2>
        <h3 className="fw4">{address}</h3>
        <a href={`mailto:${email}?subject=Hello`}>{email}</a>
        <h3 className="fw4">{phone}</h3>

        {/* <Details email={email} address={address}/> */}
      </Container>
    </Container>
  ) : (
    <div className={styles.container}>
      <Skeleton style={{ height: 'calc(100% - 5.5rem)' }} />
    </div>
  )
}
