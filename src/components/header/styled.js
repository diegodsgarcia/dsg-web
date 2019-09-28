import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'

const Header = styled.header`
  height: 80px;
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

const Link = styled(GatsbyLink)`
  text-decoration: none;
  font-size: 1.4rem;
  color: var(--text);
`

export { Header, Nav, Link }