import GoogleFonts from 'next-google-fonts'
import nprogress from 'nprogress'
import Router from 'next/router'
import { trackPageview } from 'lib/analytics'

let timeout

const start = () => {
  timeout = setTimeout(nprogress.start, 100)
}

const done = url => {
  clearTimeout(timeout)
  nprogress.done()
  if (url) trackPageview(url)
}

Router.events.on('routeChangeStart', start)
Router.events.on('routeChangeComplete', url => {
  done(url)
})
Router.events.on('routeChangeError', done)

import 'styles/global.css'
import { ThemeProvider } from 'next-themes'

export default function App({ Component, pageProps }) {
  return (
    <>
      <GoogleFonts
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
      <ThemeProvider disableTransitionOnChange defaultTheme="dark">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
