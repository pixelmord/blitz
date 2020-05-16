import {Card} from 'app/components/Card'

export const PagesCard = ({pages}: {pages: string[]}) => (
  <Card>
    <div className="px-4 py-5 bg-white border-b border-gray-200 sm:px-6">
      <h3 className="text-lg font-medium leading-6">Pages</h3>
    </div>
    <ul>
      {pages.map((page, i) => (
        <li key={`${page}-${i}`} className={i > 0 ? 'border-gray-200 border-t' : ''}>
          <a
            href="#"
            className="block transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:bg-gray-50">
            <div className="flex items-center px-4 py-4 sm:px-6">
              <div className="flex items-center flex-1 min-w-0">
                <div className="text-sm font-medium leading-5 text-gray-600 truncate">{page}</div>
              </div>
            </div>
          </a>
        </li>
      ))}
    </ul>
  </Card>
)
