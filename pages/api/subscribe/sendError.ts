import { NextApiResponse } from 'next'

export default (response: NextApiResponse, msg: string): void => {
  response.status(406).json({ msg })
}
