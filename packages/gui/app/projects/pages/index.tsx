import {Card} from 'app/components/Card'
import {DarkContainer} from 'app/components/DarkContainer'
import {Main} from 'app/components/Main'
import {Nav} from 'app/components/Nav'
import {EmptyProjects} from 'app/projects/components/EmptyProjects'
import {ProjectsList} from 'app/projects/components/ProjectsList'
import {ProjectsListHeader} from 'app/projects/components/ProjectsListHeader'
import getProjects from 'app/projects/queries/getProjects'
import {BlitzPage, GetServerSideProps} from 'blitz'
import {Project} from 'db'

type ServerSideProps = {
  projects: Project[]
}

export const getServerSideProps: GetServerSideProps<ServerSideProps> = async () => {
  const projects = await getProjects({})

  return {
    props: {projects},
  }
}

const ProjectsPage: BlitzPage<ServerSideProps> = ({projects}) => (
  <>
    <DarkContainer>
      <Nav />
    </DarkContainer>
    <Main header={false}>
      <Card>
        <ProjectsListHeader />
        {projects.length < 1 ? <EmptyProjects /> : <ProjectsList projects={projects} />}
      </Card>
    </Main>
  </>
)

export default ProjectsPage
