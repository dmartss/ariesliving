import Container from './container'
import Image from './image'
import cn from 'classnames'
import { HOTELS } from 'lib/constants'
import styles from './portfolio.module.css'

export default function Portfolio({ description, id, title, width, height }) {
  return (
    <Container gray wide overflow center padding role="region" aria-labelledby="portfolio">
      <div className={styles['main']} id={id}>
        <h2 className="fs fw4">{title}</h2>
        <p className="f-reset fp fw4">{description}</p>
        <div className={styles['images']}>
          {HOTELS.map(({ src, alt, name, url }) => (
            <div className={styles['links']} key={name}>
              <a className={cn('fs fw4', alt)} href={url} target="_blank" rel="noopener noreferrer">
                {name}
              </a>
              <Image className="no-drag" shadow alt={alt} src={src} width={width} height={height} />
            </div>
          ))}
        </div>
        <style jsx>{``}</style>
      </div>
    </Container>
  )
}
