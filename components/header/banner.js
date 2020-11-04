import cn from 'classnames'
import Container from 'components/container'
import useSubscribe from 'lib/use-subscribe'
import EmailForm from 'components/email-form'
import s from './banner.module.css'

export default function Banner() {
  const { onEmail, loading, success, errorMessage } = useSubscribe()
  return (
    <Container wide>
      <div className={s.banner}>
        <div className={s.inner}>
          <p className={s.desktop}>Stay up to date with Aries Living</p>

          <div className={s['email-form']}>
            <p className={cn(s.mobile, 'f5')}>Stay up to date with Aries Living</p>
            {success ? (
              <p className="fp tc">Thanks for subscribing!</p>
            ) : (
              <div className={cn(s['email-form'], 'tr')}>
                <EmailForm errorMessage={errorMessage} loading={loading} onEmail={onEmail} flex />
              </div>
            )}
          </div>
        </div>
      </div>
    </Container>
  )
}
