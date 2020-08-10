import Head from './head'
import Header from './header'
import Footer from './footer'
import { NAME_SHORT } from 'lib/constants'

export default function Page({ title = NAME_SHORT, sticky, description, image, children }) {
  return (
    <>
      <Head title={title} description={description} image={image} />
      <Header sticky={sticky} />
      {children}
      <Footer />
    </>
  )
}
