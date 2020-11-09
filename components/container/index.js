import cn from 'classnames'
import s from './container.module.css'

const Container = ({
  center = false,
  dark = false,
  gray = false,
  wide = false,
  small = false,
  padding = false,
  overflow = false,
  fade = false,
  withAnchor = false,
  className,
  children,
  Component = 'div',
  id,
  ...props
}) => {
  const container = (
    <Component
      className={cn(
        s.root,
        {
          [s.padding]: padding,
          [s.wide]: wide,
          [s.small]: small,
          [s.fade]: fade,
          [s.dark]: dark,
          [s.gray]: gray,
          [s.maxWidth]: wide && !small,
          [s.overflowHidden]: wide && !overflow,
          [s.center]: center
        },
        className
      )}
      id={withAnchor ? '' : id}
      {...props}
    >
      {children}
    </Component>
  )

  if (withAnchor) {
    return (
      <>
        <div className="anchor" id={id} />
        {container}
      </>
    )
  }

  return container
}

Container.displayName = 'Container'
export default Container
