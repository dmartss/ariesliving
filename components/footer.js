import { ADDRESS, HOTELS, LLC, FACEBOOK, TWITTER, INSTAGRAM } from 'lib/constants'
import { Facebook, Instagram, Twitter } from './icons'
import Container from 'components/container'
import withPure from 'components/hoc/pure'

export default withPure(() => (
  <Container wide gray>
    <Container>
      <footer>
        <style jsx>
          {`
            .grid {
              display: grid;
              grid-template-columns: 1fr 1fr 1fr 1fr;
              grid-row-gap: var(--gap-double);
            }
            footer {
              padding: var(--gap-double) 0 var(--gap);
              min-height: 150px;
            }
            a,
            p,
            .copyright {
              color: var(--footer-text);
            }
            h4 a {
              color: inherit;
            }
            a:hover {
              color: var(--accents-3);
            }
            .copyright {
              margin-top: var(--gap);
            }
            .copyright span {
              display: inline-flex;
            }
            .copyright span a {
              padding-right: var(--gap-half);
            }
            .copyright div {
              margin-top: 0.5rem;
            }
            h4 {
              margin-bottom: 0.75rem;
            }
            p {
              margin-top: 0;
              margin-bottom: 0.25rem;
            }
            @media screen and (max-width: 800px) {
              .grid {
                grid-template-columns: 1fr 1fr;
              }

              h4,
              p {
                margin: 0;
              }

              a {
                display: block;
                padding-top: 15px;
                padding-bottom: 15px;
              }
            }
          `}
        </style>
        <div className="grid f5">
          <div>
            <h4 className="fw5">Brands</h4>
            {HOTELS.map(({ name, url }) => (
              <p key={name}>
                <a href={url} rel="noopener noreferrer" target="_blank">
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
              <a>Privcy Policy</a>
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
            <p>
              <a>{ADDRESS[0]}</a>
            </p>
            <p>
              <a>{ADDRESS[1]}</a>
            </p>
            <p>
              <a>Contact Form</a>
            </p>
          </div>
        </div>
        <div className="copyright f6">
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
            Copyright © {`${new Date().getFullYear()}`} {LLC}, Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </Container>
  </Container>
))
