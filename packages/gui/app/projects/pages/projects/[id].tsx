import {Navigation} from 'app/components/Navigation'
import getProject from 'app/projects/queries/getProject'
import getProjects from 'app/projects/queries/getProjects'
import {BlitzPage, GetServerSideProps, ssrQuery} from 'blitz'
import {Project} from 'db'
import Error from 'next/error'
import {getPages} from 'utils/getPages'

type ServerSideProps = {
  project: Project | null
  projectData?: {
    pages: {route: string; link: string}[]
  }
  projects: Project[]
}

export const getServerSideProps: GetServerSideProps<ServerSideProps> = async ({query, req, res}) => {
  const id = String(query.id)
  const project = await ssrQuery(getProject, {where: {id}}, {req, res})
  const projects = await ssrQuery(getProjects, {}, {req, res})

  if (!project) {
    return {
      props: {project, projects},
    }
  }

  // Get extra information about the project if it exists
  const pages = await getPages(project.path)

  const projectData = {pages}

  return {
    props: {project, projectData, projects},
  }
}

const ProjectPage: BlitzPage<ServerSideProps> = ({project, projectData, projects}) => {
  if (!project || !projectData) {
    return <Error statusCode={404} />
  }

  return (
    <>
      <Navigation projects={projects} />
    </>
  )
}

export default ProjectPage
