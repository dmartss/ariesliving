import { useState, useEffect } from 'react'
import Link from 'next/link'
import cn from 'classnames'
import Container from 'components/container'
import Button from 'components/button'
import Image from 'next/image'
import hotels from 'hotels'
import s from './portfolio.module.css'
import sUtils from 'styles/utils/utils.module.css'

export default function Portfolio({ description, id, title }) {
  const [cardClickable, setCardClickable] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(hover: hover)').matches) setCardClickable(true)
  }, [])

  return (
    <Container center wide withAnchor id={id}>
      <div className={s.main}>
        <h2 className={cn(sUtils.lines, 'fp fw4')}>{title}</h2>
        <Container>
          <div className={s['button-spacer']}>
            <p className="fs fw3">{description}</p>
          </div>
          <div className={s.images}>
            {hotels.map(({ name, hotel, urls: { hotelSite, rezTripUrl } }) => (
              <div className={cn(s.card, { [s.clickable]: cardClickable })} key={name}>
                <Link href={`hotels/${hotel}`}>
                  <div>
                    <p className="f-reset fp f4 fw4">{name}</p>
                    <Image
                      className="image shadow radius"
                      alt={hotel}
                      width={300}
                      height={200}
                      src={`/showcase-thumbnails/${hotel}.jpg`}
                    />
                  </div>
                </Link>
                <div className={s.buttons}>
                  <div className={s['button-spacer']}>
                    <Button href={hotelSite} invert>
                      Learn More
                    </Button>
                  </div>
                  <div className={s['button-spacer']}>
                    <Button href={rezTripUrl} invert outline>
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </Container>
  )
}
