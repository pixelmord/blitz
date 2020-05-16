import {DarkContainer} from 'app/components/DarkContainer'
import {Header} from 'app/components/Header'
import {Main} from 'app/components/Main'
import {Nav} from 'app/components/Nav'
import {ConsoleCard} from 'app/projects/components/ConsoleCard'
import {PagesCard} from 'app/projects/components/PagesCard'
import getProject from 'app/projects/queries/getProject'
import {BlitzPage, GetServerSideProps} from 'blitz'
import {Project} from 'db'
import Error from 'next/error'
import {getPages} from 'utils/getPages'

type ServerSideProps = {
  project: Project | null
  projectData?: {
    pages: string[]
  }
}

export const getServerSideProps: GetServerSideProps<ServerSideProps> = async ({query}) => {
  const id = String(query.id)
  const project = await getProject({where: {id}})

  if (!project) {
    return {
      props: {project},
    }
  }

  // Get extra information about the project if it exists
  const pages = await getPages(project.path)

  const projectData = {pages}

  return {
    props: {project, projectData},
  }
}

const ProjectPage: BlitzPage<ServerSideProps> = ({project, projectData}) => {
  if (!project || !projectData) {
    return <Error statusCode={404} />
  }

  return (
    <>
      <DarkContainer>
        <Nav />
        <Header name={project.name} meta={project.path} />
      </DarkContainer>
      <Main>
        <div className="flex grid flex-wrap grid-cols-1 gap-8 sm:grid-cols-2">
          <ConsoleCard project={project} />
          <PagesCard pages={projectData.pages} />
        </div>
      </Main>
    </>
  )
}

export default ProjectPage
