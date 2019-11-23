import createsend from 'createsend-node'

const { CM_API, CM_LISTID } = process.env
const auth = { apiKey: CM_API }
const api = new createsend(auth)

interface ISubscribeError {
  Code: number
  Message: string
}

const subscribe = (email: string) => {
  const options = { EmailAddress: email }

  return new Promise<ISubscribeError>(resolve => {
    api.subscribers.addSubscriber(CM_LISTID, options, err => resolve(err))
  })
}

const sendError = (res: any, msg: any) => res.status(406).json({ msg })

export default async ({ body }, res) => {
  const { email } = JSON.parse(body)

  if (!email) return sendError(res, 'No email address entered')

  const error = await subscribe(email)

  if (error) return sendError(res, error.Message)

  res.status(200).json({ msg: 'OK' })
}
