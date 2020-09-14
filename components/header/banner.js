import EmailForm from '../email-form'
import cn from 'classnames'
import styles from './banner.module.css'

const Banner = () => {
  return (
    <div className={styles['banner']}>
      <div className={styles['inner']}>
        <p className={styles['desktop']}>Share your email with us for special offers</p>

        <div className={styles['email-form']}>
          <p className={cn(styles['mobile'], 'f5')}>Share your email with us for special offers</p>
          <EmailForm buttonLabel="SUBSCRIBE" flex />
        </div>
      </div>
    </div>
  )
}

export default Banner
