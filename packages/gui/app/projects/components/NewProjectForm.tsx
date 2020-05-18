import {Card} from 'app/components/Card'
import createProject from 'app/projects/mutations/createProject'
import getCreateProjectStatus from 'app/projects/queries/getCreateProjectStatus'
import {Link, useQuery, useRouter} from 'blitz'
import {Suspense, useState} from 'react'
import {toKebabCase} from 'utils/toKebabCase'

const CommandStatus = ({query, path}: {query: (path: string) => Promise<any>; path: string}) => {
  // const [status] = useQuery(query, path, {refetchInterval: 100})

  return (
    <Card>
      <div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
        <div className="sm:flex sm:items-start">
          <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-red-100 rounded-full sm:mx-0 sm:h-10 sm:w-10">
            <svg className="w-6 h-6 text-red-600" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3 className="text-lg font-medium leading-6 text-gray-900" id="modal-headline">
              Deactivate account
            </h3>
            <div className="mt-2">
              <p className="text-sm leading-5 text-gray-500">
                Are you sure you want to deactivate your account? All of your data will be permanently
                removed. This action cannot be undone.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-3 bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse">
        <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
          <button
            type="button"
            className="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red sm:text-sm sm:leading-5">
            Deactivate
          </button>
        </span>
        <span className="flex w-full mt-3 rounded-md shadow-sm sm:mt-0 sm:w-auto">
          <button
            type="button"
            className="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue sm:text-sm sm:leading-5">
            Cancel
          </button>
        </span>
      </div>
    </Card>
  )
}

export const NewProjectForm = ({homedir}: {homedir: string}) => {
  const router = useRouter()
  const [name, setName] = useState('')
  const [path, setPath] = useState('projects/')
  const [isSubmitting, setIsSubmitting] = useState(false)

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        const data = {name, path: `${homedir}/${path}`}

        try {
          const project = await createProject({data})

          if (project) {
            router.push(`/projects/${project.id}`)
          } else {
            alert('Something went wrong')
            setIsSubmitting(false)
          }
        } catch {
          alert('Something went wrong')
          setIsSubmitting(false)
        }
      }}>
      <Card>
        <div className="grid px-4 py-5 md:grid-cols-3 md:gap-6 sm:p-6">
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium leading-6">New Project</h3>
            <p className="mt-1 text-sm leading-5 text-gray-500">
              Please provide us some details about your new Blitz project.
            </p>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-3 sm:col-span-2">
                <label htmlFor="name" className="block text-sm font-medium leading-5 text-gray-700">
                  Name
                </label>
                <div className="flex mt-1 rounded-md shadow-sm">
                  <input
                    name="name"
                    className="block w-full transition duration-150 ease-in-out form-input sm:text-sm sm:leading-5"
                    value={name}
                    onChange={(e) => setName(toKebabCase(e.target.value))}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-6">
              <label htmlFor="path" className="block text-sm font-medium leading-5 text-gray-700">
                Path
              </label>
              <div className="flex w-full max-w-sm mt-1 rounded-md shadow-sm">
                <span className="inline-flex items-center px-3 text-gray-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50 sm:text-sm">
                  {homedir}/
                </span>
                <input
                  name="path"
                  placeholder="your-project-path"
                  className="flex-1 block w-full transition duration-150 ease-in-out rounded-none form-input rounded-r-md sm:text-sm sm:leading-5 "
                  value={path}
                  onChange={(e) => setPath(toKebabCase(e.target.value))}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid px-4 py-5 md:grid-cols-3 md:gap-6 sm:p-6">
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium leading-6">Progress</h3>
            <p className="mt-1 text-sm leading-5 text-gray-500">Creating your project...</p>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div>
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-red-100 rounded-full sm:mx-0 sm:h-10 sm:w-10">
                <svg className="w-6 h-6 text-red-600" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg font-medium leading-6 text-gray-900" id="modal-headline">
                  Deactivate account
                </h3>
                <div className="mt-2">
                  <p className="text-sm leading-5 text-gray-500">
                    Are you sure you want to deactivate your account? All of your data will be permanently
                    removed. This action cannot be undone.
                  </p>
                </div>
              </div>
            </div>
            ;
          </div>
        </div>
      </Card>
      <div className="py-4 sm:flex sm:flex-row-reverse">
        <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
          <button
            type="submit"
            className="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo sm:text-sm sm:leading-5"
            disabled={isSubmitting}>
            Create
          </button>
        </span>
        <span className="flex w-full mt-3 rounded-md shadow-sm sm:mt-0 sm:w-auto">
          <Link href="/">
            <a className="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline sm:text-sm sm:leading-5">
              Cancel
            </a>
          </Link>
        </span>
      </div>
    </form>
  )
}
