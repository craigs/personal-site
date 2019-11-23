import sendError from './sendError'
import subscribe from './subscribe'

export default async ({ body }, res) => {
  const { email } = JSON.parse(body)
  if (!email) return sendError(res, 'Email address not entered')

  const error = await subscribe(email)

  if (error) return sendError(res, error.Message)

  res.status(200).json({ msg: 'OK' })
}
