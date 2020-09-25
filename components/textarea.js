import React, { Component } from 'react'
import cn from 'classnames'
import px from 'lib/to-pixels'

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
    const {
      autoFocus,
      children,
      disabled,
      errored,
      maxLength,
      onChange,
      placeholder,
      onPaste,
      onKeyDown,
      className,
      width,
      height,
      type,
      value,
      ...props
    } = this.props
    const { focused } = this.state

    // Don't add this attribute to the DOM element
    delete props.innerRef

    return (
      <div className={cn('wrapper', { errored, focused, disabled }, className)}>
        <textarea
          {...props}
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
          autoFocus={autoFocus}
          disabled={disabled}
          maxLength={maxLength}
          onBlur={this.handleBlur}
          onChange={onChange ? this.handleChange : null}
          onFocus={this.handleFocus}
          onPaste={onPaste}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          ref={this.handleRef}
          type={type || 'text'}
          value={value}
        />

        {children}
        <style jsx>{`
          .wrapper {
            align-items: center;
            border-radius: 5px;
            border: 1px solid var(--accents-2);
            display: inline-flex;
            position: relative;
            transition: border 0.2s ease, color 0.2s ease;
            vertical-align: middle;
            background: var(--aries-bg);
            ${width ? `width: ${px(width)};` : ''}
            ${height ? `height: ${px(height)};` : ''}
          }

          .wrapper.focused {
            border: 1px solid var(--accents-5);
          }

          .wrapper.errored {
            border: 1px solid var(--aries-error);
          }

          .wrapper.errored.focused {
            border: 1px solid var(--aries-error);
            color: var(--aries-error);
          }

          .wrapper.errored textarea {
            color: var(--aries-error);
          }

          .wrapper.disabled {
            border-color: var(--accents-2) !important;
          }

          textarea {
            background-color: transparent;
            border-radius: 0;
            border: 0;
            border: none;
            box-shadow: none;
            box-sizing: border-box;
            display: block;
            font-family: var(--font-sans);
            font-size: 14px;
            line-height: 1.7;
            height: 100%;
            ${height ? '' : 'min-height: 100px'};
            outline: 0;
            padding: 7px 10px;
            resize: none;
            width: 100%;
            color: var(--aries-fg);
          }

          .wrapper textarea:disabled {
            background: var(--accents-1);
            color: var(--accents-4);
            border-radius: 5px;
            cursor: not-allowed;
          }

          .wrapper textarea::placeholder {
            color: var(--accents-3);
          }

          .wrapper textarea:disabled::placeholder {
            color: var(--accents-3);
          }

          @media only screen and (max-device-width: 780px) and (-webkit-min-device-pixel-ratio: 0) {
            textarea {
              font-size: 16px;
            }
          }
        `}</style>
      </div>
    )
  }
}

// import { memo, useState, forwardRef } from 'react'
// import cn from 'classnames'
// import px from 'lib/to-pixels'

// const TextArea = (
//   {
//     autoFocus,
//     children,
//     className,
//     disabled,
//     onFocus,
//     onBlur,
//     errored,
//     onChange,
//     maxLength,
//     placeholder,
//     width,
//     height,
//     type,
//     value,
//     onPaste,
//     onKeyDown,
//     ...props
//   },
//   ref
// ) => {
//   const [focused, setFocused] = useState(autoFocus)

//   const handleChange = event => {
//     onChange(event.target.value)
//   }

//   // const handleRef = node => {
//   //   innerRef = node
//   //   if (props.innerRef) {
//   //     props.innerRef(node)
//   //   }
//   // }

//   const handleFocus = event => {
//     setFocused(true)
//     if (onFocus) {
//       onFocus(event)
//     }
//   }

//   const handleBlur = event => {
//     setFocused(false)
//     if (onBlur) {
//       onBlur(event)
//     }
//   }
//   delete props.innerRef
//   return (
//     <div className={cn('wrapper', { errored, focused, disabled }, className)}>
//       <textarea
//         {...props}
//         autoCapitalize="off"
//         autoComplete="off"
//         autoCorrect="off"
//         autoFocus={autoFocus}
//         disabled={disabled}
//         maxLength={maxLength}
//         onBlur={handleBlur}
//         onChange={onChange ? handleChange : null}
//         onFocus={handleFocus}
//         onPaste={onPaste}
//         onKeyDown={onKeyDown}
//         placeholder={placeholder}
//         ref={ref}
//         type={type || 'text'}
//         value={value}
//       />

//       {children}
//       <style jsx>{`
//         .wrapper {
//           align-items: center;
//           border-radius: 5px;
//           border: 1px solid var(--accents-2);
//           display: inline-flex;
//           position: relative;
//           transition: border 0.2s ease, color 0.2s ease;
//           vertical-align: middle;
//           background: var(--aries-bg);
//           ${width ? `width: ${px(width)};` : ''}
//           ${height ? `height: ${px(height)};` : ''}
//         }

//         .wrapper.focused {
//           border: 1px solid var(--accents-5);
//         }

//         .wrapper.errored {
//           border: 1px solid var(--aries-error);
//         }

//         .wrapper.errored.focused {
//           border: 1px solid var(--aries-error);
//           color: var(--aries-error);
//         }

//         .wrapper.errored textarea {
//           color: var(--aries-error);
//         }

//         .wrapper.disabled {
//           border-color: var(--accents-2) !important;
//         }

//         textarea {
//           background-color: transparent;
//           border-radius: 0;
//           border: 0;
//           border: none;
//           box-shadow: none;
//           box-sizing: border-box;
//           display: block;
//           font-family: var(--font-sans);
//           font-size: 14px;
//           line-height: 1.7;
//           height: 100%;
//           ${height ? '' : 'min-height: 100px'};
//           outline: 0;
//           padding: 7px 10px;
//           resize: none;
//           width: 100%;
//           color: var(--aries-fg);
//         }

//         .wrapper textarea:disabled {
//           background: var(--accents-1);
//           color: var(--accents-4);
//           border-radius: 5px;
//           cursor: not-allowed;
//         }

//         .wrapper textarea::placeholder {
//           color: var(--accents-3);
//         }

//         .wrapper textarea:disabled::placeholder {
//           color: var(--accents-3);
//         }

//         @media only screen and (max-device-width: 780px) and (-webkit-min-device-pixel-ratio: 0) {
//           textarea {
//             font-size: 16px;
//           }
//         }
//       `}</style>
//     </div>
//   )
// }
// export default memo(forwardRef(TextArea))
