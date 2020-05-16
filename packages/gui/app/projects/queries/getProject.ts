import {existsSync} from 'fs'

import db, {FindOneProjectArgs} from 'db'

const getProject = async (args: FindOneProjectArgs) => {
  const project = await db.project.findOne(args)

  if (project && !existsSync(project.path)) {
    return null
  }

  return project
}

export default getProject
