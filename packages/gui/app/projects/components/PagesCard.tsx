import {Card} from 'app/components/Card'

export const PagesCard = ({pages}: {pages: {route: string; link: string}[]}) => (
  <Card>
    <div className="px-4 py-5 bg-white border-b border-gray-200 sm:px-6">
      <h3 className="text-lg font-medium leading-6">Pages</h3>
    </div>
    <ul>
      {pages.map((page, i) => (
        <li key={`${page.route}-${i}`} className={i > 0 ? 'border-gray-200 border-t' : ''}>
          <a
            href="#"
            className="block transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:bg-gray-50">
            <div className="flex items-center px-4 py-4 sm:px-6">
              <div className="flex items-center flex-1 min-w-0">
                <div className="flex-1 min-w-0">
                  <div>
                    <div className="text-sm font-medium leading-5 truncate">{page.link}</div>
                    <div className="flex items-center mt-2 text-sm leading-5 text-gray-500">
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
                      <span className="truncate">{page.route}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
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
      ))}
    </ul>
  </Card>
)