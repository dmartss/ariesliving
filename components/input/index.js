import { Component } from 'react'
import cn from 'classnames'
import s from './input.module.css'

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

    const rootClassName = cn(s.root, {
      [s.focused]: focused,
      [s.disabled]: disabled
    })

    return (
      <div className={rootClassName} {...props}>
        <div className={s['input-wrapper']}>
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

// import { useRef, useEffect, forwardRef, useState } from 'react'
// import s from './input.module.css'
// import cn from 'classnames'

// // export default forwardRef((props, ref) => <Input innerRef={ref} {...props} />)

// const useForwardedRef = ref => {
//   const innerRef = useRef(null)
//   useEffect(() => {
//     if (!ref) return
//     if (typeof ref === 'function') ref(innerRef.current)
//     else ref.current = innerRef.current
//   })

//   return innerRef
// }

// export default function Input({
//   autoFocus,
//   onChange,
//   innerRef,
//   onFocus,
//   onBlur,
//   type,
//   disabled,
//   placeholder,
//   children,
//   ...props
// }) {
//   const [focused, setFocused] = useState(autoFocus)
//   const ref = useForwardedRef(innerRef)

//   return (
//     <div className={cn(s.wrapper, { focused, disabled })} {...props}>
//       <div className={s['input-wrapper']}>
//         <input
//           autoCapitalize="off"
//           autoComplete="off"
//           autoCorrect="off"
//           spellCheck="false"
//           type={type || 'text'}
//           autoFocus={typeof window !== 'undefined' && window.innerWidth <= 600 && false}
//           disabled={disabled}
//           placeholder={placeholder}
//           title={placeholder}
//           onBlur={() => setFocused(false)}
//           onChange={e => {
//             onChange(e.target.value)
//           }}
//           onFocus={e => {
//             setFocused(true)
//             if (onFocus) onFocus(e)
//           }}
//           ref={ref}
//         />
//         {children}
//       </div>
//     </div>
//   )
// }
