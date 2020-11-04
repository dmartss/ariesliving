import { useState } from 'react'

export default function useSubscribe() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)

  const onEmail = async e => {
    setLoading(true)

    const res = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: e })
    })

    if (res.status === 200) {
      setLoading(false)
      setSuccess(true)
    } else {
      setLoading(false)
      setErrorMessage(true)
    }
  }

  return { onEmail, loading, success, errorMessage }
}
