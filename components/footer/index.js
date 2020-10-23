import { ADDRESS, LLC, FACEBOOK, TWITTER, INSTAGRAM, LINKEDIN } from 'lib/constants'
import { Facebook, Instagram, Twitter, ThemeIcon, Linkedin } from 'components/icons'
import Link from 'components/link'
import hotels from 'hotels'
import Container from 'components/container'
import styleUtils from 'styles/utils/utils.module.css'
import styleHover from 'styles/utils/hover.module.css'
import { memo } from 'react'
import cn from 'classnames'
import styles from './footer.module.css'

function Footer({ hotel }) {
  return (
    <Container wide dark>
      <Container>
        <footer className={styles.footer}>
          <div className={cn(styles.grid, 'f5')}>
            <div>
              <h4 className="fw5">Brands</h4>
              {hotels.map(({ name, hotel, urls: { hotelSite } }) => (
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
                <Link
                  href="/terms-and-conditions/[[...slug]]"
                  as={`/terms-and-conditions/${hotel || ''}`}
                >
                  Terms & Conditions
                </Link>
              </p>
              <p>
                <a>Privacy Policy</a>
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
                className={styleHover.container}
              >
                <Instagram className={styleHover.icon} />
              </Link>
              <Link external href={LINKEDIN} aria-label="Linkedin" className={styleHover.container}>
                <Linkedin className={styleHover.icon} />
              </Link>
              <Link external href={FACEBOOK} aria-label="Facebook" className={styleHover.container}>
                <Facebook className={styleHover.icon} />
              </Link>
              <Link external href={TWITTER} aria-label="Twitter" className={styleHover.container}>
                <Twitter className={styleHover.icon} />
              </Link>
              <a className={styleHover.container}>
                <ThemeIcon className={cn(styleHover.icon, styleUtils['theme-icon'])} />
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
