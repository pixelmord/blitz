import {BlitzApiRequest, BlitzApiResponse} from 'blitz'
import {createWriteStream} from 'fs'
import p from 'pdsl'

import {runScript} from 'utils/runScript'

const isValid = p`{|
  id: string,
  name: string,
  cwd: string
|}`

export default async (req: BlitzApiRequest, res: BlitzApiResponse) => {
  if (req.method === 'POST') {
    if (!isValid(req.body)) {
      return res.json({})
    }

    const {id, name, cwd} = req.body as {id: string; name: string; cwd: string}

    const logStream = createWriteStream(`${id}.txt`, {flags: 'a'})

    runScript('blitz', ['new', name], cwd, logStream, (exitCode: number) => {
      return res.json({exitCode})
    })
  }

  return res.json({})
}
