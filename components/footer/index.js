import { ADDRESS, LLC, FACEBOOK, TWITTER, INSTAGRAM, LINKEDIN } from 'lib/constants'
import { Facebook, Instagram, Twitter, ThemeIcon, Linkedin } from 'components/icons'
import Link from 'components/link'
import { HOTELS } from 'lib/sections'
import Container from 'components/container'
import styleUtils from 'components/utils.module.css'
import { memo } from 'react'
import cn from 'classnames'
import styles from './footer.module.css'

function Footer() {
  return (
    <Container wide dark>
      <Container>
        <footer className={styles.footer}>
          <div className={cn(styles.grid, 'f5')}>
            <div>
              <h4 className="fw5">Brands</h4>
              {Object.values(HOTELS).map(({ name, url, alt }) => (
                <p key={name}>
                  <Link external className={alt} href={url}>
                    {name}
                  </Link>
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
              <Link
                external
                href={INSTAGRAM}
                aria-label="Instagram"
                className={styleUtils['hvr-container']}
              >
                <Instagram className={styleUtils['hvr-icon']} />
              </Link>
              <Link
                external
                href={LINKEDIN}
                aria-label="Linkedin"
                className={styleUtils['hvr-container']}
              >
                <Linkedin className={styleUtils['hvr-icon']} />
              </Link>
              <Link
                external
                href={FACEBOOK}
                aria-label="Facebook"
                className={styleUtils['hvr-container']}
              >
                <Facebook className={styleUtils['hvr-icon']} />
              </Link>
              <Link
                external
                href={TWITTER}
                aria-label="Twitter"
                className={styleUtils['hvr-container']}
              >
                <Twitter className={styleUtils['hvr-icon']} />
              </Link>
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
