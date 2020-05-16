import {Card} from 'app/components/Card'
import runProject from 'app/projects/mutations/runProject'
import {Project} from 'db'
import {useState} from 'react'

export const ConsoleCard = ({project}: {project: Project}) => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  return (
    <Card>
      <form
        onSubmit={async (e) => {
          e.preventDefault()
          setIsSubmitting(true)

          const data = {path: project.path}

          try {
            const res = await runProject({data})

            if (res) {
              setIsSubmitting(false)
            } else {
              alert('Something went wrong')
              setIsSubmitting(false)
            }
          } catch {
            alert('Something went wrong')
            setIsSubmitting(false)
          }
        }}
        className="flex items-center px-4 py-5 border-b border-gray-200 sm:px-6">
        <div className="flex-1">
          <h3 className="flex-1 text-lg font-medium leading-6">Commands</h3>
        </div>
        <div className="flex-shrink-0 ml-4">
          <span className="inline-flex rounded-md shadow-sm">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:shadow-outline">
              Run Project
            </button>
          </span>
        </div>
      </form>
      <ul
        className="h-full px-4 py-5 overflow-auto font-mono text-sm text-white bg-gray-900 sm:p-6"
        style={{minHeight: '16rem'}}>
        ...
      </ul>
      <p>{isSubmitting ? 'submitting' : 'not submitt'}</p>
    </Card>
  )
}
