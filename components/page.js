import PageContainer from './page-container'
import { NAME, SITE_URL, defaultOgImage } from 'lib/constants'
import Header from './header'
import Footer from './footer'

export default function Page({
  image = defaultOgImage,
  sticky = undefined,
  description = NAME,
  home = false,
  hideFooter = false,
  keywords = undefined,
  title,
  url,
  children
}) {
  return (
    <PageContainer
      title={title}
      description={description}
      url={`${SITE_URL}${url ? `${url}` : ''}`}
      image={image}
      keywords={keywords}
    >
      <Header home={home} sticky={sticky} />
      {children}
      {!hideFooter && <Footer />}
    </PageContainer>
  )
}
