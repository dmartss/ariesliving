import { memo } from 'react'
import cn from 'classnames'
import Link from 'components/link'
import { Facebook, Instagram, Twitter, ThemeIcon, Linkedin } from 'components/icons'
import { ADDRESS, LLC, FACEBOOK, TWITTER, INSTAGRAM, LINKEDIN } from 'lib/constants'
import hotels from 'hotels'
import Container from 'components/container'
import Text from 'components/text'
import Grid from 'components/grid'
import { themeIcon } from 'styles/utils/utils.module.css'
import { container, icon } from 'styles/utils/hover.module.css'
import { copyRight, footer } from './footer.module.css'

const FooterGroup = ({ title, children }) => (
  <div>
    <Text variant="h4" weight="fw5">
      {title}
    </Text>
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
  <div className={copyRight}>
    <span>
      {list.map(({ href, label, icon }, i) =>
        href ? (
          <Link key={i} external href={href} aria-label={label} className={container}>
            {icon}
          </Link>
        ) : (
          <span key={i} className={container}>
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

function Footer({ hotel }) {
  return (
    <Container wide dark>
      <Container>
        <footer className={footer}>
          <Grid>
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
          </Grid>
          <SubFooter
            list={[
              {
                href: INSTAGRAM,
                label: 'Instagram',
                icon: <Instagram className={icon} />
              },
              {
                href: LINKEDIN,
                label: 'Linkedin',
                icon: <Linkedin className={icon} />
              },

              {
                href: FACEBOOK,
                label: 'Facebook',
                icon: <Facebook className={icon} />
              },
              {
                href: TWITTER,
                label: 'Twitter',
                icon: <Twitter className={icon} />
              },
              {
                icon: <ThemeIcon className={cn(icon, themeIcon)} />
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
