import db, {FindOneProjectArgs} from 'db'

const getQuestion = async (args: FindOneProjectArgs) => {
  const project = await db.project.findOne(args)

  return project
}

export default getQuestion
