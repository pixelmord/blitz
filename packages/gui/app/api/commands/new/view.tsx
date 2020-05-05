import {BlitzApiRequest, BlitzApiResponse} from 'blitz'
import {promises} from 'fs'
import {homedir} from 'os'
import {join} from 'path'
import p from 'pdsl'

const isValid = p`{|
  id: string
|}`

export default async (req: BlitzApiRequest, res: BlitzApiResponse) => {
  if (req.method === 'GET') {
    if (!isValid(req.query)) {
      return res.json({})
    }

    const {id} = req.query as {id: string}

    try {
      const output = await promises.readFile(join(homedir(), '.blitz', `${id}.txt`), 'utf-8')

      return res.json({output})
    } catch {
      return res.json({})
    }
  }

  return res.json({})
}
