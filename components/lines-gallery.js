import Container from 'components/container'
import Lines from './icons/lines'
import Image from './image'
import styles from './lines-gallery.module.css'
import cn from 'classnames'

const images = [
  { src: '/showcase-thumbnails/ithaca/rooms/cks/5.jpg', alt: 'Ithaca Classic King Suite' },
  {
    src: '/showcase-thumbnails/villa-paradiso/rooms/multi-unit/1.jpg',
    alt: 'Villa Paradiso Suite'
  },
  { src: '/showcase-thumbnails/ithaca/rooms/sk/2.jpg', alt: 'Ithaca Superior King' },
  { src: '/showcase-thumbnails/treehouse/rooms/ql/1.jpg', alt: 'Treehouse Queen Loft' },
  { src: '/showcase-thumbnails/villa-paradiso/rooms/16/1.jpg', alt: 'Villa Paradiso Multi Unit' }
]

const LinesGallery = () => (
  <Container dotBackground wide role="region" aria-labelledby="lines-gallery">
    <div className={cn(styles['container'], 'hide-tablet')}>
      <div className={styles['images']}>
        {images
          .sort(() => Math.random() - 0.5)
          .map(({ src, alt }, i) => (
            <div key={i}>
              <Image
                shadow
                oversize={false}
                width={282}
                height={166}
                src={src}
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
