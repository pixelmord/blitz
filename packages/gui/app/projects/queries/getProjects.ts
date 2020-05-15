import db, {FindManyProjectArgs} from 'db'

import {existsSync} from 'fs'

const getQuestions = async (args: FindManyProjectArgs) => {
  let projects = await db.project.findMany(args)

  projects.forEach(async (project) => {
    const projectExists = existsSync(project.path)
    if (!projectExists) {
      projects = projects.filter((projecttoDelete) => projecttoDelete !== project)
    }
  })

  return projects
}

export default getQuestions
