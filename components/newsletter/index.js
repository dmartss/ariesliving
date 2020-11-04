import cn from 'classnames'
import Container from 'components/container'
import EmailForm from 'components/email-form'
import useSubscribe from 'lib/use-subscribe'
import s from './newsletter.module.css'
import sGradient from 'styles/utils/gradient.module.css'

export default function Newsletter() {
  const { onEmail, loading, success, errorMessage } = useSubscribe()

  return (
    <Container wide fade padding>
      <Container padding>
        <div className={s.content}>
          <aside>
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
            {success ? (
              <p>Thanks for subscribing!</p>
            ) : (
              <EmailForm errorMessage={errorMessage} loading={loading} onEmail={onEmail} />
            )}
          </aside>
        </div>
      </Container>
    </Container>
  )
}
