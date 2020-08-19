import { Facebook, Instagram, Twitter } from '../icons'
import { LLC, ADDRESS, TWITTER, FACEBOOK, INSTAGRAM, EMAIL, PHONE } from 'lib/constants'
import Container from 'components/container'
import styles from './footer.module.css'

export default function Footer() {
  return (
    <Container wide dark center>
      <Container>
        <footer className={styles.root}>
          <nav className={styles.content}>
            <div className="tl">
              <p>{PHONE}</p>
              <a href={`mailto:${EMAIL}?subject=Hello`}>{EMAIL}</a>
            </div>

            <div className={styles.center}>
              <span className={styles.social}>
                <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook />
                </a>
                <a href={TWITTER} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter />
                </a>
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram />
                </a>
              </span>

              <p className={styles.mobile}>
                {ADDRESS[0]} {ADDRESS[1]}
              </p>
              <p>
                Copyright © {`${new Date().getFullYear()}`} {LLC}, All rights reserved.
              </p>
            </div>

            <div className="tr">
              <p>{ADDRESS[0]}</p>
              <p>{ADDRESS[1]}</p>
            </div>
          </nav>
        </footer>
      </Container>
    </Container>
  )
}
