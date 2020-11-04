import useSubscribe from 'lib/use-subscribe'
import EmailForm from 'components/email-form'
import s from './banner.module.css'

export default function Banner() {
  const { onEmail, loading, success, errorMessage } = useSubscribe()
  return (
    <div className={s.banner}>
      {success ? (
        <p>Thanks for subscribing! Please check your email shortly to confirm</p>
      ) : (
        <div className={s.inner}>
          <p>Stay up to date with Aries Living</p>
          <EmailForm errorMessage={errorMessage} loading={loading} onEmail={onEmail} flex />
        </div>
      )}
    </div>
  )
}
