import cn from 'classnames'
import Container from 'components/container'
import Text from 'components/text'
import EmailForm from 'components/email-form'
import useSubscribe from 'lib/use-subscribe'
import { content } from './newsletter.module.css'
import { bg, fg, fg1, fg2 } from 'styles/utils/gradient.module.css'

export default function Newsletter() {
  const { onEmail, loading, success, errorMessage } = useSubscribe()

  return (
    <Container wide fade padding>
      <Container padding>
        <div className={content}>
          <aside>
            <Text variant="sectionHeading" aria-label="DON'T MISS OUT">
              <span className={bg}>
                <span className={cn(fg, fg1)}>DON'T MISS OUT</span>
              </span>
            </Text>
            <Text
              variant="h3"
              aria-label="Stay up to date with Aries Living"
              size="f4"
              weight="fw5"
            >
              <span className={bg}>
                <span className={cn(fg, fg2)}>Stay up to date with Aries Living</span>
              </span>
            </Text>
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
