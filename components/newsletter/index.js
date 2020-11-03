import cn from 'classnames'
import Container from 'components/container'
import EmailForm from 'components/email-form'
import s from './newsletter.module.css'
import sGradient from 'styles/utils/gradient.module.css'

export default function Newsletter() {
  return (
    <Container fade wide>
      <Container padding role="region">
        <div className={s.content}>
          <aside className="tl">
            <h2 aria-label="DON'T MISS OUT">
              <span className={sGradient.bg}>
                <span className={cn(sGradient.fg, sGradient['fg-1'])}>DON'T MISS OUT</span>
              </span>
            </h2>
            <h3 aria-label="Stay up to date with Aries Living" className="f4 fw5">
              <span className={sGradient.bg}>
                <span className={cn(sGradient.fg, sGradient['fg-2'])}>
                  Stay up to date with Aries Living
                </span>
              </span>
            </h3>
          </aside>
          <aside>
            <div className={cn(s['email-form'], 'tr')}>
              <EmailForm />
            </div>
          </aside>
        </div>
      </Container>
    </Container>
  )
}
