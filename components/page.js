import PageContainer from './page-container'
import { NAME, SITE_URL, defaultOgImage } from 'lib/constants'
import Header from './header'
import Footer from './footer'

export default function Page({
  image = defaultOgImage,
  sticky = undefined,
  description = NAME,
  url,
  hideFooter,
  children,
  title,
  home
}) {
  return (
    <PageContainer
      title={title}
      description={description}
      url={`${SITE_URL}${url ? `${url}` : ''}`}
      image={image}
    >
      <Header home={home} sticky={sticky} />
      {children}
      {!hideFooter && <Footer />}
    </PageContainer>
  )
}
