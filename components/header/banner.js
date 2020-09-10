import { useState } from 'react'
import EmailForm from '../email-form'

const Banner = () => {
  const [state, setState] = useState({ loading: false, success: false, errorMessage: false })

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
    <div className="banner">
      <div className="inner">
        <p>Share your email with us for special offers</p>

        <div className="email-form">
          <p className="mobile">Share your email with us for special offers</p>
          <EmailForm
            errorMessage={state.errorMessage}
            loading={state.loading}
            onEmail={onEmail}
            buttonLabel="SUBSCRIBE"
            message="Subscribe"
            align="left"
            withIcon
            flex
          />
        </div>
      </div>

      <style jsx>{`
        .banner {
          width: 100%;
          background: #000;
          color: #fff;
          min-height: 75px;
          display: flex;
          align-items: center;
        }

        .inner {
          width: 100%;
          max-width: 1024px;
          margin: 0 auto;
          padding: 0 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        p {
          color: #fff;
          margin: 0;
          transition: color 0.15s ease;
        }

        .mobile {
          display: none;
        }

        @media (max-width: 640px) {
          p {
            font-size: 14px;
          }

          p {
            display: none;
          }
          .email-form {
            padding: 5px;
            margin: auto;
            text-align: center;
          }

          .mobile {
            display: block;
            padding-bottom: 5px;
          }
        }
      `}</style>
    </div>
  )
}

export default Banner
