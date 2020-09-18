import cn from 'classnames'
import styles from './section.module.css'

export default function SectionHeader({ title, description, team }) {
  return (
    <div className={cn(styles['content'], { [styles.team]: team })}>
      <h2 className="fp fw4">{title}</h2>
      <p className="f-reset fs f4 fw3">{description}</p>
    </div>
  )
}
