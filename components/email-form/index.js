import { Component } from 'react'
import { validate } from 'email-validator'

import cn from 'classnames'
import AutoComplete from '../auto-complete'
import Button from 'components/button'
import EmailClosedIcon from 'components/icons/email-closed'

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
    const classes = []
    const { ios, safari, error, focus, shaking } = this.state
    const { errorMessage, loading, flex, disabled } = this.props

    if (ios) classes.push('ios')
    if (safari) classes.push('safari-browser')

    // const rootClassName = cn(s.email, {
    //   [s.error]: this.state.error || this.props.errorMessage,
    //   [s.focus]: this.state.focus,
    //   [s.loading]: this.props.loading,
    //   [s.shaking]: this.state.shaking,
    //   [s.flex]: this.props.flex
    // })

    return (
      <form className={cn(classes)} onSubmit={this.submit}>
        <div
          className={cn(
            'email',
            error || errorMessage ? 'error' : '',
            focus ? 'focus' : '',
            loading ? 'loading' : '',
            shaking ? 'shaking' : '',
            flex ? 'flex' : ''
          )}
        >
          <label htmlFor="email-input-field">
            <span className="icon">
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
          <p className="error-message">
            <span>
              {typeof errorMessage === 'string'
                ? errorMessage
                : 'A network error has occurred. Please retry.'}
            </span>
          </p>
        )}

        <style jsx>{`
          form {
            display: inline-block;
            position: relative;
            max-width: 100%;
          }

          form > div {
            width: 240px;
            max-width: 100%;
          }

          form div.flex {
            display: flex;
            flex-direction: row;
            width: 490px;
            align-items: center;
            justify-content: space-between;
          }

          .email {
            text-align: center;
            margin: auto;
            transition: border-bottom-color 100ms ease-in, color 100ms ease-in;
            width: 100%;
          }

          .email.loading {
            border-bottom-color: #888;
          }

          .email.error label {
            border-color: red;
          }

          label {
            background-color: transparent;
            display: flex;
            border-radius: var(--radius);
            border: 1px solid #999;
            align-items: center;
            margin: 0 auto;
          }

          .focus label {
            transition: border-color 200ms ease-in-out;
            border-color: var(--accents-7);
          }

          .error label {
            border-color: red;
          }

          .icon {
            margin: 0 14px;
            display: inline-flex;
          }

          input {
            background-color: transparent;
            border: none;
            border-radius: 0;
            box-sizing: border-box;
            color: var(--aries-fg);
            display: block;
            text-align: left;
            font-size: 14px;
            padding: 4px 0;
            margin: 0 auto;
            line-height: 27px;
            height: var(--input-height);
            width: 100%;
            box-shadow: none;
          }

          .ios input {
            font-size: 16px;
            height: 34px;
            padding-bottom: 4px;
          }

          .focus {
            border-bottom-color: #fff;
          }

          input::placeholder {
            color: #999;
            transition: color 200ms ease-in-out;
          }

          input:focus::placeholder {
            color: var(--aries-fg);
          }

          input:focus {
            outline: none;
          }

          input:disabled {
            color: #666;
          }

          input::-ms-clear {
            display: none;
          }

          .shaking {
            animation: shake 1s both;
          }

          .loading_anim {
            display: block;
            position: absolute;
            bottom: 0px;
            background: #eee;
            width: 100%;
            height: 1px;
            animation-name: waiting;
            animation-duration: 1s;
            animation-direction: alternate;
            animation-iteration-count: infinite;
            animation-timing-function: cubic-bezier(0, 0, 1, 1);
          }

          .inverse .loading_anim {
            background: #9b9b9b;
          }

          @keyframes waiting {
            0% {
              left: 0;
              width: 50px;
              opacity: 0;
            }

            50% {
              width: 100px;
              opacity: 1;
              left: 50%;
            }

            100% {
              width: 50px;
              opacity: 0;
              left: calc(100% - 50px);
            }
          }

          .label {
            color: #d6d6d6;
            font-size: 12px;
            margin-bottom: 40px;
            text-align: center;
          }

          .error-message {
            position: absolute;
            color: red;
            text-align: center;
            font-size: 12px;
            width: 110%;
            margin: 0;
            margin-left: -5%;
            margin-top: 0.5rem;
          }

          .error-message span {
            position: relative;
            padding-left: 20px;
          }

          .error-message span::before {
            display: block;
            content: '';
            width: 11px;
            background: red;
            border-radius: 2px;
            height: 11px;
            position: absolute;
            left: 0;
            top: 1px;
          }

          .submit {
            background: #fff;
            margin: 0 auto;
            display: block;
            width: 200px;
            height: 50px;
            border: 2px solid #000;
            text-transform: uppercase;
            font-size: 12px;
            margin-bottom: 50px;
            font-weight: bold;
          }

          @keyframes shake {
            0%,
            100% {
              transform: translate3d(0, 0, 0);
            }

            10%,
            30%,
            50%,
            70%,
            90% {
              transform: translate3d(-10px, 0, 0);
            }

            20%,
            40%,
            60%,
            80% {
              transform: translate3d(10px, 0, 0);
            }
          }

          @media (max-width: 640px) {
            form > div.flex {
              display: flex;
              flex-direction: column;
              width: 80vw;
              align-items: center;
              justify-content: space-between;
            }
          }
        `}</style>
      </form>
    )
  }
}

export default EmailForm
