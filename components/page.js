import PageContainer from './page-container'
import { NAME, PLATFORM_URL, defaultOgImage } from 'lib/constants'
import Header from './header'
import Footer from './footer'

export default function Page({
  title,
  description = NAME,
  url = PLATFORM_URL,
  image = defaultOgImage,
  sticky = undefined,
  children,
  hideFooter,
  errorPage
}) {
  return (
    <PageContainer title={title} description={description} url={url} image={image}>
      <Header errorPage={errorPage} sticky={sticky} />
      {children}
      {!hideFooter && <Footer />}
    </PageContainer>
  )
}
