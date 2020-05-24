import {
  MEDIA_BREAK,
  MIN_WIDTH_TO_EXPAND_NAVIGATION,
  NAVBAR_EXPANDED_WIDTH,
  NAVBAR_WIDTH,
} from 'app/components/Layout'
import {ProjectListItem} from 'app/components/ProjectListItem'
import {Project} from 'db'
import styled from 'styled-components'
import {theme} from 'utils/theme'

import {ProjectList} from './ProjectList'

const NavigationWrapper = styled.div`
  grid-area: navigation;
  position: sticky;
  top: 0;
  width: ${NAVBAR_WIDTH}px;
  height: 100vh;
  overflow: hidden;
  overflow-y: auto;
`

const NavigationGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  align-content: start;
  grid-template-rows: auto;
  height: 100%;
  background: ${theme.white};
  border-right: 1px solid ${theme.smoke.default};
  position: fixed;
  top: 0;
  width: 100%;
  max-width: ${NAVBAR_WIDTH}px;
  overflow: hidden;
  overflow-y: auto;
  padding: 12px 0 16px;
  &::-webkit-scrollbar {
    width: 0px;
    height: 0px;
    background: transparent;
  }
  @media (max-width: ${MEDIA_BREAK}px) {
    position: fixed;
    top: 0;
    z-index: 9999
    width: 100%;
    max-width: ${NAVBAR_EXPANDED_WIDTH}px;
    grid-gap: 0px;
    padding: 12px 0;
  }
  @media (min-width: ${MIN_WIDTH_TO_EXPAND_NAVIGATION}px) {
    z-index: 9999
    width: 100%;
    max-width: ${NAVBAR_EXPANDED_WIDTH}px;
    grid-gap: 0px;
    padding: 12px 0;
  }
`

const Divider = styled.div`
  height: 1px;
  background: ${theme.smoke.default};
  margin: 8px 0;
`

export const Navigation = ({projects}: {projects: Project[]}) => {
  const sidenavisOpen = false

  return (
    <NavigationWrapper>
      <NavigationGrid>
        <ProjectList sidenavIsOpen={sidenavisOpen} projects={projects} />
        <Divider />
      </NavigationGrid>
    </NavigationWrapper>
  )
}
