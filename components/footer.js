import { memo } from 'react'
import { ADDRESS, HOTELS, LLC, FACEBOOK, TWITTER, INSTAGRAM } from 'lib/constants'
import { Facebook, Instagram, Twitter } from './icons'
import Container from 'components/container'
import styles from './footer.module.css'
import cn from 'classnames'

function Footer() {
  return (
    <Container wide dark>
      <Container>
        <footer className={styles.footer}>
          <div className={cn(styles.grid, 'f5')}>
            <div>
              <h4 className="fw5">Brands</h4>
              {HOTELS.map(({ name, url, alt }) => (
                <p key={name}>
                  <a className={alt} href={url} rel="noopener noreferrer" target="_blank">
                    {name}
                  </a>
                </p>
              ))}
            </div>
            <div>
              <h4 className="fw5">About</h4>
              <p>
                <a>Contact</a>
              </p>
              <p>
                <a>Privacy Policy</a>
              </p>
              <p>
                <a>Sitemap</a>
              </p>
            </div>
            <div>
              <h4 className="fw5">Corporate Resources</h4>
              <p>
                <a>Media</a>
              </p>
              <p>
                <a>Careers</a>
              </p>
              <p>
                <a>Travel Professionals</a>
              </p>
            </div>
            <div>
              <h4 className="fw5">Contact</h4>
              <p>{ADDRESS[0]}</p>
              <p>{ADDRESS[1]}</p>
              <p>
                <a>Contact Form</a>
              </p>
            </div>
          </div>
          <div className={cn(styles.copyright, 'f6')}>
            <span>
              <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook />
              </a>
              <a href={TWITTER} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter />
              </a>
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram />
              </a>
            </span>
            <div>
              Copyright © {`${new Date().getFullYear()}`} {LLC}, All rights reserved.
            </div>
          </div>
        </footer>
      </Container>
    </Container>
  )
}

export default memo(Footer)
