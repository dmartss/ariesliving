import Container from '../container'
import Image from '../image'
import styles from './section.module.css'
import cn from 'classnames'
import SectionHeader from './section-header'

export default function Section({
  description,
  reverse = false,
  height,
  width,
  title,
  alt,
  src,
  id
}) {
  return (
    <Container id={id} wide divider={title === 'Investors'}>
      <Container padding center>
        <div className={cn(styles.main, { [styles.reverse]: reverse })}>
          <Image className="no-drag" shadow alt={alt} src={src} width={width} height={height} />
          <SectionHeader title={title} description={description} />
        </div>
      </Container>
    </Container>
  )
}
