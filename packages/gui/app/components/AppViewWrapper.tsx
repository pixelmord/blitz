import {
  MEDIA_BREAK,
  MIN_WIDTH_TO_EXPAND_NAVIGATION,
  NAVBAR_EXPANDED_WIDTH,
  NAVBAR_WIDTH,
  TITLEBAR_HEIGHT,
} from 'app/components/Layout'
import {ReactNode} from 'react'
import styled from 'styled-components'

type StyledAppViewWrapperProps = {
  isTwoColumn: boolean
}

const StyledAppViewWrapper = styled.div<StyledAppViewWrapperProps>`
  display: grid;
  width: 100%;
  grid-template-columns: ${(props) => (props.isTwoColumn ? `${NAVBAR_WIDTH}px 1fr` : '1fr')};
  grid-template-areas: ${(props) => (props.isTwoColumn ? "'navigation main'" : "'main'")};
  @media (max-width: ${MEDIA_BREAK}px) {
    grid-template-columns: 1fr;
    grid-template-rows: ${(props) => (props.isTwoColumn ? `${TITLEBAR_HEIGHT}px 1fr` : '1fr')};
    grid-template-areas: ${(props) => (props.isTwoColumn ? "'titlebar' 'main'" : "'main'")};
  }
  @media (min-width: ${MIN_WIDTH_TO_EXPAND_NAVIGATION}px) {
    grid-template-columns: ${(props) => (props.isTwoColumn ? `${NAVBAR_EXPANDED_WIDTH}px 1fr` : '1fr')};
    grid-template-areas: ${(props) => (props.isTwoColumn ? "'navigation main'" : "'main'")};
  }
`

export const AppViewWrapper = ({children}: {children: ReactNode}) => {
  // Might want to have some pages which don't use the sidebar layout later on
  const isTwoColumn = true

  return <StyledAppViewWrapper isTwoColumn={isTwoColumn}>{children}</StyledAppViewWrapper>
}
