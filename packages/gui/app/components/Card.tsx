import {ReactNode} from 'react'

export const Card = ({children}: {children: ReactNode}) => (
  <div className="overflow-hidden bg-white rounded-md shadow">{children}</div>
)
