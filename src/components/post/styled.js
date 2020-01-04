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

  a {
    color: var(--text);
  }

  ul {
    list-style-type: '-';
    margin-left: .5rem;

    li {
      padding-left: .5rem;
    }
  }
`

export { Wrapper, Title, Article, Time }