import {ReactNode} from 'react'

export const Main = ({children, header = true}: {children: ReactNode; header?: boolean}) => (
  <main className={header ? '-mt-32' : '-mt-24'}>
    <div className="max-w-7xl mx-auto px-4 pb-12 sm:px-6 lg:px-8">
      <div className="bg-white shadow overflow-hidden rounded-md">{children}</div>
    </div>
  </main>
)
