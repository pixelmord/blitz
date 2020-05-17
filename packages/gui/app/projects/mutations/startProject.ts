import {dev} from '@blitzjs/server'
import {Project} from 'db'

const startProject = async (project: Project) => {
  try {
    await dev({
      rootFolder: project.path,
      port: 3000,
      hostname: 'localhost',
    })

    return true
  } catch {
    return
  }
}

export default startProject
