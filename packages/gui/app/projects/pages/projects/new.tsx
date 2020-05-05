import {DarkContainer} from 'app/components/DarkContainer'
import {Main} from 'app/components/Main'
import {Nav} from 'app/components/Nav'
import {Console} from 'app/projects/components/Console'
import {NewProjectForm} from 'app/projects/components/NewProjectForm'

const NewProjectPage = () => {
  return (
    <>
      <DarkContainer>
        <Nav />
      </DarkContainer>
      <Main header={false}>
        <NewProjectForm />
        <Console />
      </Main>
    </>
  )
}

export default NewProjectPage
