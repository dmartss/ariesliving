import Container from 'components/container'
import Skeleton from 'components/skeleton'
import Header from './header'
import Image from 'components/image'
import styles from './hotel.module.css'

export default function Hotel({ id: { src, name, hotel, address, email } }) {
  return src ? (
    <Container>
      <Header name={name} hotel={hotel} />
      <Image
        src={src}
        shadow
        margin={0}
        noBorder
        oversize={false}
        layout="responsive"
        width={3000 / 2.75}
        height={2000 / 2.75}
        alt={`${name} Image`}
      />
    </Container>
  ) : (
    <div className={styles.container}>
      <Skeleton style={{ height: 'calc(100% - 5.5rem)' }} />
    </div>
  )
}
