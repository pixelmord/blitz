import {existsSync} from 'fs'

import db, {FindManyProjectArgs} from 'db'

const getProjects = async (args: FindManyProjectArgs) => {
  let projects = await db.project.findMany(args)

  projects.forEach(async (project) => {
    if (!existsSync(project.path)) {
      projects = projects.filter((projecttoDelete) => projecttoDelete !== project)
    }
  })

  return projects
}

export default getProjects
