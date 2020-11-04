import { Component } from 'react'
import { validate } from 'email-validator'
import cn from 'classnames'
import AutoComplete from 'components/auto-complete'
import Button from 'components/button'
import EmailClosedIcon from 'components/icons/email-closed'
import s from './email-form.module.css'

class EmailForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: null,
      ios: null,
      focus: false,
      shaking: false,
      error: false,
      safari: false
    }

    this.inputRef = null
  }

  componentDidMount() {
    const ua = navigator.userAgent
    const ios = /iPad|iPhone|iPod/.test(ua)
    const safari = Boolean(ua.match(/Version\/[\d.]+.*Safari/))

    this.setState({ ios, safari })
  }

  onRef = input => {
    this.inputRef = input

    if (this.inputRef && this.props.autoFocus) {
      this.focus()
    }
  }

  onInput = email => {
    if (this.state.error) {
      if (validate(email)) {
        this.setState({ error: false })
      }
    }

    this.setState({ email })
  }

  onFocus = () => {
    this.setState({ focus: true })
  }

  onBlur = () => {
    this.setState({ focus: false })
  }

  focus() {
    if (window.innerWidth < 992) return
    if (this.inputRef) this.inputRef.focus()
  }

  select() {
    this.inputRef.select()
  }

  reset() {
    this.inputRef.reset()
  }

  submit = ev => {
    if (ev) ev.preventDefault()

    const { email } = this.state
    const { onEmail } = this.props

    if (validate(email)) {
      this.setState({ error: false })
      onEmail(email)
    } else {
      if (this.state.shaking) return

      this.setState({ error: true, shaking: true })

      setTimeout(() => {
        this.setState({ shaking: false })
        this.focus()
      }, 1000)
    }
  }

  render() {
    const { ios, safari, error, focus, shaking } = this.state
    const { errorMessage, loading, flex, disabled } = this.props

    const rootClassName = cn(s.root, {
      [s.ios]: ios,
      [s['safari-browser']]: safari
    })

    const emailClassName = cn(s.email, {
      [s.error]: error || errorMessage,
      [s.focus]: focus,
      [s.loading]: loading,
      [s.shaking]: shaking,
      [s.flex]: flex
    })

    return (
      <form className={rootClassName} onSubmit={this.submit}>
        <div className={emailClassName}>
          <label htmlFor="email-input-field">
            <span className={s.icon}>
              <EmailClosedIcon height="15" width="15" fill="currentColor" />
            </span>
            <AutoComplete
              ref={this.onRef}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              onInput={this.onInput}
            >
              <input
                type="email"
                id="email-input-field"
                disabled={Boolean(loading || disabled)}
                placeholder="you@domain.com"
                aria-label="Your email address"
              />
            </AutoComplete>
          </label>

          <Button subscribe invert={flex} type="submit" disabled={Boolean(loading || disabled)}>
            Subscribe
          </Button>
        </div>

        {errorMessage && (
          <p className={s['error-message']}>
            <span>
              {typeof errorMessage === 'string'
                ? errorMessage
                : 'A network error has occurred. Please retry.'}
            </span>
          </p>
        )}
      </form>
    )
  }
}

export default EmailForm
