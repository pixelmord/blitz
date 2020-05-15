import {Link} from 'blitz'

export const Nav = () => (
  <nav className="bg-gray-800">
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="border-b border-gray-700">
        <div className="flex items-center justify-between h-16 px-4 sm:px-0">
          <div className="flex items-center">
            <Link href="/">
              <a className="flex-shrink-0">
                <img className="w-8 h-8" src="/img/logos/blitz-mark-on-dark.svg" alt="" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </nav>
)
