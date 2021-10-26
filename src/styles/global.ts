
import {
  createGlobalStyle,
  css,
} from 'styled-components'

const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    @font-face {
      font-family: 'Ubuntu';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: local('Ubuntu Regular'), local('Ubuntu-Regular'),
          url('/fontsubuntu-regular.woff2') format('woff2');
    }
    @font-face {
      font-family: 'Ubuntu';
      font-style: italic;
      font-weight: 400;
      font-display: swap;
      src: local('Ubuntu Italic'), local('Ubuntu-Italic'),
          url('/fontsubuntu-italic.woff2') format('woff2');
    }
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      &::before,
      &::after {
        box-sizing: inherit;
      }
    }

    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.font.family};
      font-size: 1.6rem;
    }
  `}
`

export default GlobalStyles
