import Container from './container'
import Image from './image'
import cn from 'classnames'
import { HOTELS } from 'lib/constants'
import styles from './portfolio.module.css'

export default function Portfolio({ description, id, title, width, height }) {
  return (
    <Container boxShadow gray wide role="region" aria-labelledby="portfolio">
      <Container center padding>
        <div className={styles['main']} id={id}>
          <h2 className="fp fw4">{title}</h2>
          <p className="f-reset fp fw4">{description}</p>
          <div className={styles['images']}>
            {HOTELS.map(({ src, alt, name, url }) => (
              <div className={styles['card']} key={name}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <p className={cn('fp fw4', alt)}>{name}</p>
                  <Image
                    className="no-drag"
                    shadow
                    alt={alt}
                    src={src}
                    width={width}
                    height={height}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Container>
  )
}
