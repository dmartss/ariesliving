import { useState, useEffect } from 'react'
import GoogleFonts from 'next-google-fonts'
import nprogress from 'nprogress'
import Router from 'next/router'
import { trackPageview } from 'lib/analytics'
import { Provider } from 'lib/nav-context'
import 'styles/global.css'
import { ThemeProvider } from 'next-themes'

let timeout

export default function App({ Component, pageProps }) {
  const [mobileNavShown, setMobileNavShown] = useState(false)
  const toggle = () => setMobileNavShown(!mobileNavShown)

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
    <>
      <GoogleFonts
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
      <ThemeProvider disableTransitionOnChange defaultTheme="dark">
        <Provider value={{ mobileNavShown, toggle }}>
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </>
  )
}
