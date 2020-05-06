import {BlitzApiRequest, BlitzApiResponse} from 'blitz'
import {homedir} from 'os'
import {basename, join} from 'path'

import {AppGenerator} from '@blitzjs/generator'

export default async (req: BlitzApiRequest, res: BlitzApiResponse) => {
  const name = req.body.name as string

  const destinationRoot = join(homedir(), 'dev', name)
  const appName = basename(destinationRoot)

  const generator = new AppGenerator({
    destinationRoot,
    appName,
    dryRun: false,
    useTs: true,
    yarn: true,
    version: '0.9.0',
    skipInstall: false,
  })

  try {
    await generator.run()
    return res.json({worked: true})
  } catch {
    return res.json({worked: false})
  }
}
