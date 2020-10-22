import PageContainer from './page-container'
import { defaultOgImage } from 'lib/constants'
import Header from './header'
import Footer from './footer'

export default function Page({
  title = 'Aries Living',
  image = defaultOgImage,
  keywords = undefined,
  sticky = undefined,
  hotel = undefined,
  description,
  hideBorder,
  children,
  suffix,
  tAndC
}) {
  return (
    <PageContainer
      title={title}
      description={description}
      suffix={suffix}
      image={image}
      keywords={keywords}
    >
      {!tAndC && <Header hideBorder={hideBorder} sticky={sticky} />}
      {children}
      {!tAndC && <Footer hotel={hotel} />}
    </PageContainer>
  )
}
