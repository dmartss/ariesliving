import Head from 'next/head'
import { KEYWORDS, SITE_URL } from 'lib/constants'

export default function PageContainer({
  title,
  image,
  suffix,
  keywords,
  children,
  description,
  shouldIndex = true
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        {!shouldIndex && <meta name="robots" content="noindex" />}
        <meta name="twitter:site" content="@aries_living" />
        <meta name="twitter:card" content={image ? 'summary_large_image' : 'summary'} />
        <meta name="twitter:image" content={image} />
        <meta name="apple-mobile-web-app-title" content="Aries Living" />
        <meta name="author" content="Aries Living" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />

        <meta property="og:title" content={title} />
        <meta property="og:url" content={`${SITE_URL}${suffix ? `${suffix}` : ''}`} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content={image.startsWith('https://') ? image : `${SITE_URL}${image}`}
        />
        <meta name="keywords" content={`${keywords ? `${keywords},` : ''} ${KEYWORDS}`} />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#000" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000" />
        <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
        <meta name="theme-color" content="#000" />
      </Head>
      {children}
    </>
  )
}
