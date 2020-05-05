import {ReactNode} from 'react'

export const Main = ({children, header = true}: {children: ReactNode; header?: boolean}) => (
  <main className={header ? '-mt-32' : '-mt-24'}>
    <div className="px-4 pb-12 mx-auto max-w-7xl sm:px-6 lg:px-8">{children}</div>
  </main>
)
