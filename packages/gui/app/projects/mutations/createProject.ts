import {existsSync} from 'fs'
import {homedir} from 'os'
import {basename, join} from 'path'

import db, {ProjectCreateArgs} from 'db'

const createProject = async (args: ProjectCreateArgs) => {
  const name = args.data.name

  const destinationRoot = join(homedir(), args.data.path, name)
  const appName = basename(destinationRoot)

  console.log('HELLO', destinationRoot, appName)

  if (existsSync(destinationRoot)) {
    return
  }

  const project = await db.project.create(args)

  return project
}

export default createProject
