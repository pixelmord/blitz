import {BlitzPage, GetServerSideProps, Head} from 'blitz'

import {Card} from 'app/components/Card'
import {DarkContainer} from 'app/components/DarkContainer'
import Error from 'next/error'
import {Header} from 'app/components/Header'
import {Main} from 'app/components/Main'
import {Nav} from 'app/components/Nav'
import {Project} from 'db'
import getProject from 'app/projects/queries/getProject'

type ServerSideProps = {
  project: Project | null
}

export const getServerSideProps: GetServerSideProps<ServerSideProps> = async ({query}) => {
  const id = String(query.id)
  const project = await getProject({where: {id}})

  return {
    props: {project},
  }
}

const ProjectPage: BlitzPage<ServerSideProps> = ({project}) => {
  if (!project) {
    return <Error statusCode={404} />
  }

  return (
    <>
      <DarkContainer>
        <Nav />
        <Header name={project.name} />
      </DarkContainer>
      <Main>
        <Card>
          <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
            <h3 className="text-lg font-medium leading-6">Project Information</h3>
            <p className="max-w-2xl mt-1 text-sm leading-5 text-gray-500">Project details and settings.</p>
          </div>
          <div>
            <dl>
              <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium leading-5 text-gray-500">Name</dt>
                <dd className="mt-1 text-sm leading-5 sm:mt-0 sm:col-span-2">{project.name}</dd>
              </div>
              <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium leading-5 text-gray-500">Application for</dt>
                <dd className="mt-1 text-sm leading-5 sm:mt-0 sm:col-span-2">Backend Developer</dd>
              </div>
              <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium leading-5 text-gray-500">Email address</dt>
                <dd className="mt-1 text-sm leading-5 sm:mt-0 sm:col-span-2">margotfoster@example.com</dd>
              </div>
              <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium leading-5 text-gray-500">Salary expectation</dt>
                <dd className="mt-1 text-sm leading-5 sm:mt-0 sm:col-span-2">$120,000</dd>
              </div>
              <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium leading-5 text-gray-500">About</dt>
                <dd className="mt-1 text-sm leading-5 sm:mt-0 sm:col-span-2">
                  Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa
                  consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in
                  ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui
                  eu.
                </dd>
              </div>
              <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium leading-5 text-gray-500">Attachments</dt>
                <dd className="mt-1 text-sm leading-5 sm:mt-0 sm:col-span-2">
                  <ul className="border border-gray-200 rounded-md">
                    <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm leading-5">
                      <div className="flex items-center flex-1 w-0">
                        <svg
                          className="flex-shrink-0 w-5 h-5 text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="flex-1 w-0 ml-2 truncate">resume_back_end_developer.pdf</span>
                      </div>
                      <div className="flex-shrink-0 ml-4">
                        <a
                          href="#"
                          className="font-medium text-indigo-600 transition duration-150 ease-in-out hover:text-indigo-500">
                          Download
                        </a>
                      </div>
                    </li>
                    <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm leading-5 border-t border-gray-200">
                      <div className="flex items-center flex-1 w-0">
                        <svg
                          className="flex-shrink-0 w-5 h-5 text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="flex-1 w-0 ml-2 truncate">coverletter_back_end_developer.pdf</span>
                      </div>
                      <div className="flex-shrink-0 ml-4">
                        <a
                          href="#"
                          className="font-medium text-indigo-600 transition duration-150 ease-in-out hover:text-indigo-500">
                          Download
                        </a>
                      </div>
                    </li>
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </Card>
      </Main>
    </>
  )
}

export default ProjectPage
