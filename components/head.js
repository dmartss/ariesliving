import NextHead from 'next/head'
import GoogleFonts from 'next-google-fonts'
import { NAME, PLATFORM_URL, defaultOgImage } from 'lib/constants'

export default function Head({ title, description = NAME, image = defaultOgImage, children }) {
  return (
    <>
      <GoogleFonts
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
      <NextHead>
        {/* Title */}
        <title>{`${NAME}${title ? ` - ${title}` : ''}`}</title>
        <meta name="og:title" content={title} />

        {/* Description */}
        <meta name="description" content={description} />
        <meta name="og:description" content={description} />

        {/* Image */}
        <meta name="twitter:image" content={image} />
        <meta name="og:image" content={image} />

        {/* URL */}
        <meta name="og:url" content={PLATFORM_URL} />

        {/* General */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@aries_living" />
        <meta name="apple-mobile-web-app-title" content={NAME} />
        <meta name="author" content="Aries Living" />

        {/* Favicons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />

        {children}
      </NextHead>
    </>
  )
}
