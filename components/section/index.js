import cn from 'classnames'
import Container from 'components/container'
import Image from 'next/image'
import SectionHeader from './section-header'
import { root, reverse } from './section.module.css'

export default function Section({ description, title, id }) {
  const rootClassName = cn(root, { [reverse]: title === 'Investors' })

  return (
    <Container wide overflow id={id}>
      <Container padding center>
        <div className={rootClassName}>
          <Image
            src={`/showcase/${id}.jpg`}
            className="image shadow radius"
            alt="Aries Hotel"
            width={2400}
            height={1600}
          />
          <SectionHeader title={title} description={description} />
        </div>
      </Container>
    </Container>
  )
}
