import { SkipNavContent } from '@reach/skip-nav'
import { useRouter } from 'next/router'
import Image from 'components/image'
import Page from 'components/page'

export default function Hotels() {
  const router = useRouter()
  const { asPath } = router

  return (
    <Page
      title="Aries Living - Hotels"
      // description={hotel.description}
      // image={hotel.defaultOgImage}
      url={asPath}
    >
      <SkipNavContent />
      <Image
        // src={hotel.src}
        shadow
        margin={0}
        noBorder
        oversize={false}
        layout="responsive"
        width={3000 / 2.75}
        height={2000 / 2.75}
        // alt={`${hotel.title} Image`}
      />
    </Page>
  )
}
