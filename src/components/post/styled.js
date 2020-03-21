import styled from 'styled-components'
import media from 'styled-media-query'

const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;

  ${media.lessThan('medium')`
    padding: 0 1rem;
  `}
`

const Title = styled.h1`
  font-size: 2.6rem;
  line-height: 3rem;
  padding-bottom: 2.5rem;
  color: var(--title);
`

const Time = styled.time`
  color: var(--textHover);
  opacity: .5;
  font-style: italic;
`

const Thumbnail = styled.figure`
  margin: 1rem 0;
`

const Article = styled.article`
  p {
    margin: 2rem 0;
    line-height: 1.8rem;
  }

  h1, h2, h3 {
    margin: 1.3rem 0;
    line-height: 2.3rem;
    color: var(--title);
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.8rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  a {
    color: var(--text);
  }

  strong, b {
    font-weight: bold;
  }

  ul {
    list-style-type: '-';
    margin-left: .5rem;

    li {
      padding-left: .5rem;
      line-height: 1.8rem;
    }
  }

  table {
    border-collapse: collapse;
  }

  table tr {
    td, th {
      padding: .8rem .5rem;
      border: 1px solid var(--border);
    }

    th {
      font-weight: 700;
    }
  }
`

export { Wrapper, Title, Thumbnail, Article, Time }