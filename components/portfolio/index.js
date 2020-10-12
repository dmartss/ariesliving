import { useState, useEffect } from 'react'
import cn from 'classnames'
import Container from 'components/container'
import Button from 'components/button'
import Image from 'components/image'
import { hotels } from 'lib/hotels'
import styles from './portfolio.module.css'
import styleUtils from 'components/utils.module.css'

export default function Portfolio({ description, id, title, width, height }) {
  const [cardClickable, setCardClickable] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(hover: hover)').matches) setCardClickable(true)
  }, [])

  return (
    <Container center wide aria-labelledby="portfolio" id={id}>
      <div className={styles['main']}>
        <h2 className={cn(styleUtils.lines, 'fp fw4')}>{title}</h2>
        <Container>
          <div className={styles['button-spacer']}>
            <p className="fs fw3">{description}</p>
          </div>
          <div className={styles.images}>
            {Object.values(hotels).map(({ showcaseSrc, alt, name, url, rezUrl }) => (
              <div className={cn(styles.card, { [styles.clickable]: cardClickable })} key={name}>
                <p className={cn('f-reset fp f4 fw4', alt)}>{name}</p>
                <Image
                  shadow
                  margin={5}
                  alt={alt}
                  width={width}
                  height={height}
                  src={showcaseSrc}
                />
                <div className={styles.buttons}>
                  <div className={styles['button-spacer']}>
                    <Button href={url} invert target="_blank" rel="noopener noreferrer">
                      Learn More
                    </Button>
                  </div>
                  <div className={styles['button-spacer']}>
                    <Button href={rezUrl} invert outline target="_blank" rel="noopener noreferrer">
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

// return cardClickable
// ?  <a key={name} href={url} target="_blank" rel="noopener noreferrer">
//   card
// </a>  : card
