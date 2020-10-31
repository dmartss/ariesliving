import cn from 'classnames'
import Collapse, { CollapseGroup } from 'components/collapse'
import Container from 'components/container'
import Skeleton from 'components/skeleton'
import Button from 'components/button'
import Image from 'next/image'
import HotelHeader from './hotel-header'
import useOnScroll from 'lib/use-on-scroll'
import styles from './hotel.module.css'

const StickyHeader = ({ name, address, email, phone, url }) => {
  const { secondHeaderLock } = useOnScroll()
  return (
    <div className={cn(styles.top, styles.sticky, { [styles.border]: secondHeaderLock })}>
      <div>
        <h3 className="fp fw6">{name}</h3>
        <h3>{address}</h3>
        <a href={`mailto:${email}?subject=Hello`}>{email}</a>
        <h3>{phone}</h3>
      </div>
      <Button href={url}>Book Now</Button>
    </div>
  )
}

const HotelInfo = ({ description, rooms, roomTypes }) => (
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
          <Collapse card title={roomName}>
            <div className={styles.flex}>
              <p className="fp">Room Count: {roomCount}</p>
              <p className="fp">Accomodates: {roomOccupancy}</p>
            </div>
            <p>{roomDescription}</p>
          </Collapse>
        </CollapseGroup>
      ))}
    </div>

    {/* For Room Images, use file system to read folder and get pictures from there */}
  </div>
)

export default function Hotel({ id: { name, hotel, details, urls } }) {
  const { address, email, phone, description, rooms, roomTypes } = details

  return (
    <Container role="main">
      {hotel ? (
        <>
          <HotelHeader name={name} hotel={hotel} />
          <Image
            className="image radius"
            src={`/showcase/${hotel}.jpg`}
            alt={`${name} Image`}
            width={1090}
            height={727}
            priority
          />
          <Container wide overflow padding>
            <StickyHeader
              name={name}
              address={address}
              email={email}
              phone={phone}
              url={urls.rezTripUrl}
            />

            <HotelInfo description={description} rooms={rooms} roomTypes={roomTypes} />
          </Container>
        </>
      ) : (
        <div className="skeleton-container">
          <Skeleton style={{ height: 'calc(100% - 5.5rem)' }} />
        </div>
      )}
    </Container>
  )
}
