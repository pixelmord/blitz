import {BlitzApiRequest, BlitzApiResponse} from 'blitz'
import {existsSync} from 'fs'
import {homedir} from 'os'
import {join} from 'path'
import p from 'pdsl'

const isValid = p`{|
  path: string,
|}`

export default async (req: BlitzApiRequest, res: BlitzApiResponse) => {
  if (req.method === 'GET') {
    if (!isValid(req.query)) {
      return res.status(400).end()
    }

    const {path} = req.query as {path: string}

    const pathExists = existsSync(join(homedir(), path))

    return res.status(200).json({pathExists})
  }

  return res.status(404).end()
}
