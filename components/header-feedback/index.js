import { memo, useState, useEffect, useRef, useCallback } from 'react'
import cn from 'classnames'

import ClickOutside from '../click-outside'
import Button from '../button'
import Input from '../input'
import Textarea from '../textarea'
import Checkmark from 'components/icons/checkmark'
import { useFeedback } from './feedback-context'
import styles from './header-feedback.module.css'

const EMOJIS = new Map([
  ['🤩', 'f929'],
  ['🙂', 'f600'],
  ['😕', 'f615'],
  ['😭', 'f62d']
])

let EMOJI_CODES = null
function getEmoji(code) {
  if (code === null) return code

  if (EMOJI_CODES === null) {
    EMOJI_CODES = new Map([...EMOJIS].map(([k, v]) => [v, k]))
  }
  return EMOJI_CODES.get(code)
}

const HeaderFeedback = ({ className, open, onClick, email, ...props }) => {
  const [emoji, setEmoji] = useState(null)
  const [loading, setLoading] = useState(false)
  const [focused, setFocused] = useState(false)
  const [success, setSuccess] = useState(false)
  const [emojiShown, setEmojiShown] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  const [emailValue, setEmailValue] = useState(null)
  const [inputFocused, setInputFocused] = useState(null)
  const [value, setValue] = useState(null)
  const textAreaRef = useRef()
  const emailInputRef = useRef()
  const containerRef = useRef()
  const feedback = useFeedback()

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
    event => {
      event.preventDefault()
      containerRef.current.focus()

      if (!value || value.trim() === '') {
        setErrorMessage("Your feedback can't be empty")
        return
      }
      if (value.trim().split(' ').length < 2) {
        setErrorMessage('Please use at least 2 words')
        return
      }

      setLoading(true)

      fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          note: textAreaRef.current.value,
          email: emailValue || '',
          emotion: getEmoji(emoji),
          label: feedback.label
        })
      })
        .then(() => {
          setLoading(false)
          setSuccess(true)
          setValue('')
        })
        .catch(err => {
          setLoading(false)
          setErrorMessage(err?.message || 'An error ocurred. Try again in a few minutes.')
        })
    },
    [emoji, value, emailValue, feedback.label]
  )

  const onKeyDown = useCallback(
    e => {
      if (e.keyCode === 27) {
        handleClickOutside()
        if (containerRef.current) containerRef.current.focus()
      } else if (e.key === 'Enter' && e.metaKey) {
        onSubmit(e)
      }
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
      if (textAreaRef && textAreaRef.current) {
        textAreaRef.current.value = value
      }

      if (emailInputRef && emailInputRef.current) {
        emailInputRef.current.value = emailValue
      }

      window.addEventListener('keydown', onKeyDown)
    } else if (!focused && inputFocused && inputFocused.current) {
      inputFocused.current.blur()

      // Remove value visibly from textarea while it's unfocused
      textAreaRef.current.value = ''

      if (email) emailInputRef.current.value = ''

      window.removeEventListener('keydown', onKeyDown)
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [focused, inputFocused, handleClickOutside, emailValue, value, email, onSubmit, onKeyDown])

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
    if (email && emailInputRef.current && !focused) {
      focusEmailInput()
    } else if (textAreaRef.current && !focused) {
      focusTextArea()
    }

    setFocused(true)
  }, [email, emailInputRef, textAreaRef, focused, focusEmailInput, focusTextArea])

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
  eventListeners.current = {
    focus: onFocus,
    blur: handleClickOutside
  }

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
          className={cn(
            styles['feedback-input'],
            {
              [styles.focused]: focused || open,
              [styles.error]: errorMessage,
              [styles.loading]: loading,
              [styles.success]: success,
              [styles.email]: email
            },
            className
          )}
          {...props}
        >
          <form
            className={cn(styles['feedback-wrapper'], focused ? '' : styles.blur)}
            onSubmit={onSubmit}
          >
            <div className={styles.placeholder}>Contact</div>
            {!errorMessage && !success && (
              <div className={styles['input-wrapper']}>
                {email && (
                  <div className={styles.input}>
                    <h5>Email</h5>
                    <Input
                      innerRef={ref => (emailInputRef.current = ref)}
                      onFocus={() => setInputFocused(emailInputRef)}
                      type="email"
                      placeholder="Your email address..."
                      aria-label="Your email address"
                      width="100%"
                      disabled={loading === true || errorMessage != null}
                      onChange={handleEmailChange}
                    />
                  </div>
                )}

                <div className={styles.input}>
                  <h5>Feedback</h5>
                  <Textarea
                    innerRef={ref => (textAreaRef.current = ref)}
                    placeholder="Your feedback..."
                    width="100%"
                    onFocus={() => setInputFocused(textAreaRef)}
                    onChange={handleChange}
                    aria-label="Feedback input"
                    disabled={loading === true || errorMessage != null}
                    // Disable the Grammarly extension on this textarea
                    data-gramm-editor="false"
                  />
                </div>
              </div>
            )}

            {errorMessage != null && (
              <div className={styles['error-message']}>
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

            {success && (
              <div className={styles['success-message']}>
                <Checkmark color="var(--aries-success)" fill size="2rem" className="checkmark" />
                <p>Your feedback has been received!</p>
                <p>Thank you for your help.</p>
              </div>
            )}

            {!success && !errorMessage && (
              <div className={styles.controls}>
                <span className={styles.emojis}>
                  <EmojiSelector
                    onShow={onEmojiShown}
                    onHide={onEmojiHidden}
                    onEmojiSelect={onEmojiSelect}
                    loading={loading}
                  />
                </span>
                <span className={cn(styles.buttons, { [styles.hidden]: emojiShown })}>
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

const EmojiSelector = ({ onEmojiSelect, loading }) => {
  const [current, setCurrent] = useState(null)

  useEffect(() => {
    if (onEmojiSelect) onEmojiSelect(current)
  }, [current, onEmojiSelect])

  const onSelect = emoji => {
    if (emoji !== current) setCurrent(emoji)
  }

  return (
    <div className={cn(styles['emoji-selector'], { loading })}>
      {Array.from(EMOJIS.values()).map(emoji => (
        <button
          type="button"
          className={cn(styles.option, { [styles.active]: emoji === current })}
          key={emoji}
          onClick={() => onSelect(emoji)}
        >
          <span className={cn(styles.inner)}>
            <Emoji code={emoji} />
          </span>
        </button>
      ))}
    </div>
  )
}

const Emoji = memo(({ code }) => (
  <img
    decoding="async"
    width={20}
    height={20}
    src={`https://assets.vercel.com/twemoji/1${code}.svg`}
    alt="emoji"
  />
))

export default HeaderFeedback