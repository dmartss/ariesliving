import { ADDRESS, LLC, FACEBOOK, TWITTER, INSTAGRAM, LINKEDIN } from 'lib/constants'
import { HOTELS } from 'lib/sections'
import { Facebook, Instagram, Twitter, ThemeIcon, Linkedin } from 'components/icons'
import Container from 'components/container'
import styles from './footer.module.css'
import styleUtils from 'components/utils.module.css'
import { memo } from 'react'
import cn from 'classnames'

function Footer() {
  return (
    <Container wide dark footer>
      <Container>
        <footer className={styles.footer}>
          <div className={cn(styles.grid, 'f5')}>
            <div>
              <h4 className="fw5">Brands</h4>
              {Object.values(HOTELS).map(({ name, url, alt }) => (
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
              <p>{ADDRESS[2]}</p>
            </div>
          </div>
          <div className={cn(styles.copyright, 'f6')}>
            <span>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={styleUtils['hvr-container']}
              >
                <Instagram className={styleUtils['hvr-icon']} />
              </a>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Linkedin"
                className={styleUtils['hvr-container']}
              >
                <Linkedin className={styleUtils['hvr-icon']} />
              </a>
              <a
                href={FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className={styleUtils['hvr-container']}
              >
                <Facebook className={styleUtils['hvr-icon']} />
              </a>
              <a
                href={TWITTER}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className={styleUtils['hvr-container']}
              >
                <Twitter className={styleUtils['hvr-icon']} />
              </a>
              <a className={styleUtils['hvr-container']}>
                <ThemeIcon className={cn(styleUtils['hvr-icon'], styleUtils['theme-icon'])} />
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
