import { ADDRESS, LLC, FACEBOOK, TWITTER, INSTAGRAM, LINKEDIN } from 'lib/constants'
import { Facebook, Instagram, Twitter, ThemeIcon, Linkedin } from 'components/icons'
import Link from 'components/link'
import hotels from 'hotels'
import Container from 'components/container'
import { themeIcon } from 'styles/utils/utils.module.css'
import sHover from 'styles/utils/hover.module.css'
import { memo } from 'react'
import cn from 'classnames'
import s from './footer.module.css'

const FooterGroup = ({ title, children }) => (
  <div>
    <h4 className="fw5">{title}</h4>
    {children}
  </div>
)

const FooterLink = ({ href, className, external, children }) => (
  <p>
    {href ? (
      <Link href={href} external={external} className={className}>
        {children}
      </Link>
    ) : (
      children
    )}
  </p>
)

const SubFooter = ({ list, copyright }) => (
  <div className={cn(s.copyright, 'f6')}>
    <span>
      {list.map(({ href, label, icon }, index) =>
        href ? (
          <Link key={index} external href={href} aria-label={label} className={sHover.container}>
            {icon}
          </Link>
        ) : (
          <span key={index} className={sHover.container}>
            {icon}
          </span>
        )
      )}
    </span>
    {copyright && (
      <div>
        Copyright © {`${new Date().getFullYear()}`} {copyright}, All rights reserved.
      </div>
    )}
  </div>
)

// const Footer = ({ children, subFooter }) => (
//   <footer className={s.footer}>
//     <div className={cn(s.grid, 'f5')}>{children}</div>
//   </footer>
// )

function Footer({ hotel }) {
  return (
    <Container wide dark>
      <Container>
        <footer className={s.footer}>
          <div className={cn(s.grid, 'f5')}>
            <FooterGroup title="Brands">
              {hotels.map(({ name, hotel, urls: { hotelSite } }) => (
                <FooterLink key={name} external className={hotel} href={hotelSite}>
                  {name}
                </FooterLink>
              ))}
            </FooterGroup>
            <FooterGroup title="About">
              <FooterLink>Contact</FooterLink>
              <FooterLink href={`/terms-and-conditions/${hotel || ''}`}>
                Terms & Conditions
              </FooterLink>
              <FooterLink>Privacy Policy</FooterLink>
            </FooterGroup>
            <FooterGroup title="Corporate Resources">
              <FooterLink>Media</FooterLink>
              <FooterLink>Careers</FooterLink>
              <FooterLink>Travel Professionals</FooterLink>
            </FooterGroup>
            <FooterGroup title="Contact">
              <FooterLink>{ADDRESS[0]}</FooterLink>
              <FooterLink>{ADDRESS[1]}</FooterLink>
              <FooterLink>{ADDRESS[2]}</FooterLink>
            </FooterGroup>
          </div>
          <SubFooter
            list={[
              {
                href: INSTAGRAM,
                label: 'Instagram',
                icon: <Instagram className={sHover.icon} />
              },
              {
                href: LINKEDIN,
                label: 'Linkedin',
                icon: <Linkedin className={sHover.icon} />
              },

              {
                href: FACEBOOK,
                label: 'Facebook',
                icon: <Facebook className={sHover.icon} />
              },
              {
                href: TWITTER,
                label: 'Twitter',
                icon: <Twitter className={sHover.icon} />
              },
              {
                icon: <ThemeIcon className={cn(sHover.icon, themeIcon)} />
              }
            ]}
            copyright={LLC}
          />
        </footer>
      </Container>
    </Container>
  )
}

export default memo(Footer)
