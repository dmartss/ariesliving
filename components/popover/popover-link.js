import React from 'react'

import Portal from 'components/portal'
import ClickOutside from 'components/click-outside'

export default class PopOverLink extends React.Component {
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
    const {
      to,
      offsetLeft = 0,
      offsetTop = 0,
      offsetBottom = 0,
      fixed,
      left,
      top,
      bottom,
      placement = 'bottom'
    } = this.props
    const { isOpen } = this.state

    return (
      <Portal>
        <span
          ref={innerRef}
          className={`portal ${placement} ${isOpen ? 'show' : ''}`}
          style={{
            position: fixed ? 'fixed' : 'absolute',
            left: left != null ? left : this.state.left + offsetLeft,
            top: placement === 'bottom' ? (top != null ? top : this.state.top + offsetTop) : null,
            bottom:
              placement === 'top'
                ? bottom != null
                  ? bottom
                  : this.state.bottom + offsetBottom
                : null
          }}
        >
          {to}
        </span>
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
          .portal.top {
            transform: translate3d(0px, -12px, 0px);
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
          .portal.show.top {
            transform: translate3d(0px, -15px, 0px);
          }
        `}</style>
      </Portal>
    )
  }

  renderIcon() {
    const { withArrow } = this.props

    return withArrow ? (
      <svg className="arrow" width="9" height="6" viewBox="0 0 9 6">
        <path
          d="M8.903 1.082l-3.8 4.263c-.01.018-.007.041-.022.058a.33.33 0 0 1-.25.097.321.321 0 0 1-.245-.098c-.017-.016-.012-.039-.024-.056l-3.8-4.263a.351.351 0 0 1 0-.483.325.325 0 0 1 .47 0l3.601 4.041L8.435.6A.322.322 0 0 1 8.9.6c.131.133.131.348.002.482z"
          fill="inherit"
        />
      </svg>
    ) : (
      <svg className="dots" width="13" height="3" viewBox="0 0 13 3" fill="none">
        <rect width="3" height="3" rx="1.5" fill="#999999" />
        <rect x="5" width="3" height="3" rx="1.5" fill="#999999" />
        <rect x="10" width="3" height="3" rx="1.5" fill="#999999" />
      </svg>
    )
  }

  render() {
    const { children, isOpen, noIcon } = this.props

    return (
      <span className="wrap">
        <span className="link" ref="link" onClick={isOpen === null ? this.onClick : null}>
          {children}
          {!noIcon && this.renderIcon()}
        </span>
        <ClickOutside onClick={isOpen === null ? this.onClose : null} render={this.renderPortal} />
        <style jsx>{`
          .link {
            cursor: pointer;
          }

          .link :global(.dots) {
            margin-left: 5px;
            margin-bottom: 3px;
          }

          .link :global(.arrow) {
            margin-left: 5px;
            margin-bottom: 2px;
            fill: #666;
            transition: all 200ms ease;
          }
        `}</style>
      </span>
    )
  }
}
