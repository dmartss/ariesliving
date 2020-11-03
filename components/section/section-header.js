import cn from 'classnames'
import Text from 'components/text'
import s from './section.module.css'

export default function SectionHeader({ title, description, team = false }) {
  const rootClassName = cn(s.content, { [s.team]: team })
  return (
    <div className={rootClassName}>
      <Text variant="sectionHeading" fp fw4>
        {title}
      </Text>
      <Text className="fs f4 fw3">{description}</Text>
    </div>
  )
}
