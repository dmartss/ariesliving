import Head from './head'
import { NAME, SITE_URL, defaultOgImage } from 'lib/constants'
import Header from './header'
import Footer from './footer'

export default function Page({
  image = defaultOgImage,
  sticky = undefined,
  description = NAME,
  hideFooter,
  title,
  url,
  home,
  children
}) {
  return (
    <>
      <Head
        title={title}
        description={description}
        url={`${SITE_URL}${url ? `${url}` : ''}`}
        image={image}
      />
      <Header home={home} sticky={sticky} />
      {children}
      {!hideFooter && <Footer />}
    </>
  )
}
