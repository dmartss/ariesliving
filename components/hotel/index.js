import cn from 'classnames'
import Container from 'components/container'
import Skeleton from 'components/skeleton'
import Button from 'components/button'
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
      <Container wide overflow padding>
        <div className={styles.sticky}>
          <div>
            <h3 className="fp fw6">{name}</h3>
            <h3>{details?.address}</h3>
            <a href={`mailto:${details?.email}?subject=Hello`}>{details?.email}</a>
            <h3>{details?.phone}</h3>
          </div>
          <div>
            <Button href={rezTripUrl}>Book Now</Button>
          </div>
        </div>
        <div className={styles.main}>
          <div id="about" className="anchor double" />
          {details?.description?.map((d, i) => (
            <p key={i}>{d}</p>
          ))}
          <div id="rooms" className="anchor double" />
          <h3>Rooms: {details?.rooms}</h3>
          <div className={styles['room-types']}>
            {details?.roomTypes?.map(({ roomName, roomOccupancy, roomCount }, i) => (
              <div className={styles.room} id="rooms">
                <p key={i}>{roomName}</p>
                <p>Accomodates: {roomOccupancy}</p>
                <p>Room Count: {roomCount}</p>
              </div>
            ))}
          </div>

          {/* For Room Images, use file system to read folder and get pictures from there */}
        </div>
      </Container>
    </Container>
  ) : (
    <Container>
      <div className="skeleton-container">
        <Skeleton style={{ height: 'calc(100% - 5.5rem)' }} />
      </div>
    </Container>
  )
}
