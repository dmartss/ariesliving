import Container from './container'
import Button from './button'
import Image from './image'
import cn from 'classnames'
import { HOTELS } from 'lib/constants'
import styles from './portfolio.module.css'

export default function Portfolio({ description, id, title, width, height, mobileStyle }) {
  return (
    <Container center wide role="region" aria-labelledby="portfolio">
      <div className={styles['main']} id={id}>
        <h2 className="lines fp fw4">{title}</h2>
        <Container center padding>
          <p className={'f-reset fs f4 fw3'}>{description}</p>
          <div className={styles['images']}>
            {HOTELS.map(({ src, alt, name, url, rezUrl }) => (
              <div className={styles['card']} key={name}>
                <p className={cn('f-reset fs f4 fw3', alt)}>{name}</p>
                <div className="hide-tablet">
                  <Image shadow margin={0} alt={alt} src={src} width={width} height={height} />
                </div>
                <div className="display-tablet">
                  <Image
                    margin={5}
                    shadow
                    alt={alt}
                    src={src}
                    width={mobileStyle.width}
                    height={mobileStyle.height}
                  />
                </div>
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
