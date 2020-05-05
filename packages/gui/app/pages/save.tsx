import {useState} from 'react'

import {Nav} from 'app/components/Nav'
import {NewProjectModal} from 'app/components/NewProjectModal'

export default () => {
  const [isOpen, setOpen] = useState(false)
  const open = () => setOpen(true)
  const close = () => setOpen(false)

  return (
    <>
      <Nav />
      <NewProjectModal isOpen={isOpen} close={close} />
      <main>
        <div className="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <button onClick={open}>Open</button>
          </div>
        </div>
      </main>
    </>
  )
}
