import 'styles/global.css'
import Router from 'next/router'
import { pageView as gTagPageView } from 'lib/gtag'
import NProgress from 'nprogress'
import { useEffect } from 'react'

let timeout

export default function MyApp({ Component, pageProps }) {
  const start = url => {
    timeout = setTimeout(NProgress.start, 500)
    gTagPageView(url)
  }

  const done = () => {
    clearTimeout(timeout)
    NProgress.done()
  }

  useEffect(() => {
    Router.events.on('routeChangeStart', start)
    Router.events.on('routeChangeComplete', done)
    Router.events.on('routeChangeError', done)

    return () => {
      Router.events.off('routeChangeStart', start)
      Router.events.off('routeChangeComplete', done)
      Router.events.off('routeChangeError', done)
    }
  }, [])

  return <Component {...pageProps} />
}
