import EmailForm from '../email-form'

const Banner = () => {
  return (
    <div className="banner">
      <div className="inner">
        <p>Share your email with us for special offers</p>

        <div className="email-form">
          <p className="mobile">Share your email with us for special offers</p>
          <EmailForm buttonLabel="SUBSCRIBE" flex />
        </div>
      </div>

      <style jsx>{`
        .banner {
          width: 100%;
          background: var(--black);
          color: var(--white);
          min-height: 75px;
          display: flex;
          align-items: center;
        }

        .inner {
          width: 100%;
          max-width: 1024px;
          margin: 0 auto;
          padding: 0 var(--gap);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        p {
          color: var(--white);
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
