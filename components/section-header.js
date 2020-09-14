import Container from './container'
import cn from 'classnames'
import styles from './section-header.module.css'

export default function SectionHeader({ id, title, description, className }) {
  return (
    <Container wide gray>
      <Container center padding>
        <div className={cn(styles['main'], className)} id={id}>
          <h2 className="fs fw3">{title}</h2>
          {description && <p className="f-reset fp fw4">{description}</p>}
        </div>
      </Container>
    </Container>
  )
}
