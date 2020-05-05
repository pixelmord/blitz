import {BlitzApiRequest, BlitzApiResponse} from 'blitz'
import {homedir} from 'os'

export default async (req: BlitzApiRequest, res: BlitzApiResponse) => {
  if (req.method === 'GET') {
    return res.status(200).json({homedir: homedir()})
  }

  return res.status(404).end()
}
