import Head from './head'
import Header from './header'
import Footer from './footer'

export default function Page({ title, sticky, description, image, children }) {
  return (
    <>
      <Head title={title} description={description} image={image} />
      <Header sticky={sticky} />
      {children}
      <Footer />
    </>
  )
}
