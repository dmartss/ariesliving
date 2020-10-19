import Container from 'components/container'
import Skeleton from 'components/skeleton'
import Button from 'components/button'
// import Details from './details'
import Header from './header'
import Image from 'components/image'
import styles from './hotel.module.css'

export default function Hotel({ id: { name, hotel, details, rezTripUrl } }) {
  return hotel ? (
    <Container role="main" aria-labelledby={hotel}>
      <Header name={name} hotel={hotel} />
      <Image
        src={`/showcase/${hotel}.jpg`}
        shadow
        margin={0}
        oversize={false}
        layout="responsive"
        width={3000 / 2.75}
        height={2000 / 2.75}
        alt={`${name} Image`}
      />
      <Container wide padding id="about">
        <div className={styles.main}>
          <h3 className="fp fw6">{name}</h3>
          <h3 className="f4 fw3">{details.address}</h3>
          <a className="f4 fw3" href={`mailto:${details.email}?subject=Hello`}>
            {details.email}
          </a>
          <h3 className="f4 fw3">{details.phone}</h3>
          <h3 className="f4 fw3">Rooms: {details.rooms}</h3>
          <Button href={rezTripUrl}>Book Now</Button>
          {details.description.map((d, i) => (
            <p key={i}>{d}</p>
          ))}
        </div>
      </Container>
    </Container>
  ) : (
    <Container>
      <div className={styles.container}>
        <Skeleton style={{ height: 'calc(100% - 5.5rem)' }} />
      </div>
    </Container>
  )
}
