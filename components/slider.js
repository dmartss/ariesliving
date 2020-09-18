import { useState, useEffect, useRef } from 'react'
import Image from 'components/image'

export default function Slider({ slides = [], autoPlay = null }) {
  const [state, setState] = useState({ activeIndex: 0, translate: 0, transition: 0.75 })

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

  // const prevSlide = () => {
  //   if (activeIndex === 0) {
  //     return setState({
  //       ...state,
  //       translate: (slides.length - 1) * 1500,
  //       activeIndex: slides.length - 1
  //     })
  //   }

  //   setState({ ...state, activeIndex: activeIndex - 1, translate: (activeIndex - 1) * 1500 })
  // }

  return (
    <>
      <div className="display-tablet">
        <Image
          shadow
          layout="responsive"
          noBorder
          margin={0}
          oversize={false}
          alt="Hero Image"
          src={slides[activeIndex]}
          width={3000 / 2}
          height={2000 / 2}
        />
      </div>
      <div className="slider hide-tablet">
        <div className="slider-content">
          {slides
            .sort(() => Math.random() - 0.5)
            .map((slide, i) => (
              <div className="image" key={slide + i}>
                <Image
                  src={slide}
                  shadow
                  layout="responsive"
                  noBorder
                  margin={0}
                  oversize={false}
                  alt="Hero Image"
                  width={3000 / 2}
                  height={2000 / 2.2}
                />
              </div>
            ))}
        </div>

        <style jsx>{`
          .slider {
            position: relative;
            overflow: hidden;
            box-shadow: var(--shadow-hover);
          }
          .slider-content {
            transform: translateX(-${translate}px);
            transition: transform ease-out ${transition}s;
            width: ${1500 * slides.length}px;
            display: flex;
          }
        `}</style>
      </div>
    </>
  )
}
