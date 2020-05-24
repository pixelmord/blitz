import Tippy from '@tippyjs/react'
import {MEDIA_BREAK, MIN_WIDTH_TO_EXPAND_NAVIGATION} from 'app/components/Layout'
import {Link} from 'blitz'
import {Project} from 'db'
import styled, {css} from 'styled-components'
import {getAccessibilityActiveState} from 'utils/getAccessibilityActiveState'
import {hexa} from 'utils/hexa'
import {theme} from 'utils/theme'
import {truncate} from 'utils/truncate'
import {useWindowSize} from 'utils/useWindowSize'

type ItemGridProps = {
  isActive: boolean
}

const AvatarGrid = styled.div<ItemGridProps>`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  align-content: start;
  color: ${(props) => (props.isActive ? theme.grey.black : theme.grey.silver)};
  font-weight: ${(props) => (props.isActive ? '600' : '500')};
  background: ${(props) => (props.isActive ? hexa(theme.grey.black, 0.04) : theme.white)};
  a img {
    opacity: ${(props) => (props.isActive ? '1' : '0.4')};
    filter: ${(props) => (props.isActive ? 'none' : 'grayscale(80%)')};
  }
  ${(props) =>
    props.isActive &&
    css`
      box-shadow: inset 3px 0 0 ${theme.grey.black};
      img,
      a img {
        filter: grayscale(0%) !important;
        opacity: 1 !important;
      }
    `}
  &:hover {
    box-shadow: inset 3px 0 0 ${(props) => (props.isActive ? theme.purple.default : theme.smoke.default)};
    background: ${(props) => (props.isActive ? hexa(theme.purple.default, 0.04) : theme.snow.default)};
    color: ${(props) => (props.isActive ? theme.purple.default : theme.grey.slate)};
    img,
    a img {
      filter: grayscale(0%);
      opacity: 1;
    }
  }
  @media (max-width: ${MEDIA_BREAK}px) {
    img,
    a img {
      filter: grayscale(0%);
      opacity: 1;
    }
  }
  @media (min-width: ${MIN_WIDTH_TO_EXPAND_NAVIGATION}px) {
    img,
    a img {
      filter: grayscale(0%);
      opacity: 1;
    }
  }
`

export const AvatarLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  position: relative;
  @media (max-width: ${MEDIA_BREAK}px) {
    flex-direction: row;
    justify-content: flex-start;
    padding: 8px 20px 8px 12px;
  }
  @media (min-width: ${MIN_WIDTH_TO_EXPAND_NAVIGATION}px) {
    flex-direction: row;
    justify-content: flex-start;
    padding: 8px 20px 8px 12px;
  }
`
type AvatarProps = {
  size: number
}

const Avatar = styled.img<AvatarProps>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 6px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.16);
  transition: box-shadow 0.2s ease-in-out;
  &:hover {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.2s ease-in-out;
  }
`

const Label = styled.span`
  font-size: 15px;
  margin-left: 12px;
  padding-right: 12px;
  ${truncate};
  display: none;
  @media (max-width: ${MEDIA_BREAK}px) {
    display: block;
  }
  @media (min-width: ${MIN_WIDTH_TO_EXPAND_NAVIGATION}px) {
    display: block;
  }
`

export const ProjectListItem = ({
  isActive,
  project,
  sidenavIsOpen,
}: {
  isActive: boolean
  project: Project
  sidenavIsOpen: boolean
}) => {
  const [windowWidth] = useWindowSize()

  const isWideViewport = windowWidth > MIN_WIDTH_TO_EXPAND_NAVIGATION

  return (
    <Tippy content={project.name} placement="left" disabled={isWideViewport}>
      <AvatarGrid isActive={isActive}>
        <Link href="/" {...getAccessibilityActiveState(isActive)}>
          <AvatarLink>
            <Avatar src={project.profilePhoto} size={sidenavIsOpen ? 32 : 36} />
            <Label>{project.name}</Label>
          </AvatarLink>
        </Link>
      </AvatarGrid>
    </Tippy>
  )
}
