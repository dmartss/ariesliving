import { useState, useEffect } from 'react'
import cn from 'classnames'
import Image from 'components/image'

export default function Slider({ slides = [] }) {
  const [curr, setCurr] = useState(0)
  const { length } = slides

  const goToNext = () => {
    setCurr(curr === length - 1 ? 0 : curr + 1)
  }

  useEffect(() => {
    setTimeout(goToNext, 2000)
    return () => clearTimeout(goToNext)
  })

  if (!Array.isArray(slides) || length <= 0) {
    return null
  }

  return (
    <div className="slider">
      {slides
        .sort(() => Math.random() - 0.5)
        .map((slide, i) => (
          <div className={cn('slide', { active: i === curr })} key={slide} aria-hidden={i !== curr}>
            {i === curr && (
              <Image
                shadow
                noBorder
                margin={0}
                oversize={false}
                alt="Hero Image"
                src={slide}
                width={3000 / 2}
                height={2000 / 2}
              />
            )}
          </div>
        ))}

      <style jsx>{`
        .slide {
          opacity: 0;
          transition: opacity 2s ease-out;
        }
        .slide.active {
          opacity: 1;
          transition: opacity 1s ease-in;
        }
      `}</style>
    </div>
  )
}
