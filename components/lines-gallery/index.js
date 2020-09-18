import Container from 'components/container'
import { Lines } from '../icons'
import Image from '../image'
import styles from './lines-gallery.module.css'
import cn from 'classnames'
import { shuffled } from 'lib/images'

const LinesGallery = () => (
  <Container dotBackground wide role="region" aria-labelledby="lines-gallery">
    <div className={cn(styles['container'], 'hide-tablet')}>
      <div className={styles['images']}>
        {shuffled.map(({ src, alt }) => (
          <div key={alt}>
            <Image
              shadow
              oversize={false}
              width={282}
              height={166}
              src={`/showcase-thumbnails/${src}`}
              alt={alt}
              layout="responsive"
              margin={0}
            />
          </div>
        ))}
      </div>

      <div className={styles['lines-container']}>
        <Lines />
      </div>
    </div>
  </Container>
)

export default LinesGallery
