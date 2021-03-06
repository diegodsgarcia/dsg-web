import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  * {
    box-sizing: border-box;
  }

  body {
    background-color: var(--background);
    color: var(--text);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 100%;
    line-height: 1;
    font-size: 1.2rem;
    transition: .2s background-color;
  }

  main {
    padding-top: 80px;
    min-height: 100vh;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  body.dark {
    --background: #000;
    --title: #fff;
    --text: #bfbfbf;
    --textHover: #fff;
    --nav: #fff;
    --figureHover: #000000b3;
    --themeButton: #fff;
    --codeEditor: #2d2d2d;
    --border: #ffffff61;
  }

  body.light {
    --background: #fff;
    --title: #000;
    --text: #717171;
    --textHover: #000;
    --nav: #000;
    --figureHover: #ffffffb3;
    --themeButton: #000;
    --codeEditor: #fff;
    --border: #000;
  }

  .gatsby-highlight {
    code[class*="language-"], pre[class*="language-"] {
      background-color: var(--codeEditor);
      transition: .2s background-color;
    }
  }
`

export default GlobalStyles