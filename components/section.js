import Image from './image'
import styles from './section.module.css'
import cn from 'classnames'

export default function Section({ description, id, reverse, title, alt, src, width, height }) {
  return (
    <div className={cn(styles.main, { [styles.reverse]: reverse })} id={id}>
      <Image className="no-drag" shadow alt={alt} src={src} width={width} height={height} />
      <div className={styles.content}>
        <h2 className="fs fw4">{title}</h2>
        <p className="f-reset fp fw4">{description}</p>
      </div>
    </div>
  )
}
