export default async (req, res) => {
  if (req.method === 'POST') {
    const token = process.env.NEXT_PUBLIC_TOKEN
    const { email } = req.body

    const params = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        tokens: [token],
        contacts: [{ email: email }]
      })
    }

    try {
      const response = await fetch(
        'https://contact-api.inguest.com/api/add-contacts-to-lists',
        params
      )

      console.log(response.status)
      if (response.status === 200) {
        res.status(200).send('Subscribed successfully.')
      }
    } catch (error) {
      console.log('ERROR', error)
      res.status(400).send('Subscribe Unsuccessful.')
    }
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}
