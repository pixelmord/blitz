export const Header = ({name}: {name: string}) => (
  <header className="py-10">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-white sm:text-3xl sm:leading-9 sm:truncate">
            {name}
          </h2>
        </div>
      </div>
    </div>
  </header>
)
