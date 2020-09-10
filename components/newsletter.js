import { useState } from 'react'

import Container from './container'
import EmailForm from './email-form'

export default function Newsletter() {
  const [state, setState] = useState({ loading: false, success: false, errorMessage: false })
  // const [success, setSuccess] = useState(false)
  // const [errorMessage, setErrorMessage] = useState(false)

  const onEmail = async val => {
    setState({ loading: true })
    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({ email: val }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    if (res.status === 200) {
      setState({ loading: false, success: true })
    } else {
      setState({ loading: false, errorMessage: true })
    }
  }

  return (
    <Container wide overflow center padding role="region" aria-labelledby="customers">
      <div className="content">
        <aside>
          <h2>DON'T MISS OUT</h2>
          <h3>Share your email with us for special offers</h3>
        </aside>
        <aside>
          {state.success ? (
            <p className="subscribe-success">Thanks for subscribing!</p>
          ) : (
            <div className="email-form">
              <EmailForm
                errorMessage={state.errorMessage}
                loading={state.loading}
                onEmail={onEmail}
                buttonLabel="SUBSCRIBE"
                message="Subscribe"
                align="left"
                withIcon
              />
            </div>
          )}
        </aside>
      </div>
      <style jsx>{`
        .content {
          display: grid;
          grid-template-columns: 1fr 0.8fr;
          align-items: center;
          margin: 2rem auto;
          padding: 0 1.5rem;
          max-width: 1024px;
        }
        .content h2 {
          font-size: 2rem;
          letter-spacing: -1px;
          line-height: 1.2;
          text-align: left;
          margin-bottom: 0.8rem;
        }
        .content h3 {
          font-size: 1rem;
          line-height: 1.8;
          text-align: left;
          font-weight: 400;
        }

        .email-form {
          text-align: right;
          position: relative;
        }

        .subscribe-success {
          text-align: right;
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
          .subscribe-success {
            text-align: center;
          }
        }
      `}</style>
    </Container>
  )
}
