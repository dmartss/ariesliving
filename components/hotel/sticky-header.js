import cn from 'classnames'
import Button from 'components/button'
import useOnScroll from 'lib/use-on-scroll'
import { useHotel } from 'lib/hotel-context'
import Text from 'components/text'
import { top, sticky, border } from './sticky-header.module.css'

export default function StickyHeader() {
  const {
    id: {
      name,
      urls: { rezTripUrl },
      details: { address, email, phone }
    }
  } = useHotel()

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
      <Button href={rezTripUrl}>Book Now</Button>
    </div>
  )
}
