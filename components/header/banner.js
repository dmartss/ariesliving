import EmailForm from '../email-form'
import cn from 'classnames'
import styles from './banner.module.css'
import Container from 'components/container'

const Banner = () => {
  return (
    <Container wide>
      <div className={styles['banner']}>
        <div className={styles['inner']}>
          <p className={styles['desktop']}>Stay up to date with Aries Living</p>

          <div className={styles['email-form']}>
            <p className={cn(styles['mobile'], 'f5')}>Stay up to date with Aries Living</p>
            <EmailForm buttonLabel="SUBSCRIBE" flex />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Banner
