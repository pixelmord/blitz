import {BlitzPage, GetStaticProps} from 'blitz'
import {Project} from 'db'

import {DarkContainer} from 'app/components/DarkContainer'
import {Header} from 'app/components/Header'
import {Main} from 'app/components/Main'
import {Nav} from 'app/components/Nav'
import getProjects from 'app/projects/queries/getProjects'

type StaticProps = {
  projects: Project[]
}

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  const projects = await getProjects({})

  return {
    props: {projects},
    unstable_revalidate: 1,
  }
}

const ProjectsPage: BlitzPage<StaticProps> = ({projects}) => (
  <>
    <DarkContainer>
      <Nav />
      {/* <Header /> */}
    </DarkContainer>
    <Main header={false}>
      <ul>
        <li>
          <a
            href="#"
            className="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out">
            <div className="flex items-center px-4 py-4 sm:px-6">
              <div className="min-w-0 flex-1 flex items-center">
                <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                  <div>
                    <div className="text-sm leading-5 font-medium truncate">Ricardo Cooper</div>
                    <div className="mt-2 flex items-center text-sm leading-5 text-gray-500">
                      <svg
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20">
                        <path
                          d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z"
                          clipRule="evenodd"
                          fillRule="evenodd"
                        />
                      </svg>
                      <span className="truncate">ricardo@example.com</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </Main>
  </>
)

export default ProjectsPage
