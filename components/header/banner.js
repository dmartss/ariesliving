import cn from 'classnames'
import Container from 'components/container'
import EmailForm from '../email-form'
import s from './banner.module.css'

export default function Banner() {
  return (
    <Container wide>
      <div className={s.banner}>
        <div className={s.inner}>
          <p className={s.desktop}>Stay up to date with Aries Living</p>

          <div className={s['email-form']}>
            <p className={cn(s.mobile, 'f5')}>Stay up to date with Aries Living</p>
            <EmailForm buttonLabel="SUBSCRIBE" banner />
          </div>
        </div>
      </div>
    </Container>
  )
}
