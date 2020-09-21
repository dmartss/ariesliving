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
  children
}) {
  return (
    <PageContainer title={title} description={description} url={url} image={image}>
      <Header sticky={sticky} />
      {children}
      <Footer />
    </PageContainer>
  )
}
