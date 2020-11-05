import { forwardRef, memo, useState } from 'react'
import cn from 'classnames'
import { root, wrapper, isFocused, isDisabled } from './input.module.css'

const Input = (
  { onFocus, onBlur, onChange, disabled, placeholder, type, children, ...props },
  ref
) => {
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

export default memo(forwardRef(Input))
