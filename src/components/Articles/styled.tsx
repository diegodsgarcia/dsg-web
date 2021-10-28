import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 0 1rem;
    color: ${theme.colors.white};
  `}
`

export const List = styled.ul`

`

export const Item = styled.li`
  ${({ theme }) => css`
    padding: 0.1rem 0;


  `}
`

export const Link = styled.a`
  ${({ theme }) => css`
    display: inline-block;
    width: 100%;
    color: ${theme.colors.white};
    text-decoration: none;

    &:hover {
      color: ${theme.colors.branch};

      &:before {
        visibility: visible;
      }
    }

    &:before {
      content: '>';
      display: inline-block;
      margin-right: 1rem;
      visibility: hidden;
    }
  `}
`

