import { useState, useEffect, useRef } from 'react'

import Image from 'components/image'

export default function Slider({ slides = [], autoPlay = null }) {
  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45
  })
  const { translate, transition, activeIndex } = state
  const autoPlayRef = useRef()

  useEffect(() => {
    autoPlayRef.current = nextSlide
  })

  useEffect(() => {
    const play = () => {
      autoPlayRef.current()
    }

    if (autoPlay !== null) {
      const interval = setInterval(play, autoPlay * 1000)
      return () => clearInterval(interval)
    }
  }, [autoPlay])

  const nextSlide = () => {
    if (activeIndex === slides.length - 1) {
      return setState({ ...state, translate: 0, activeIndex: 0 })
    }

    setState({ ...state, activeIndex: activeIndex + 1, translate: (activeIndex + 1) * 1500 })
  }

  const prevSlide = () => {
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (slides.length - 1) * 1500,
        activeIndex: slides.length - 1
      })
    }

    setState({ ...state, activeIndex: activeIndex - 1, translate: (activeIndex - 1) * 1500 })
  }

  return (
    <div className="slider">
      <div className="slider-content">
        {slides
          .sort(() => Math.random() - 0.5)
          .map((slide, i) => (
            <Image
              key={slide + i}
              shadow
              layout="responsive"
              noBorder
              margin={0}
              oversize={false}
              alt="Hero Image"
              src={slide}
              width={3000 / 2}
              height={2000 / 2}
            />
          ))}
      </div>

      <style jsx>{`
        .slider {
          position: relative;
          margin: 0 auto;
          overflow-x: hidden;
          overflow-y: visible;
        }
        .image {
          height: 100;
          width: 100%;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: 50% 50%;
        }
        .slider-content {
          transform: translateX(-${translate}px);
          transition: transform ease-out ${transition}s;
          width: ${1500 * slides.length}px;
          display: flex;
        }
      `}</style>
    </div>
  )
}
