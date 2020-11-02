import cn from 'classnames'
import Container from 'components/container'
import Image from 'next/image'
import SectionHeader from './section-header'
import styles from './section.module.css'

export default function Section({ description, title, id }) {
  return (
    <Container id={id} wide overflow>
      <Container padding center>
        <div className={cn(styles.main, { [styles.reverse]: title === 'Investors' })}>
          <Image
            src={`/showcase/${title}.jpg`}
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
