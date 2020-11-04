import cn from 'classnames'
import s from './text.module.css'

const Text = ({
  style,
  className = '',
  variant = 'body',
  children,
  size,
  weight,
  color,
  align,
  ...props
}) => {
  const componentsMap = {
    body: 'p',
    heading: 'h1',
    sectionHeading: 'h2',
    h3: 'h3'
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
      style={style}
      {...props}
    >
      {children}
    </Component>
  )
}

export default Text
