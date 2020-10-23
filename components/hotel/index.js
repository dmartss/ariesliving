import cn from 'classnames'
import Container from 'components/container'
import Skeleton from 'components/skeleton'
import Button from 'components/button'
import Header from './header'
import Image from 'components/image'
import styles from './hotel.module.css'
import Collapse, { CollapseGroup } from 'components/collapse'

export default function Hotel({ id: { name, hotel, details, rezTripUrl }, sticky = true }) {
  const { address, email, phone, description, rooms, roomTypes } = details
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
        <div className={cn(styles.top, { [styles.sticky]: sticky })}>
          <div>
            <h3 className="fp fw6">{name}</h3>
            <h3>{address}</h3>
            <a href={`mailto:${email}?subject=Hello`}>{email}</a>
            <h3>{phone}</h3>
          </div>
          <Button href={rezTripUrl}>Book Now</Button>
        </div>

        <div className={styles.main}>
          <div id="about" className="anchor double" />
          {description?.map((d, i) => (
            <p key={i}>{d}</p>
          ))}

          <div id="rooms" className="anchor double" />
          <h3 className="fw5 fp">Rooms: {rooms}</h3>

          <div className={styles['room-types']}>
            {roomTypes?.map(({ roomName, roomOccupancy, roomCount, roomDescription }, i) => (
              <CollapseGroup key={i}>
                <Collapse size="small" title={roomName}>
                  <p className="fp">Room Count: {roomCount}</p>
                  <p className="fp">Accomodates: {roomOccupancy}</p>
                  <p>{roomDescription}</p>
                </Collapse>
              </CollapseGroup>
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
