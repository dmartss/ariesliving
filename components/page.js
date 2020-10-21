import PageContainer from './page-container'
import Header from './header'
import Footer from './footer'

export default function Page({
  sticky = undefined,
  keywords = undefined,
  hotel = undefined,
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
      <Header sticky={sticky} />
      {children}
      <Footer hotel={hotel} />
    </PageContainer>
  )
}
