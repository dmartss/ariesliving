import { useState, useEffect } from 'react'

export default function useOnScroll() {
  const [scrollPosition, setScrollPosition] = useState(
    (typeof window !== 'undefined' && window.pageYOffset) || 0
  )
  const onScroll = () => {
    requestAnimationFrame(() => {
      setScrollPosition(window.pageYOffset)
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const headerLock = scrollPosition >= 73
  const secondHeaderLock = scrollPosition <= 857

  return { scrollPosition, headerLock, secondHeaderLock }
}
