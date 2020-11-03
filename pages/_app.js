import { useState, useEffect } from 'react'
import nprogress from 'nprogress'
import Router from 'next/router'
import { trackPageview } from 'lib/analytics'
import { Provider } from 'lib/nav-context'
import { ScrollContext } from 'lib/scroll-context'
import { ThemeProvider } from 'next-themes'
import 'styles/global.css'

let timeout

export default function App({ Component, pageProps }) {
  const [mobileNavShown, setMobileNavShown] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(
    (typeof window !== 'undefined' && window.pageYOffset) || 0
  )

  const toggle = () => setMobileNavShown(!mobileNavShown)

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
  const secondHeaderLock = scrollPosition <= 865

  const start = url => {
    timeout = setTimeout(nprogress.start, 200)
    if (url) trackPageview(url)
  }

  const done = () => {
    clearTimeout(timeout)
    setMobileNavShown(false)
    nprogress.done()
  }

  useEffect(() => {
    Router.events.on('routeChangeStart', start)
    Router.events.on('routeChangeComplete', done)
    Router.events.on('routeChangeError', done)
    Router.events.on('hashChangeComplete', done)

    return () => {
      Router.events.off('routeChangeStart', start)
      Router.events.off('routeChangeComplete', done)
      Router.events.off('routeChangeError', done)
      Router.events.off('hashChangeComplete', done)
    }
  }, [])

  return (
    <ThemeProvider disableTransitionOnChange defaultTheme="dark">
      <ScrollContext.Provider value={{ headerLock, secondHeaderLock }}>
        <Provider value={{ mobileNavShown, toggle }}>
          <Component {...pageProps} />
        </Provider>
      </ScrollContext.Provider>
    </ThemeProvider>
  )
}
