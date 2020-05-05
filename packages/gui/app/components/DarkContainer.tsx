import {ReactNode} from 'react'

export const DarkContainer = ({children}: {children: ReactNode}) => (
  <main className="pb-32 bg-gray-800">{children}</main>
)
