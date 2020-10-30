import { Component } from 'react'
import { Arrow } from 'components/icons'
import Portal from 'components/portal'
import styles from './popover-link.module.css'
import ClickOutside from 'components/click-outside'

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
          className={`portal bottom ${isOpen ? 'show' : ''}`}
          style={{
            position: 'absolute',
            left: left != null ? left : this.state.left + offsetLeft,
            top: top != null ? top : this.state.top + offsetTop,
            bottom: null
          }}
        >
          {to}

          <style jsx>{`
            .portal {
              contain: layout;
              transition: opacity 0.2s ease, transform 0.2s ease;
              z-index: 9999;
              opacity: 0;
              pointer-events: none;
              height: 0;
            }
            .portal :global(.menu) {
              box-shadow: var(--dropdown-box-shadow);
              transition: box-shadow 0.5s ease;
            }
            .portal.bottom {
              transform: translate3d(0px, 12px, 0px);
            }
            .portal.show {
              opacity: 1;
              pointer-events: unset;
              height: unset;
            }
            .portal.show :global(.menu) {
              box-shadow: var(--shadow-medium);
            }
            .portal.show.bottom {
              transform: translate3d(0px, 15px, 0px);
            }
          `}</style>
        </span>
      </Portal>
    )
  }

  render() {
    const { children, isOpen } = this.props

    return (
      <span>
        <span className={styles.link} ref="link" onClick={isOpen === null ? this.onClick : null}>
          {children}
          <Arrow />
        </span>
        <ClickOutside onClick={isOpen === null ? this.onClose : null} render={this.renderPortal} />
      </span>
    )
  }
}
