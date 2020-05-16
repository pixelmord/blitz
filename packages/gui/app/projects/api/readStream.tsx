import {promises} from 'fs'

import {BlitzApiRequest, BlitzApiResponse} from 'blitz'
import {getStreamLocation} from 'utils/getStreamLocation'

const ReadStream = async (req: BlitzApiRequest, res: BlitzApiResponse) => {
  const {id} = req.query as {id: string}

  const output = await promises.readFile(getStreamLocation(id), 'utf-8')

  return res.json({output})
}

export default ReadStream
