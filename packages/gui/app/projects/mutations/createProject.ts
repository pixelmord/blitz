import db, {ProjectCreateArgs} from 'db'

const createProject = async (args: ProjectCreateArgs) => {
  const project = await db.project.create(args)

  return project
}

export default createProject
