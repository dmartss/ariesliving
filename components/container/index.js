import cn from 'classnames'
import s from './container.module.css'

export default function Container({
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
  id
}) {
  const rootClassName = cn(
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
  )

  return (
    <>
      {withAnchor && <div className="anchor" id={id} />}
      <div className={rootClassName} id={!withAnchor ? id : ''}>
        {children}
      </div>
    </>
  )
}
