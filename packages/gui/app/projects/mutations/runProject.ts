import {dev} from '@blitzjs/server'

type ProjectRunArgs = {
  data: {
    path: string
  }
}

const createProject = async (args: ProjectRunArgs) => {
  const {path} = args.data

  try {
    await dev({
      rootFolder: path,
      port: 3000,
      hostname: 'localhost',
    })

    return true
  } catch {
    return
  }
}

export default createProject
