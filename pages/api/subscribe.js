export default async (req, res) => {
  const { email } = req.body

  if (!email) {
    return res.status(400).json({ error: 'Email is required' })
  }

  try {
    // 3. Fetch the environment variables.
    const LIST_ID = process.env.REVINATE_URL
    const API_KEY = process.env.TOKEN
    // 4. API keys are in the form <key>-us3.

    // 5. The status of 'subscribed' is equivalent to a double opt-in.
    const response = await fetch(LIST_ID, {
      body: JSON.stringify({ email }),
      token: API_KEY,
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    // 7. Swallow any errors and return a better error message.
    if (response.status >= 400) {
      return res.status(400).json({
        error: `There was an error subscribing to the newsletter. Shoot me an email at [me@leerob.io] and I'll add you to the list.`
      })
    }

    // 8. If we made it this far, it was a success! 🎉
    return res.status(201).json({ error: '' })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: error.message || error.toString() })
  }
}
