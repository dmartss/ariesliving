import { ADDRESS, LLC, FACEBOOK, TWITTER, INSTAGRAM, LINKEDIN } from 'lib/constants'
import { Facebook, Instagram, Twitter, ThemeIcon, Linkedin } from 'components/icons'
import Link from 'components/link'
import hotels from 'hotels'
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
              {hotels.map(({ name, hotelSite, hotel }) => (
                <p key={name}>
                  <Link external className={hotel} href={hotelSite}>
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
                className={styleUtils.hvrContainer}
              >
                <Instagram className={styleUtils.hvrIcon} />
              </Link>
              <Link
                external
                href={LINKEDIN}
                aria-label="Linkedin"
                className={styleUtils.hvrContainer}
              >
                <Linkedin className={styleUtils.hvrIcon} />
              </Link>
              <Link
                external
                href={FACEBOOK}
                aria-label="Facebook"
                className={styleUtils.hvrContainer}
              >
                <Facebook className={styleUtils.hvrIcon} />
              </Link>
              <Link
                external
                href={TWITTER}
                aria-label="Twitter"
                className={styleUtils.hvrContainer}
              >
                <Twitter className={styleUtils.hvrIcon} />
              </Link>
              <a className={styleUtils.hvrContainer}>
                <ThemeIcon className={cn(styleUtils.hvrIcon, styleUtils['theme-icon'])} />
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
