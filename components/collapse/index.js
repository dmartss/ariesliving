import { useState, useCallback, useMemo, useRef, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'
import cn from 'classnames'
import useMeasure from 'react-use-measure'
import { ResizeObserver } from '@juggle/resize-observer'
import { Provider, useCollapse } from 'lib/collapse-context'
import { useIsMobile, useIsTablet } from 'lib/media-query'
import { ChevronDown } from 'components/icons'
import Text from 'components/text'
import s from './collapse.module.css'

export function CollapseGroup({ children }) {
  const [selected, setSelected] = useState('')
  const onChange = title => {
    setSelected(title)
  }

  return (
    <div className={s.collapseGroup}>
      <Provider value={{ selected, onChange }}>{children}</Provider>
    </div>
  )
}

const Collapse = ({ title, subtitle, id, onToggle, card, size, children }) => {
  const [ref, { height }] = useMeasure({ polyfill: ResizeObserver })
  const [active, setActive] = useState(false)
  const collapseContext = useCollapse()
  const immediateAnimation = useRef(false)

  useIsMobile()
  useIsTablet()

  const toggle = useCallback(() => setActive(!active), [active])

  const open = useMemo(() => {
    return collapseContext
      ? !collapseContext.selected
        ? active
        : collapseContext.selected === title
      : active
  }, [collapseContext, active, title])

  const _toggle = useMemo(() => {
    return collapseContext
      ? () => {
          collapseContext.onChange(open ? null : title)
          if (typeof onToggle === 'function') onToggle()
        }
      : toggle
  }, [collapseContext, open, title, onToggle, toggle])

  const onKeyPress = useCallback((e, cb) => {
    if (e.key === ' ' || e.key === 'Enter') {
      cb()
      e.preventDefault()
    }
  }, [])

  const props = useSpring({
    height: open ? height : 0,
    immediate: immediateAnimation.current,
    config: { tension: 250, friction: 32, clamp: true }
  })

  useEffect(() => {
    let timeout
    const hash = location.hash.slice(1)
    if (id === hash) {
      immediateAnimation.current = true

      if (collapseContext) collapseContext.onChange(title)
      else setActive(true)

      timeout = setTimeout(() => {
        immediateAnimation.current = false
      }, 1000)
    }

    return () => {
      if (timeout) clearTimeout(timeout)
    }
  }, [])

  const rootClassName = cn(s.collapse, {
    [s.card]: card,
    [s.small]: size === 'small',
    [s.border]: !collapseContext
  })

  return (
    <div className={rootClassName} id={id}>
      <div
        role="button"
        tabIndex="0"
        className={s.title}
        aria-expanded={open}
        onClick={_toggle}
        onKeyPress={ev => onKeyPress(ev, _toggle)}
      >
        <div className={s.top}>
          <Text variant="h3" weight="fw5">
            {title}
          </Text>
          <span className={cn(s.icon, { [s.open]: open })}>
            <ChevronDown />
          </span>
        </div>

        {subtitle && <p className={s.subtitle}>{subtitle}</p>}
      </div>
      <animated.div style={{ overflow: 'hidden', ...props }}>
        <div ref={ref} className={cn(s.content, { [s.open]: open })}>
          {children}
        </div>
      </animated.div>
    </div>
  )
}

export default Collapse
