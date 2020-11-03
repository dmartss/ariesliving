import { useState } from 'react'

export default function useSubscribe() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)

  const token = process.env.NEXT_PUBLIC_TOKEN

  const onEmail = async e => {
    setLoading(true)
    const body = {
      tokens: [token],
      contacts: [{ email: e }]
    }
    const res = await fetch('https://contact-api.inguest.com/api/add-contacts-to-lists', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
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
