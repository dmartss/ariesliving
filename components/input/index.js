import { forwardRef, memo, useState } from 'react'
import cn from 'classnames'
import { root, wrapper, isFocused, isDisabled } from './input.module.css'

const Input = ({ onFocus, onBlur, onChange, ...props }, ref) => {
  const [focused, setFocused] = useState(false)

  const handleChange = e => {
    onChange(e.target.value)
  }

  const handleFocus = e => {
    setFocused(true)
    if (onFocus) onFocus(e)
  }

  const handleBlur = e => {
    setFocused(false)
    if (onBlur) onBlur(e)
  }

  const { children, disabled, placeholder, type } = props

  const rootClassName = cn(root, {
    [isFocused]: focused,
    [isDisabled]: disabled
  })

  return (
    <div className={rootClassName} {...props}>
      <div className={wrapper}>
        <input
          ref={ref}
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
          spellCheck="false"
          type={type || 'text'}
          autoFocus={typeof window !== 'undefined' && window.innerWidth <= 600 && false}
          disabled={disabled}
          placeholder={placeholder}
          title={placeholder}
          onBlur={handleBlur}
          onChange={handleChange}
          onFocus={handleFocus}
        />
        {children}
      </div>
    </div>
  )
}

export default forwardRef(Input)

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
