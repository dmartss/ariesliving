import Head from './head'
import Header from './header'
import Footer from './footer'
import { NAME_LONG } from 'lib/constants'

export default function Page({ title, sticky, description, image, children }) {
  return (
    <>
      <Head
        title={`${NAME_LONG}${title ? ` - ${title}` : ''}`}
        description={description}
        image={image}
      />
      <Header sticky={sticky} />
      {children}
      <Footer />
    </>
  )
}
