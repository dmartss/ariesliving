import { Component } from 'react'
import cn from 'classnames'
import styles from './textarea.module.css'

export default class Textarea extends Component {
  state = { focused: this.props.autoFocus }

  handleChange = event => {
    this.props.onChange(event.target.value)
  }

  handleRef = node => {
    this.innerRef = node
    if (this.props.innerRef) this.props.innerRef(node)
  }

  handleFocus = event => {
    this.setState({ focused: true })
    if (this.props.onFocus) this.props.onFocus(event)
  }

  handleBlur = event => {
    this.setState({ focused: false })
    if (this.props.onBlur) this.props.onBlur(event)
  }

  render() {
    const { children, disabled, placeholder, type, onChange, ...props } = this.props
    const { focused } = this.state

    delete props.innerRef

    return (
      <div className={cn(styles.wrapper, { focused, disabled })}>
        <textarea
          {...props}
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
          type={type || 'text'}
          disabled={disabled}
          placeholder={placeholder}
          ref={this.handleRef}
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
          onChange={onChange ? this.handleChange : null}
        />
        {children}
      </div>
    )
  }
}
