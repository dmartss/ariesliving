import FeedbackContext from 'components/feedback/feedback-context'
import { SkipNavContent } from '@reach/skip-nav'
import Newsletter from 'components/newsletter'
import Portfolio from 'components/portfolio'
import { SECTIONS } from 'lib/constants'
import Section from 'components/section'
import Image from 'components/image'
import Page from 'components/page'
import Team from 'components/team'

export default function Home() {
  return (
    <FeedbackContext.Provider value={{ label: 'home' }}>
      <Page title="Home">
        <SkipNavContent />
        <Image
          src="/showcase/hero.jpg"
          shadow
          margin={0}
          noBorder
          layout="responsive"
          oversize={false}
          alt="Hero Image"
          width={3000 / 2.75}
          height={2000 / 2.75}
        />
        <Section
          id={SECTIONS.about.id}
          title={SECTIONS.about.title}
          description={SECTIONS.about.description}
          src={SECTIONS.about.src}
          alt="Aries Hotel"
          width={3000 / 5.5}
          height={2000 / 5.5}
        />
        <Portfolio
          id={SECTIONS.portfolio.id}
          title={SECTIONS.portfolio.title}
          description={SECTIONS.portfolio.description}
          width={3000 / 9}
          height={2000 / 9}
        />
        <Section
          id={SECTIONS.investors.id}
          title={SECTIONS.investors.title}
          description={SECTIONS.investors.description}
          src={SECTIONS.investors.src}
          alt="Aries Hotel"
          width={3000 / 6}
          height={2000 / 6}
          reverse
        />
        <Team />
        <Newsletter />
      </Page>
    </FeedbackContext.Provider>
  )
}
