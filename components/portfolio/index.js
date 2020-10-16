import { useState, useEffect } from 'react'
import Link from 'next/link'
import cn from 'classnames'
import Container from 'components/container'
import Button from 'components/button'
import Image from 'components/image'
import hotels from 'hotels'
import styles from './portfolio.module.css'
import styleUtils from 'components/utils.module.css'

export default function Portfolio({ description, id, title, width, height }) {
  const [cardClickable, setCardClickable] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(hover: hover)').matches) setCardClickable(true)
  }, [])

  return (
    <Container center wide aria-labelledby="portfolio" id={id}>
      <div className={styles.main}>
        <h2 className={cn(styleUtils.lines, 'fp fw4')}>{title}</h2>
        <Container>
          <div className={styles['button-spacer']}>
            <p className="fs fw3">{description}</p>
          </div>
          <div className={styles.images}>
            {hotels.map(({ name, hotelSite, hotel, rezTripUrl, showcaseSrc }) => (
              <div className={cn(styles.card, { [styles.clickable]: cardClickable })} key={name}>
                <Link as={`hotels/${hotel}`} href="/hotels/[hotel]">
                  <div>
                    <p className="f-reset fp f4 fw4">{name}</p>
                    <Image
                      shadow
                      margin={5}
                      alt={hotel}
                      width={width}
                      height={height}
                      src={showcaseSrc}
                    />
                  </div>
                </Link>
                <div className={styles.buttons}>
                  <div className={styles['button-spacer']}>
                    <Button href={hotelSite} invert>
                      Learn More
                    </Button>
                  </div>
                  <div className={styles['button-spacer']}>
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
