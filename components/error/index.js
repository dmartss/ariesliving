import Page from 'components/page'
import Link from 'components/link'
import styles from './error.module.css'
import Container from 'components/container'

const Error = ({ status }) => {
  return (
    <Page title={status || 'Error'} hideFooter errorPage>
      <Container wide padding center>
        {status === 404 ? (
          <>
            <h1>This page cannot be found.</h1>

            <p>
              <blockquote cite="http://www.aaronsw.com/weblog/visitingmit">
                <p>It doesn’t exist, it never has. I’m nostalgic for a place that never existed.</p>

                <footer>
                  — Aaron Swartz,{' '}
                  <Link external href="http://www.aaronsw.com/weblog/visitingmit">
                    <cite>I Love the University</cite>
                  </Link>
                </footer>
              </blockquote>
            </p>
          </>
        ) : (
          <section className={styles.section}>
            <span>{status || '?'}</span>
            <p>An error occurred.</p>
          </section>
        )}
      </Container>
    </Page>
  )
}

export default Error
