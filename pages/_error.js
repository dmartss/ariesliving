import React from 'react'
import Error from 'components/error'

export default function ErrorPage({ status }) {
  return <Error status={status} />
}

ErrorPage.getInitialProps = ({ res, err }) => {
  const status = res ? res.statusCode : err ? err.statusCode : null
  return { status }
}
