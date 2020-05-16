import {existsSync} from 'fs'

import {AppGenerator} from '@blitzjs/generator'
import db, {ProjectCreateArgs} from 'db'
import pkg from 'package.json'

const createProject = async (args: ProjectCreateArgs) => {
  const {name, path} = args.data

  if (existsSync(path)) {
    return
  }

  const generator = new AppGenerator({
    destinationRoot: path,
    appName: name,
    dryRun: false,
    useTs: true,
    yarn: true,
    version: pkg.version,
    skipInstall: false,
  })

  try {
    await generator.run()

    const project = await db.project.create(args)

    return project
  } catch {
    return
  }
}

export default createProject
