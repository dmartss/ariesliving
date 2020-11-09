import cn from 'classnames'
import s from './text.module.css'

const Text = ({ className = '', variant = 'body', children, size, weight, color, align }) => {
  const componentsMap = {
    body: 'p',
    heading: 'h1',
    sectionHeading: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5'
  }

  const Component = componentsMap[variant]

  return (
    <Component
      className={cn(
        {},
        {
          [s[color]]: color,
          [s[size]]: size,
          [s[weight]]: weight,
          [s[align]]: align
        },
        className
      )}
    >
      {children}
    </Component>
  )
}

export default Text
