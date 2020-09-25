import fetch from 'node-fetch'
import { SENDGRID_API } from 'lib/constants'

export default async (req, res) => {
  if (req.method === 'POST') {
    const { note, email, emotion } = req.body
    await fetch(SENDGRID_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_SENDGRID_API_KEY}`
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [
              {
                email: 'dan@ariesliving.com'
              }
            ],
            subject: `New Website Email From ${email}`
          }
        ],
        from: { email: 'website@ariesliving.com', name: email },
        content: [
          {
            type: 'text/html',
            value: `Note: ${note} ${emotion ?? ''}`
          }
        ]
      })
    })

    return res.status(200).end()
  }
  return res.status(404).json({
    error: {
      code: 'not_found',
      messgae: "The requested endpoint was not found or doesn't support this method."
    }
  })
}
