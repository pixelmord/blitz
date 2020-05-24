import getProjects from 'app/projects/queries/getProjects'
import {BlitzPage, GetServerSideProps} from 'blitz'

export const getServerSideProps: GetServerSideProps = async ({res}) => {
  const projects = await getProjects({})

  if (projects.length > 0) {
    res.writeHead(307, {Location: `/projects/${projects[0].id}`})
    res.end()
  }

  return {
    props: {},
  }
}

const ProjectsPage: BlitzPage = () => <h1>Landing page</h1>

export default ProjectsPage
