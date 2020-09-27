import Head from 'next/head'
import Router from 'next/router'
import { trackPageview } from 'lib/analytics'
import { NAME } from 'lib/constants'
import GlobalStyles from './global-styles'
import SocialMeta from './social-meta'

Router.events.on('routeChangeComplete', url => {
  trackPageview(url)
})

export default function PageContainer({
  url,
  image,
  title,
  children,
  description,
  shouldIndex = true
}) {
  return (
    <div>
      <Head>
        <title>{`${NAME}${title ? ` - ${title}` : ''}`}</title>
        {description !== false && (
          <meta
            name="description"
            content={description || 'Aries Living, Find Amazing Rentals in Exceptional States'}
          />
        )}
        {!shouldIndex && <meta name="robots" content="noindex" />}
      </Head>
      <SocialMeta title={title} description={description} url={url} image={image} />
      {children}
      <GlobalStyles />
    </div>
  )
}
