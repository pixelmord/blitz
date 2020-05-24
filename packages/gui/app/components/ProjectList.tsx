import {ProjectListItem} from 'app/components/ProjectListItem'
import {useRouter} from 'blitz'
import {Project} from 'db'

export const ProjectList = ({projects, sidenavIsOpen}: {projects: Project[]; sidenavIsOpen: boolean}) => {
  const router = useRouter()

  return (
    <>
      {projects.map((project) => {
        const isActive = project.id === router.query.id

        return <ProjectListItem isActive={isActive} project={project} sidenavIsOpen={sidenavIsOpen} />
      })}
    </>
  )
}
