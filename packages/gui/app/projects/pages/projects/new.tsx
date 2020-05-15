import {DarkContainer} from 'app/components/DarkContainer'
import {Main} from 'app/components/Main'
import {Nav} from 'app/components/Nav'
import {NewProjectForm} from 'app/projects/components/NewProjectForm'
import {homedir} from 'os'

export const getServerSideProps = async () => ({
  props: {
    homedir: homedir(),
  },
})

const NewProjectPage = ({homedir}: {homedir: string}) => {
  return (
    <>
      <DarkContainer>
        <Nav />
      </DarkContainer>
      <Main header={false}>
        <NewProjectForm homedir={homedir} />
      </Main>
    </>
  )
}

export default NewProjectPage
