import cn from 'classnames'
import s from './section.module.css'

export default function SectionHeader({ title, description, team = false }) {
  const rootClassName = cn(s.content, { [s.team]: team })
  return (
    <div className={rootClassName}>
      <h2 className="fp fw4">{title}</h2>
      <p className="f-reset fs f4 fw3">{description}</p>
    </div>
  )
}
