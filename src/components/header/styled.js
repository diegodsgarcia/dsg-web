import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const Header = styled.header`
  position: fixed;
  width: 100%;
  height: 80px;
  background-color: var(--background);
  z-index: 3;
`

const Nav = styled.nav`
  height: 100%;

  ul {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
  }

  ul li {
    margin: .5rem;
  }
`

const Link = styled(AniLink)`
  text-decoration: none;
  font-size: 1.4rem;
  color: var(--nav);
  opacity: .5;
  transition: .2s opacity;

  &.active {
    opacity: 1;
  }

  &:hover {
    opacity: 1;
  }
`

export { Header, Nav, Link }