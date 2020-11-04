import { useState, useEffect } from 'react'
import Link from 'next/link'
import cn from 'classnames'
import Container from 'components/container'
import Text from 'components/text'
import Button from 'components/button'
import Image from 'next/image'
import hotels from 'hotels'
import { main, images, card, clickable, buttons, buttonSpacer } from './portfolio.module.css'
import { lines } from 'styles/utils/utils.module.css'

export default function Portfolio({ description, id, title }) {
  const [cardClickable, setCardClickable] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(hover: hover)').matches) setCardClickable(true)
  }, [])

  return (
    <Container center wide withAnchor={id.toString()}>
      <div className={main}>
        <Text variant="sectionHeading" color="fp" weight="fw4" className={lines}>
          {title}
        </Text>
        <Container>
          <div className={buttonSpacer}>
            <Text color="fs" weight="fw4">
              {description}
            </Text>
          </div>
          <div className={images}>
            {hotels.map(({ name, hotel, urls: { hotelSite, rezTripUrl } }) => (
              <div className={cn(card, { [clickable]: cardClickable })} key={name}>
                <Link href={`hotels/${hotel}`}>
                  <div>
                    <Text color="fp" size="f4" weight="fw4">
                      {name}
                    </Text>
                    <Image
                      className="image shadow radius"
                      alt={hotel}
                      width={300}
                      height={200}
                      src={`/showcase-thumbnails/${hotel}.jpg`}
                    />
                  </div>
                </Link>
                <div className={buttons}>
                  <div className={buttonSpacer}>
                    <Button href={hotelSite} invert>
                      Learn More
                    </Button>
                  </div>
                  <div className={buttonSpacer}>
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
