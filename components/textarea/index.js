import { forwardRef, memo, useState } from 'react'
import cn from 'classnames'
import { root, isFocused, isDisabled } from './textarea.module.css'

const TextArea = (
  { onChange, onFocus, onBlur, disabled, placeholder, type, children, ...props },
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
    <div className={rootClassName}>
      <textarea
        {...props}
        ref={ref}
        autoCapitalize="off"
        autoComplete="off"
        autoCorrect="off"
        type={type || 'text'}
        disabled={disabled}
        placeholder={placeholder}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onChange={onChange ? handleChange : null}
      />
      {children}
    </div>
  )
}

export default memo(forwardRef(TextArea))
