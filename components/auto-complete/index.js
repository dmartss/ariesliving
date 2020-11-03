import React from 'react'
import cn from 'classnames'
import s from './auto-complete.module.css'

export default class AutoComplete extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    const ua = navigator.userAgent
    this.setState({
      ios: /iPad|iPhone|iPod/.test(ua),
      ff: /Firefox/.test(ua)
    })
  }

  componentWillUnmount() {
    clearTimeout(this.blurTimer)
  }

  focus() {
    this.refs.input.focus()
  }

  select() {
    this.refs.input.select()
  }

  reset() {
    this.refs.input.value = ''
  }

  render() {
    const { val, suggestion } = this.state || {}
    const domains = [
      'aol.com',
      'gmail.com',
      'google.com',
      'yahoo.com',
      'ymail.com',
      'hotmail.com',
      'live.com',
      'outlook.com',
      'inbox.com',
      'mail.com',
      'gmx.com',
      'icloud.com',
      'me.com'
    ]
    const { onInput: input } = this.props

    const check = ev => {
      const el = ev.target
      const value = el.value.trim()

      // the 30 limit works well to avoid showing a suggestion
      // when overflow is triggered, or on mobile
      if (value !== '' && value.length < 30) {
        const domain = value.match(/@(.*)/)

        if (domain && domain[1].length) {
          const match = domain[1]
          let sug
          domains.some(dm => {
            // don't suggest if complete match
            if (match.toLowerCase() === dm.substr(0, match.length) && match !== dm) {
              sug = dm
              return true
            }
          })

          if (sug) {
            this.setState({
              val: value,
              suggestion: sug.substr(match.length),
              hasSuggestion: true
            })
            return
          }
        }
      }

      this.setState({ hasSuggestion: false })
    }

    const onFocus = ev => {
      check(ev)
      if (this.props.onFocus) this.props.onFocus(ev)
    }

    const onInput = ev => {
      input(ev.target.value)
      check(ev)
    }

    const onBlur = ev => {
      this.blurTimer = setTimeout(() => {
        // this.setState({ hasSuggestion: false });
        if (this.props.onBlur) this.props.onBlur(ev)
      }, 100)
    }

    const onKeyDown = ev => {
      const { keyCode } = ev

      if (this.state.hasSuggestion && (keyCode == 39 || keyCode == 9 || keyCode == 13)) {
        complete(ev)
      }
    }

    const complete = ev => {
      ev.preventDefault()
      const val_ = this.state.val + this.state.suggestion
      this.refs.input.value = val_
      this.refs.input.scrollLeft = 1000000
      input(val_)
      this.setState({ hasSuggestion: false })
    }

    const { children } = this.props
    const { hasSuggestion, ios, ff } = this.state

    const el =
      children &&
      React.cloneElement(children, {
        ref: 'input',
        onBlur,
        onFocus,
        onInput,
        onKeyDown
      })

    const rootClassName = cn(s.input, {
      [s.ios]: ios,
      [s.ff]: ff
    })

    return (
      <div className={rootClassName}>
        {el}
        {hasSuggestion && (
          <div className={s['suggestion-wrap']}>
            <div className={s.suggestion}>
              <span className={s.prefix}>{val}</span>
              <span onMouseDown={complete} onTouchStart={complete} className={s.completion}>
                {suggestion}
              </span>
            </div>
          </div>
        )}
      </div>
    )
  }
}
