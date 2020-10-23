import { useState, useCallback, useMemo, useRef, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'
import useMeasure from 'react-use-measure'
import { ResizeObserver } from '@juggle/resize-observer'
import cn from 'classnames'
import styles from './collapse.module.css'

import { useCollapse } from './collapse-context'
import useMediaQuery from 'lib/use-media-query'
import { ChevronDown } from 'components/icons'

const Collapse = ({ title, subtitle, id, onToggle, card, size, children }) => {
  const [ref, { height }] = useMeasure({ polyfill: ResizeObserver })
  const [active, setActive] = useState(false)
  const collapseContext = useCollapse()
  const immediateAnimation = useRef(false)

  // Trigger re-render when window size changes
  useMediaQuery(960)
  useMediaQuery(600)

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
      if (collapseContext) {
        collapseContext.onChange(title)
      } else {
        setActive(true)
      }
      timeout = setTimeout(() => {
        immediateAnimation.current = false
      }, 1000)
    }

    return () => {
      if (timeout) clearTimeout(timeout)
    }
  }, [])

  const small = size === 'small'

  return (
    <div
      className={cn('tl', styles.collapse, {
        [styles.card]: card,
        [styles.small]: small,
        [styles.border]: !collapseContext
      })}
      id={id}
    >
      <div
        role="button"
        tabIndex="0"
        className={styles['collapse-title']}
        aria-expanded={open}
        onClick={_toggle}
        onKeyPress={ev => onKeyPress(ev, _toggle)}
      >
        <div className={styles.top}>
          <h3 className="fw5">{title}</h3>
          <span className={cn(styles.icon, { [styles.open]: open })}>
            <ChevronDown />
          </span>
        </div>

        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
      <animated.div style={{ overflow: 'hidden', ...props }}>
        <div ref={ref} className={cn(styles['collapse-content'], { [styles.open]: open })}>
          {children}
        </div>
      </animated.div>
    </div>
  )
}

export default Collapse
