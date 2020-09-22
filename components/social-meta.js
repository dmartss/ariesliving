import Head from 'next/head'
import { TWITTER_USER_NAME } from 'lib/constants'

export default function SocialMeta({ title, description, image, url, keywords = undefined }) {
  return (
    <Head>
      <meta name="twitter:site" content={`@${TWITTER_USER_NAME}`} />
      <meta name="twitter:card" content={image ? 'summary_large_image' : 'summary'} />
      <meta name="twitter:image" content={image} />
      <meta name="apple-mobile-web-app-title" content={description} />
      <meta name="author" content="Aries Living" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      {title && <meta property="og:title" content={title} />}
      {url && <meta property="og:url" content={url} />}
      {description && <meta name="description" content={description} />}
      {description && <meta property="og:description" content={description} />}
      {image && (
        <meta
          property="og:image"
          content={image.startsWith('https://') ? image : `${url}${image}`}
        />
      )}
      {keywords && <meta name="keywords" content={keywords} />}
    </Head>
  )
}
