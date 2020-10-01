import styles from './input.module.css'
import { Component } from 'react'
import cn from 'classnames'

export default class Input extends Component {
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
      <div className={cn(styles.wrapper, { focused, disabled })} {...props}>
        <div className={styles['input-wrapper']}>
          <input
            autoCapitalize="off"
            autoComplete="off"
            autoCorrect="off"
            spellCheck="false"
            type={type || 'text'}
            autoFocus={typeof window !== 'undefined' && window.innerWidth <= 600 && false}
            disabled={disabled}
            placeholder={placeholder}
            title={placeholder}
            onBlur={this.handleBlur}
            onChange={onChange ? this.handleChange : null}
            onFocus={this.handleFocus}
            ref={this.handleRef}
          />
          {children}
        </div>
      </div>
    )
  }
}
