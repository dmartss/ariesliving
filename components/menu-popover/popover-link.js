import { Component } from 'react'
import cn from 'classnames'
import { Arrow } from 'components/icons'
import Portal from 'components/utils/portal'
import s from './popover-link.module.css'
import ClickOutside from 'components/utils/click-outside'

export default class PopOverLink extends Component {
  static defaultProps = { isOpen: null }

  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
      top: null,
      left: null,
      width: null
    }

    this.resizeRaf = null
  }

  componentDidMount() {
    if (this.props.isOpen) {
      this.setOpen()
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.isOpen) {
      this.setOpen()
    } else if (nextProps.isOpen === false) {
      this.setClose()
    }
  }

  setOpen() {
    const bodyRect = document.body.getBoundingClientRect()
    const targetRect = this.refs.link.getBoundingClientRect()
    this.setState({
      isOpen: true,
      top: targetRect.top - bodyRect.top,
      bottom: window.innerHeight - targetRect.top,
      left: targetRect.left - bodyRect.left
    })
    this.props.onOpen && this.props.onOpen()
  }

  setClose() {
    this.setState({ isOpen: false })
  }

  onClick = e => {
    this.setOpen()
    e.preventDefault()
    e.stopPropagation()
    window.addEventListener('resize', this.onResize)
  }

  onClose = () => {
    this.setClose()
    window.removeEventListener('resize', this.onResize)
  }

  onResize = () => {
    if (this.resizeRaf) return
    this.resizeRaf = requestAnimationFrame(() => {
      const bodyRect = document.body.getBoundingClientRect()
      const targetRect = this.refs.link.getBoundingClientRect()

      if (!targetRect.width && !targetRect.height) {
        this.onClose()
        return
      }

      this.setState({
        top: targetRect.top - bodyRect.top,
        bottom: window.innerHeight - targetRect.top,
        left: targetRect.left - bodyRect.left
      })
      this.resizeRaf = null
    })
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.resizeRaf)
    this.resizeRaf = null
    window.removeEventListener('resize', this.onResize)
  }

  renderPortal = ({ innerRef }) => {
    const { to, offsetLeft = -62, offsetTop = 0, left, top } = this.props
    const { isOpen } = this.state

    return (
      <Portal>
        <span
          ref={innerRef}
          className={cn(s.portal, s.bottom, { [s.show]: isOpen })}
          style={{
            position: 'absolute',
            left: left != null ? left : this.state.left + offsetLeft,
            top: top != null ? top : this.state.top + offsetTop,
            bottom: null
          }}
        >
          {to}
        </span>
      </Portal>
    )
  }

  render() {
    const { children, isOpen } = this.props

    return (
      <span>
        <span className={s.link} ref="link" onClick={isOpen === null ? this.onClick : null}>
          {children}
          <Arrow />
        </span>
        <ClickOutside onClick={isOpen === null ? this.onClose : null} render={this.renderPortal} />
      </span>
    )
  }
}
