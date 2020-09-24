import { useState, useEffect } from 'react'
import Container from 'components/container'
import Button from 'components/button'
import Image from 'components/image'
import { HOTELS } from 'lib/constants'
import styles from './portfolio.module.css'
import cn from 'classnames'

export default function Portfolio({ description, id, title, width, height }) {
  const [cardClickable, setCardClickable] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(hover: hover)').matches) setCardClickable(true)
  }, [])

  return (
    <Container center wide aria-labelledby="portfolio" id={id}>
      <div className={styles['main']}>
        <h2 className="lines fp fw4">{title}</h2>
        <Container>
          <div className={styles['button-spacer']}>
            <p className={'fs fw3'}>{description}</p>
          </div>
          <div className={styles.images}>
            {HOTELS.map(({ src, alt, name, url, rezUrl }) => {
              const card = (
                <div className={cn(styles.card, { [styles.clickable]: cardClickable })} key={name}>
                  <p className={('f-reset fs f4 fw3', alt)}>{name}</p>
                  <Image shadow margin={5} alt={alt} src={src} width={width} height={height} />
                  <div className={styles.buttons}>
                    <div className={styles['button-spacer']}>
                      <Button href={url} invert target="_blank" rel="noopener noreferrer">
                        Learn More
                      </Button>
                    </div>
                    <div className={styles['button-spacer']}>
                      <Button
                        href={rezUrl}
                        invert
                        outline
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Book Now
                      </Button>
                    </div>
                  </div>
                </div>
              )
              return cardClickable
                ? // <a key={name} href={url} target="_blank" rel="noopener noreferrer">
                  card
                : // </a>
                  card
            })}
          </div>
        </Container>
      </div>
    </Container>
  )
}
