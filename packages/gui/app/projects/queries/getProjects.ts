import db, {FindManyProjectArgs} from 'db'

const getQuestions = async (args: FindManyProjectArgs) => {
  const projects = await db.project.findMany(args)

  return projects
}

export default getQuestions
