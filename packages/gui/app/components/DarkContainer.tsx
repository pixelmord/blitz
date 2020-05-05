import {ReactNode} from 'react'

export const DarkContainer = ({children}: {children: ReactNode}) => (
  <main className="bg-gray-800 pb-32">{children}</main>
)
