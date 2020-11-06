import { useState, useEffect, useRef, useCallback } from 'react'
import cn from 'classnames'
import ClickOutside from 'components/utils/click-outside'
import { Checkmark } from 'components/icons'
import Textarea from 'components/textarea'
import Button from 'components/button'
import Input from 'components/input'
import { useFeedback } from 'lib/feedback-context'
import EmojiSelector from './emoji-selector'
import s from './feedback.module.css'

const SuccessMessage = () => (
  <div className={s.successMessage}>
    <Checkmark fill color="var(--aries-1)" size="var(--gap-double)" className={s.checkmark} />
    <p>Your feedback has been received!</p>
    <p>Thank you for your help.</p>
  </div>
)

const EMOJIS = new Map([
  ['🤩', 'f929'],
  ['🙂', 'f600'],
  ['😕', 'f615'],
  ['😭', 'f62d']
])

let EMOJI_CODES = null

function getEmoji(code) {
  if (code === null) return code
  if (EMOJI_CODES === null) EMOJI_CODES = new Map([...EMOJIS].map(([k, v]) => [v, k]))
  return EMOJI_CODES.get(code)
}

const Feedback = ({ className, open, onClick, ...props }) => {
  const [emoji, setEmoji] = useState(null)
  const [loading, setLoading] = useState(false)
  const [focused, setFocused] = useState(false)
  const [success, setSuccess] = useState(false)
  const [emojiShown, setEmojiShown] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  const [emailValue, setEmailValue] = useState(null)
  const [inputFocused, setInputFocused] = useState(null)
  const [value, setValue] = useState(null)
  const feedback = useFeedback()

  const textAreaRef = useRef()
  const emailInputRef = useRef()
  const containerRef = useRef()

  const onErrorDismiss = useCallback(() => {
    setErrorMessage(null)
  }, [])

  const onSuccessDismiss = useCallback(() => {
    setSuccess(false)
  }, [])

  const handleClickOutside = useCallback(() => {
    setFocused(false)
    onErrorDismiss()
    onSuccessDismiss()

    if (textAreaRef.current) textAreaRef.current.value = ''
    if (emailInputRef.current) emailInputRef.current.value = ''
  }, [onErrorDismiss, onSuccessDismiss])

  const onSubmit = useCallback(
    async e => {
      e.preventDefault()
      containerRef.current.focus()

      if (!value || value.trim() === '') {
        setErrorMessage("Your feedback can't be empty")
        return
      }

      setLoading(true)

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          note: textAreaRef.current.value,
          email: emailValue || '',
          emotion: getEmoji(emoji),
          label: feedback.label
        })
      })
      const text = await res.text()

      if (res.status === 200) {
        setLoading(false)
        setSuccess(true)
        setValue('')
      } else {
        setLoading(false)
        setErrorMessage(text || 'An error ocurred. Try again in a few minutes.')
      }
    },
    [emoji, value, emailValue]
  )

  const onKeyDown = useCallback(
    e => {
      if (e.keyCode === 27) {
        handleClickOutside()
        if (containerRef.current) containerRef.current.focus()
      } else if (e.key === 'Enter' && e.metaKey) onSubmit(e)
    },
    [handleClickOutside, onSubmit]
  )

  useEffect(() => {
    if (focused && inputFocused.current && errorMessage === null) {
      inputFocused.current.focus({ preventScroll: true })
    }
  }, [errorMessage, focused, inputFocused])

  useEffect(() => {
    if (focused) {
      if (textAreaRef && textAreaRef.current) textAreaRef.current.value = value

      if (emailInputRef && emailInputRef.current) emailInputRef.current.value = emailValue

      window.addEventListener('keydown', onKeyDown)
    } else if (!focused && inputFocused && inputFocused.current) {
      inputFocused.current.blur()

      textAreaRef.current.value = ''

      emailInputRef.current.value = ''

      window.removeEventListener('keydown', onKeyDown)
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [focused, inputFocused, handleClickOutside, emailValue, value, onSubmit, onKeyDown])

  useEffect(() => {
    let clearSuccessTimer
    if (success) {
      clearSuccessTimer = setTimeout(() => {
        if (!document.hidden) {
          setSuccess(false)
          handleClickOutside()
        }
      }, 5000)
    }

    return () => {
      if (clearSuccessTimer !== null) {
        clearTimeout(clearSuccessTimer)
        clearSuccessTimer = null
      }
    }
  }, [success, handleClickOutside])

  const focusEmailInput = useCallback(() => {
    if (inputFocused !== emailInputRef) {
      setInputFocused(emailInputRef)
      emailInputRef.current.focus({ preventScroll: true })
    }
  }, [inputFocused])

  const focusTextArea = useCallback(() => {
    if (inputFocused !== textAreaRef) {
      setInputFocused(textAreaRef)
      textAreaRef.current.focus({ preventScroll: true })
    }
  }, [inputFocused])

  const onFocus = useCallback(() => {
    if (emailInputRef.current && !focused) focusEmailInput()
    else if (textAreaRef.current && !focused) focusTextArea()

    setFocused(true)
  }, [emailInputRef, textAreaRef, focused, focusEmailInput, focusTextArea])

  const onEmojiShown = useCallback(() => {
    setEmojiShown(true)
  }, [])

  const onEmojiHidden = useCallback(() => {
    setEmojiShown(false)
  }, [])

  const onEmojiSelect = useCallback(emoji => {
    setEmoji(emoji)
  }, [])

  const handleChange = useCallback(
    e => {
      if (focused) setValue(e)
    },
    [focused]
  )

  const handleEmailChange = useCallback(
    e => {
      if (focused) setEmailValue(e)
    },
    [focused]
  )

  const eventListeners = useRef()
  eventListeners.current = { focus: onFocus, blur: handleClickOutside }

  useEffect(() => {
    if (!containerRef || !containerRef.current) return

    let isFocusedInside = false
    let lastState = false
    const checkFinalState = () => {
      setTimeout(() => {
        if (isFocusedInside !== lastState) {
          if (isFocusedInside) eventListeners.current.focus()
          else eventListeners.current.blur()

          lastState = isFocusedInside
        }
      }, 0)
    }

    const focusIn = () => {
      isFocusedInside = true
      checkFinalState()
    }
    const blurIn = () => {
      isFocusedInside = false
      checkFinalState()
    }

    containerRef.current.addEventListener('focusout', blurIn)
    containerRef.current.addEventListener('focusin', focusIn)
    return () => {
      containerRef.current.addEventListener('focusout', blurIn)
      containerRef.current.removeEventListener('focusin', focusIn)
    }
  }, [])

  const rootClassName = cn(
    s.root,
    {
      [s.focused]: focused || open,
      [s.error]: errorMessage,
      [s.loading]: loading,
      [s.success]: success
    },
    className
  )

  return (
    <ClickOutside
      active={focused}
      onClick={handleClickOutside}
      render={({ innerRef }) => (
        <div
          ref={node => {
            containerRef.current = node
            innerRef(node)
          }}
          title="Share any feedback about our products and services"
          onClick={onFocus}
          tabIndex={0}
          className={rootClassName}
          {...props}
        >
          <form className={cn(s.wrapper, { [s.blur]: !focused })} onSubmit={onSubmit}>
            <div className={s.placeholder}>Contact</div>
            {!errorMessage && !success && (
              <div className={s.inputWrapper}>
                <div className={s.input}>
                  <h5>Email</h5>
                  <Input
                    type="email"
                    placeholder="Your email address..."
                    aria-label="Your email address"
                    ref={emailInputRef}
                    onFocus={() => setInputFocused(emailInputRef)}
                    disabled={loading === true || errorMessage != null}
                    onChange={handleEmailChange}
                  />
                </div>

                <div className={s.input}>
                  <h5>Feedback</h5>
                  <Textarea
                    placeholder="Your feedback..."
                    aria-label="Feedback input"
                    data-gramm-editor="false"
                    onChange={handleChange}
                    ref={textAreaRef}
                    onFocus={() => setInputFocused(textAreaRef)}
                    disabled={loading === true || errorMessage != null}
                  />
                </div>
              </div>
            )}

            {errorMessage != null && (
              <div className={s.errorMessage}>
                <span>{errorMessage}</span>
                <Button
                  invert
                  outline
                  small
                  autoFocus
                  onClick={e => {
                    e.preventDefault()
                    onErrorDismiss()
                  }}
                >
                  GO BACK
                </Button>
              </div>
            )}

            {success && <SuccessMessage />}

            {!success && !errorMessage && (
              <div className={s.controls}>
                <span className={s.emojis}>
                  <EmojiSelector
                    EMOJIS={EMOJIS}
                    onShow={onEmojiShown}
                    onHide={onEmojiHidden}
                    onEmojiSelect={onEmojiSelect}
                    loading={loading}
                  />
                </span>
                <span className={cn(s.buttons, { [s.hidden]: emojiShown })}>
                  <Button type="submit" invert outline small loading={loading} width={60}>
                    Send
                  </Button>
                </span>
              </div>
            )}
          </form>
        </div>
      )}
    />
  )
}

export default Feedback
