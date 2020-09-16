import Container from './container'
import Image from './image'
import cn from 'classnames'
import { HOTELS } from 'lib/constants'
import styles from './portfolio.module.css'

export default function Portfolio({ description, id, title, width, height }) {
  return (
    <Container center padding wide role="region" aria-labelledby="portfolio">
      <div className={styles['main']} id={id}>
        <h2 className="lines fp fw4">{title}</h2>
        <p className="fs f4 fw3">{description}</p>
        <Container padding wide>
          <div className={styles['images']}>
            {HOTELS.map(({ src, alt, name, url }) => (
              <div className={styles['card']} key={name}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <p className={cn('fp fw4', alt)}>{name}</p>
                  <div className="hide-tablet">
                    <Image
                      shadow
                      margin={20}
                      layout="responsive"
                      alt={alt}
                      src={src}
                      width={width}
                      height={height}
                    />
                  </div>
                  <div className="display-tablet">
                    <Image
                      shadow
                      margin={10}
                      layout="responsive"
                      alt={alt}
                      src={src}
                      width={width * 1.3}
                      height={height * 1.3}
                    />
                  </div>
                </a>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </Container>
  )
}
