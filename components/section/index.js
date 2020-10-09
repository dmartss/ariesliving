import cn from 'classnames'
import Container from 'components/container'
import Image from 'components/image'
import SectionHeader from './section-header'
import styles from './section.module.css'

export default function Section({ description, height, width, title, alt, src, id }) {
  return (
    <Container id={id} wide>
      <Container padding center>
        <div className={cn(styles.main, { [styles.reverse]: title === 'Investors' })}>
          <Image className="no-drag" shadow alt={alt} src={src} width={width} height={height} />
          <SectionHeader title={title} description={description} />
        </div>
      </Container>
    </Container>
  )
}
