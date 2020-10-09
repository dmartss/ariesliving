import hotels from 'hotels'
import { SkipNavContent } from '@reach/skip-nav'
import Image from 'components/image'
import Page from 'components/page'

export default function Home({ data }) {
  return (
    <Page title={data.title} errorPage>
      <SkipNavContent />
      <Image
        src={data.src}
        shadow
        margin={0}
        noBorder
        layout="responsive"
        oversize={false}
        alt="Hero Image"
        width={3000 / 2.75}
        height={2000 / 2.75}
      />
    </Page>
  )
}

export async function getStaticProps({ params }) {
  const data = { ...hotels.find(e => e.name === params.name) }

  return { props: { data } }
}

export const getStaticPaths = () => ({
  paths: hotels.map(({ name }) => ({ params: { name } })),
  fallback: true
})
