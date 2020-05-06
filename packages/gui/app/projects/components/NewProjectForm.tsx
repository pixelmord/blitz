import {useRouter} from 'blitz'
import {FormEvent, useState} from 'react'
import {useQuery} from 'react-query'

import {Card} from 'app/components/Card'
import {toKebabCase} from 'utils/toKebabCase'

const getHomedir = async () => {
  const res = await fetch('http://localhost:3000/api/homedir')
  const json = await res.json()
  return json as {homedir: string}
}

const getPathExists = async (path: string) => {
  const res = await fetch(`http://localhost:3000/api/path-exists?path=${path}`)
  const json = await res.json()
  return json as {pathExists: boolean}
}

export const NewProjectForm = () => {
  const {data: homedir} = useQuery('homedir', getHomedir)
  const router = useRouter()
  const [name, setName] = useState('')
  const [path, setPath] = useState('projects/')
  const [errors, setErrors] = useState([])
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const pathExists = await getPathExists(path)

    if (pathExists) {
      alert('NO!! ')
    }

    console.log(name)
  }

  return (
    <>
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
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mt-2 text-sm text-red-600" />
              </div>
            </div>
            <div className="flex flex-col mt-6">
              <label htmlFor="path" className="block text-sm font-medium leading-5 text-gray-700">
                Path
              </label>
              <div className="flex w-full max-w-sm mt-1 rounded-md shadow-sm">
                <span className="inline-flex items-center px-3 text-gray-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50 sm:text-sm">
                  {homedir && homedir.homedir}/
                </span>
                <input
                  name="path"
                  placeholder="your-project-path"
                  className="flex-1 block w-full transition duration-150 ease-in-out rounded-none form-input rounded-r-md sm:text-sm sm:leading-5 "
                  value={path}
                  onChange={(e) => setPath(toKebabCase(e.target.value))}
                />
              </div>
              <div className="mt-2 text-sm text-red-600">Error</div>
            </div>
          </div>
        </div>
      </Card>
      <div className="py-4 sm:flex sm:flex-row-reverse">
        <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
          <button
            type="button"
            className="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo sm:text-sm sm:leading-5">
            Create
          </button>
        </span>
        <span className="flex w-full mt-3 rounded-md shadow-sm sm:mt-0 sm:w-auto">
          <button
            type="button"
            className="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline sm:text-sm sm:leading-5">
            Cancel
          </button>
        </span>
      </div>
    </>
  )
}
