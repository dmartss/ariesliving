import cn from 'classnames'
import Collapse, { CollapseGroup } from 'components/collapse'
import Container from 'components/container'
import Skeleton from 'components/skeleton'
import Button from 'components/button'
import Image from 'next/image'
import HotelHeader from './hotel-header'
import Text from 'components/text'
import useOnScroll from 'lib/use-on-scroll'
import { top, sticky, border, main, flex } from './hotel.module.css'

const StickyHeader = ({ name, address, email, phone, url }) => {
  const { secondHeaderLock } = useOnScroll()

  const rootClassName = cn(top, sticky, { [border]: secondHeaderLock })

  return (
    <div className={rootClassName}>
      <div>
        <Text variant="h3" color="fp" weight="fw6">
          {name}
        </Text>
        <Text variant="h3">{address}</Text>
        <a href={`mailto:${email}?subject=Hello`}>{email}</a>
        <Text variant="h3">{phone}</Text>
      </div>
      <Button href={url}>Book Now</Button>
    </div>
  )
}

const HotelInfo = ({ description, rooms, roomTypes }) => (
  <div className={main}>
    <div id="about" className="anchor double" />

    {description?.map((d, i) => (
      <Text key={i}>{d}</Text>
    ))}

    <div id="rooms" className="anchor double" />
    <Text variant="h3" weight="fw5" color="fp">
      Rooms: {rooms}
    </Text>

    {roomTypes?.map(({ roomName, roomOccupancy, roomCount, roomDescription }, i) => (
      <CollapseGroup key={i}>
        <Collapse card title={roomName}>
          <div className={flex}>
            <Text color="fp">Room Count: {roomCount}</Text>
            <Text color="fp">Accomodates: {roomOccupancy}</Text>
          </div>
          <Text>{roomDescription}</Text>
        </Collapse>
      </CollapseGroup>
    ))}
  </div>
)

export default function Hotel({ id: { name, hotel, details, urls } }) {
  const { address, email, phone, description, rooms, roomTypes } = details

  return (
    <Container wide overflow role="main">
      <Container padding>
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
            <StickyHeader
              name={name}
              address={address}
              email={email}
              phone={phone}
              url={urls.rezTripUrl}
            />

            <HotelInfo description={description} rooms={rooms} roomTypes={roomTypes} />
          </>
        ) : (
          <Skeleton style={{ height: 'calc(100% - 5.5rem)' }} />
        )}
      </Container>
    </Container>
  )
}
