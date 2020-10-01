import { Component } from 'react'

const isInDOM = obj => Boolean(obj.closest('body'))

const hasParent = (element, root) => root.contains(element) && isInDOM(element)

export default class ClickOutside extends Component {
  static defaultProps = { active: true }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (this.props.active) {
      document.addEventListener('mousedown', this.handleClick)
      document.addEventListener('touchstart', this.handleClick)
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (!this.props.active && nextProps.active) {
      document.addEventListener('mousedown', this.handleClick)
      document.addEventListener('touchstart', this.handleClick)
    }

    if (this.props.active && !nextProps.active) {
      document.removeEventListener('mousedown', this.handleClick)
      document.removeEventListener('touchstart', this.handleClick)
    }
  }

  componentWillUnmount() {
    if (this.props.active) {
      document.removeEventListener('mousedown', this.handleClick)
      document.removeEventListener('touchstart', this.handleClick)
    }
  }

  handleRef = element => {
    this.element = element
  }

  handleClick = event => {
    if (!hasParent(event.target, this.element)) {
      if (typeof this.props.onClick === 'function') this.props.onClick(event)
    }
  }

  render() {
    return this.props.render({ innerRef: this.handleRef })
  }
}
