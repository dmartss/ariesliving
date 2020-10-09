import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { GA_TRACKING_ID } from 'lib/analytics'

class AriesLiving extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#000" />
          <link rel="shortcut icon" href="/favicon/favicon.ico" />
          <meta name="msapplication-TileColor" content="#000" />
          <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
          <meta name="theme-color" content="#000" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_TRACKING_ID}');
                  `
            }}
          />
        </body>
      </Html>
    )
  }
}

export default AriesLiving

/* <AmpWrap
ampOnly={
  <script
    async
    key="amp-analytics"
    custom-element="amp-analytics"
    src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"
  />
}
/>
<AmpWrap
ampOnly={
  <script
    async
    custom-element="amp-form"
    src="https://cdn.ampproject.org/v0/amp-form-0.1.js"
  />
}
/>

<AmpWrap
nonAmp={
  <>
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_TRACKING_ID}');
      `
      }}
    />
  </>
}
/>
 <AmpWrap
 ampOnly={
   <amp-analytics type="googleanalytics" id="analytics1" data-credentials="include">
     <script
       type="application/json"
       dangerouslySetInnerHTML={{
         __html: JSON.stringify({
           vars: {
             account: GA_TRACKING_ID,
             gtag_id: GA_TRACKING_ID,
             config: { GA_TRACKING_ID: { groups: 'default' } }
           },
           triggers: { trackPageview: { on: 'visible', request: 'pageview' } }
         })
       }}
     />
   </amp-analytics>
 }
/> */
