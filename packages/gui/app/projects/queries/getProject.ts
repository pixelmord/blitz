import db, {FindOneProjectArgs} from 'db'

const getProject = async (args: FindOneProjectArgs) => {
  const project = await db.project.findOne(args)

  return project
}

export default getProject
