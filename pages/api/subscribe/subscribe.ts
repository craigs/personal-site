import fetch, { Headers } from 'node-fetch'
import ICampaignMonitorError from './ICampaignMonitorError'

const BASE_URL = 'https://api.createsend.com/api/v3.1'
const SUBSCRIBER_API = `${BASE_URL}/subscribers`

export default async (email: string): Promise<ICampaignMonitorError> => {
  const { CM_API, CM_LISTID } = process.env
  const options = { EmailAddress: email }
  const url = `${SUBSCRIBER_API}/${CM_LISTID}.json`
  const auth = 'Basic ' + Buffer.from(`${CM_API}:magic`).toString('base64')

  const response = await fetch(url, {
    body: JSON.stringify(options),
    headers: new Headers({
      Authorization: auth
    }),
    method: 'POST'
  })

  const { status } = response

  if (status >= 200 && status <= 202) return null

  const text = await response.text()
  return JSON.parse(text)
}
