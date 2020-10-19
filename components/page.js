import PageContainer from './page-container'
import Header from './header'
import Footer from './footer'

export default function Page({
  sticky = undefined,
  home = false,
  hideFooter = false,
  keywords = undefined,
  description,
  image,
  title,
  suffix,
  children
}) {
  return (
    <PageContainer
      title={title}
      description={description}
      suffix={suffix}
      image={image}
      keywords={keywords}
    >
      <Header home={home} sticky={sticky} />
      {children}
      {!hideFooter && <Footer />}
    </PageContainer>
  )
}
