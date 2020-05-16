import {createWriteStream} from 'fs'

import {prod} from '@blitzjs/server'
import {BlitzApiRequest, BlitzApiResponse} from 'blitz'
import spawn from 'cross-spawn'
import {getStreamLocation} from 'utils/getStreamLocation'
import {runScript} from 'utils/runScript'

const RunStartCommand = async (req: BlitzApiRequest, res: BlitzApiResponse) => {
  const {id, cwd} = req.body as {id: string; cwd: string}

  const logStream = createWriteStream(getStreamLocation(id), {flags: 'a'})

  try {
    await prod({
      rootFolder: cwd,
      port: 3000,
      hostname: 'localhost',
    })
    return res.json({})
  } catch (e) {
    return res.json({e})
  }
}

export default RunStartCommand
