import Container from './container'
import Image from './image'
import styles from './section.module.css'
import cn from 'classnames'

export default function Section({ description, id, reverse, title, alt, src, width, height }) {
  return (
    <Container wide>
      <Container padding center>
        <div className={cn(styles.main, { [styles.reverse]: reverse })} id={id}>
          <Image className="no-drag" shadow alt={alt} src={src} width={width} height={height} />
          <div className={styles.content}>
            <h2 className="fp fw4">{title}</h2>
            <p className="f-reset fs fw4">{description}</p>
          </div>
        </div>
      </Container>
    </Container>
  )
}
