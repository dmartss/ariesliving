import Container from '../container'
import EmailForm from '../email-form'
import styles from './newsletter.module.css'

export default function Newsletter() {
  return (
    <Container wide overflow center padding role="region" aria-labelledby="customers">
      <div className={styles['content']}>
        <aside>
          <h2>DON'T MISS OUT</h2>
          <h3>Share your email with us for special offers</h3>
        </aside>
        <aside>
          <div className={styles['email-form']}>
            <EmailForm />
          </div>
        </aside>
      </div>
    </Container>
  )
}
