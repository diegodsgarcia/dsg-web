import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
`

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    padding: 0.4rem 1rem;
    background-color: ${theme.colors.white};
    color: ${theme.colors.bg};
    font-weight: bold;
  `}
`

export const Title = styled.h2`
  font-size: 1.6rem;
`

export const Date = styled.time`

`

export const Locale = styled.p``

export const Content = styled.div`
  ${({ theme }) => css`
    padding: 1rem;

    p {
      margin: 2rem 0;
    }

    img {
      width: 50rem;
    }

    a {
      color: ${theme.colors.white};
    }
  `}

`
