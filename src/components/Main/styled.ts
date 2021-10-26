import styled, { css }  from 'styled-components'

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 5rem;
    padding: 0 2rem;
    background-color: ${theme.colors.primary};
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: 1.8rem;
    color: ${theme.colors.white};
  `}
`

export const Nav = styled.nav`
  ${({ theme }) => css`
    display: flex;
    background-color: ${theme.colors.secondary};
    height: 4rem;
  `}
`

type ItemProps = {
  isActive: boolean
}

export const Item = styled.a<ItemProps>`
  ${({ theme, isActive }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.white};
    border-bottom: 0.2rem solid transparent;
    border-bottom-color: ${isActive ? theme.colors.active : 'transparent'};
    flex: 1;
    height: 100%;
    text-decoration: none;
  `}
`

export const Body = styled.main`
  ${({ theme }) => css`
    background-color: ${theme.colors.bg};
    min-height: calc(100vh - 9rem);
    overflow-x: auto;
  `}
`
