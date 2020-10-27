import cn from 'classnames'
import Container from 'components/container'
import EmailForm from 'components/email-form'
import styles from './newsletter.module.css'
import styleGradient from 'styles/utils/gradient.module.css'

export default function Newsletter() {
  return (
    <Container gradient wide>
      <Container padding role="region" aria-labelledby="customers">
        <div className={styles.content}>
          <aside className="tl">
            <h2 aria-label="DON'T MISS OUT">
              <span className={styleGradient.bg}>
                <span className={cn(styleGradient.fg, styleGradient['fg-1'])}>DON'T MISS OUT</span>
              </span>
            </h2>
            <h3 aria-label="Stay up to date with Aries Living" className="f4 fw5">
              <span className={styleGradient.bg}>
                <span className={cn(styleGradient.fg, styleGradient['fg-2'])}>
                  Stay up to date with Aries Living
                </span>
              </span>
            </h3>
          </aside>
          <aside>
            <div className={cn(styles['email-form'], 'tr')}>
              <EmailForm />
            </div>
          </aside>
        </div>
      </Container>
    </Container>
  )
}
