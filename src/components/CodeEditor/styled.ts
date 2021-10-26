import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  padding: 0 1rem;
`

export const CommandLine = styled.p`
  padding: 0.5rem 0;
`

export const Arrow = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.arrow};
    padding: 0 1rem;
  `}
`

export const Path = styled.strong`
  ${({ theme }) => css`
    color: ${theme.colors.command};
  `}
`

export const Branch = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.branch};
  `}
`

export const Command = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
`

export const Pre = styled.pre`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
`
