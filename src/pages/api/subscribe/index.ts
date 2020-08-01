import { NextApiRequest, NextApiResponse } from 'next'
import { CampaignMonitorService } from '../../../services/CampaignMonitorService'

const sendError = (response: NextApiResponse, msg: string): void => {
  response.status(406).json({ msg })
}

const Api = async (
  request: NextApiRequest,
  response: NextApiResponse
): Promise<void> => {
  const { body } = request
  const { email } = JSON.parse(body)

  if (!email) return sendError(response, 'Email address not entered')

  const error = await CampaignMonitorService.subscribe(email)

  if (error) return sendError(response, error.Message)

  response.status(200).json({ msg: 'OK' })
}

export default Api
