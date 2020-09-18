import Container from './container'
import Button from './button'
import Image from './image'
import { HOTELS } from 'lib/constants'
import styles from './portfolio.module.css'

export default function Portfolio({ description, id, title, width, height }) {
  return (
    <Container center wide aria-labelledby="portfolio" id={id}>
      <div className={styles['main']}>
        <h2 className="lines fp fw4">{title}</h2>
        <Container center padding>
          <p className={'f-reset fs f4 fw3'}>{description}</p>
          <div className={styles['images']}>
            {HOTELS.map(({ src, alt, name, url, rezUrl }) => (
              <div className={styles['card']} key={name}>
                <p className={('f-reset fs f4 fw3', alt)}>{name}</p>
                <Image shadow margin={5} alt={alt} src={src} width={width} height={height} />
                <div className={styles['buttons']}>
                  <div className={styles['button-spacer']}>
                    <Button href={url} className={alt} invert outline>
                      Learn More
                    </Button>
                  </div>
                  <div className={styles['button-spacer']}>
                    <Button href={rezUrl} className={alt} invert>
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
