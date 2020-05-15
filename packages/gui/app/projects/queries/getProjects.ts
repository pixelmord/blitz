import {existsSync} from 'fs'

import db, {FindManyProjectArgs} from 'db'

const getProjects = async (args: FindManyProjectArgs) => {
  let projects = await db.project.findMany(args)

  projects.forEach(async (project) => {
    const projectExists = existsSync(project.path)
    if (!projectExists) {
      projects = projects.filter((projecttoDelete) => projecttoDelete !== project)
    }
  })

  return projects
}

export default getProjects
