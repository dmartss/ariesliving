import { useState } from 'react'

import Container from './container'
import EmailForm from './email-form'

export default function Newsletter() {
  return (
    <Container wide overflow center padding role="region" aria-labelledby="customers">
      <div className="content">
        <aside>
          <h2>DON'T MISS OUT</h2>
          <h3>Share your email with us for special offers</h3>
        </aside>
        <aside>
          <div className="email-form">
            <EmailForm />
          </div>
        </aside>
      </div>
      <style jsx>{`
        .content {
          display: grid;
          grid-template-columns: 1fr 0.8fr;
          align-items: center;
          margin: var(--gap-double) auto;
          padding: 0 1.5rem;
          max-width: 1024px;
        }
        .content h2 {
          font-size: var(--gap-double);
          letter-spacing: -1px;
          line-height: 1.2;
          text-align: left;
          margin-bottom: 0.8rem;
        }
        .content h3 {
          font-size: var(--gap);
          line-height: 1.8;
          text-align: left;
          font-weight: 400;
        }

        .email-form {
          text-align: right;
          position: relative;
        }

        @media screen and (max-width: 640px) {
          .content {
            display: grid;
            grid-template-columns: 1fr;
          }
          .content h2,
          .content h3 {
            text-align: center;
          }
          .email-form {
            margin: auto;
            margin-top: 2rem;
            text-align: center;
          }
        }
      `}</style>
    </Container>
  )
}
