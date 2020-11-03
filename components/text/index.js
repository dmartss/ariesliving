import cn from 'classnames'
import s from './text.module.css'

const Text = ({ style, className = '', variant = 'body', children, ...props }) => {
  const componentsMap = {
    body: 'p',
    heading: 'h1',
    pageHeading: 'h1',
    sectionHeading: 'h2'
  }

  const Component = componentsMap[variant]

  return (
    <Component
      className={cn(
        s.root,
        {
          [s.pageHeading]: variant === 'pageHeading',
          [s.sectionHeading]: variant === 'sectionHeading',
          [s.fs]: props.fs,
          [s.fp]: props.fp,
          [s.fw4]: props.fw4,
          [s.f5]: props.f5
        },
        className
      )}
      style={style}
    >
      {children}
    </Component>
  )
}

export default Text
