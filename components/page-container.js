import Head from 'next/head'
import Router from 'next/router'
import { trackPageview } from 'lib/analytics'
import { NAME } from 'lib/constants'
import GlobalStyles from './global-styles'
import GoogleFonts from 'next-google-fonts'
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
      <GoogleFonts
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
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
