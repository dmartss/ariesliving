import NextHead from 'next/head'
import { DefaultSeo } from 'next-seo'
import config from 'seo.json'
import { defaultOgImage, KEYWORDS, SITE_URL } from 'lib/constants'
import Header from './header'
import Footer from './footer'

export default function Page({
  title = 'Aries Living',
  description = 'Aries Living, Find Amazing Rentals in Exceptional States',
  image = defaultOgImage,
  keywords = undefined,
  hotel = undefined,
  fillBg = false,
  tAndC = false,
  suffix,
  children
}) {
  return (
    <>
      <DefaultSeo
        {...config}
        title={title}
        description={description}
        openGraph={{
          url: `${SITE_URL}${suffix ? `${suffix}` : ''}`,
          images: [{ url: image }]
        }}
      />
      <NextHead>
        <link
          rel="preload"
          href="https://assets.vercel.com/raw/upload/v1587415301/fonts/2/inter-var-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        <meta name="apple-mobile-web-app-title" content="Aries Living" />
        <meta name="author" content="Aries Living" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="manifest" href="/favicon/site.webmanifest" key="site-manifest" />

        <meta httpEquiv="Content-Language" content="en" />

        <meta name="keywords" content={`${keywords ? `${keywords},` : ''} ${KEYWORDS}`} />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />

        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#000" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000" />
        <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
        <meta name="theme-color" content="#000" />
      </NextHead>

      {!tAndC && <Header fillBg={fillBg} />}
      {children}
      {!tAndC && <Footer hotel={hotel} />}
    </>
  )
}
