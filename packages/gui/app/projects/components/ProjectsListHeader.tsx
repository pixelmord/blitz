import {Link} from 'blitz'

export const ProjectsListHeader = () => (
  <div className="flex items-center px-4 py-5 border-b border-gray-200 sm:px-6">
    <div className="flex-1">
      <h3 className="flex-1 text-lg font-medium leading-6 text-gray-900">Projects</h3>
    </div>
    <div className="flex-shrink-0 ml-4">
      <span className="inline-flex rounded-md shadow-sm">
        <Link href="/projects/new">
          <a className="inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:shadow-outline">
            Create new project
          </a>
        </Link>
      </span>
    </div>
  </div>
)
