import cn from 'classnames'
import Text from 'components/text'
import { content, team } from './section.module.css'

export default function SectionHeader({ title, description }) {
  const rootClassName = cn(content, { [team]: title === 'Team' })
  return (
    <div className={rootClassName}>
      <Text variant="sectionHeading" color="fp" weight="fw3">
        {title}
      </Text>
      <Text color="fs" size="f4" weight="fw3">
        {description}
      </Text>
    </div>
  )
}
