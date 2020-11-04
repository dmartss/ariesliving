import { memo, useState, useEffect } from 'react'
import cn from 'classnames'
import s from './feedback.module.css'

const Emoji = memo(({ code, size = 20 }) => (
  <img
    decoding="async"
    width={size}
    height={size}
    src={`https://assets.vercel.com/twemoji/1${code}.svg`}
    alt="emoji"
  />
))

export default function EmojiSelector({ onEmojiSelect, loading, EMOJIS }) {
  const [current, setCurrent] = useState(null)

  useEffect(() => {
    if (onEmojiSelect) onEmojiSelect(current)
  }, [current, onEmojiSelect])

  const onSelect = emoji => emoji !== current && setCurrent(emoji)

  return (
    <div className={cn(s.emojiSelector, { [s.loading]: loading })}>
      {Array.from(EMOJIS.values()).map(emoji => (
        <button
          type="button"
          className={cn(s.option, { [s.active]: emoji === current })}
          key={emoji}
          onClick={() => onSelect(emoji)}
        >
          <span className={cn(s.inner)}>
            <Emoji code={emoji} />
          </span>
        </button>
      ))}
    </div>
  )
}
