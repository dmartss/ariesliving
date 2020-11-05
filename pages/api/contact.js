import sgMail from '@sendgrid/mail'

export default async (req, res) => {
  sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY)
  const { note, email, emotion, label } = req.body

  const content = {
    to: 'dan@ariesliving.com',
    from: { email: 'website@ariesliving.com', name: email },
    subject: `New Message From - ${email}`,
    text: note,
    html: `<p>Note: ${note}</p>\n
           <p>Page: ${label}</p>\n
           ${emotion ? `<p>Emotion: ${emotion}</p>` : ''}`
  }

  try {
    await sgMail.send(content)
    res.status(200).send('Message sent successfully.')
  } catch (error) {
    console.log('ERROR', error)
    res.status(400).send('Message not sent.')
  }
}
