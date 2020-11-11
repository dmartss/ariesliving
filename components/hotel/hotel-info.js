import Collapse, { CollapseGroup } from 'components/collapse'
import Text from 'components/text'
import { useHotel } from 'lib/hotel-context'
import { main, flex } from './hotel-info.module.css'

export default function HotelInfo() {
  const {
    id: {
      details: { description, rooms, roomTypes }
    }
  } = useHotel()

  return (
    <div className={main}>
      <div id="about" className="anchor double" />

      {description?.map((d, i) => (
        <p key={i}>{d}</p>
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
}
